import { mkdir, open, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const brochureRoot = path.join(projectRoot, "public", "assets", "Brochures");
const manifestsRoot = path.join(projectRoot, "src", "data", "brochures");
const pathways = ["kids", "pro-kids", "spark", "pro-spark", "future", "professional"];

async function collectPdfs(directory, results = []) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectPdfs(fullPath, results);
    } else if (entry.isFile() && /\.pdf$/i.test(entry.name)) {
      results.push(fullPath);
    }
  }

  return results;
}

async function isAvailablePdf(filePath) {
  const details = await stat(filePath);
  if (details.size === 0) return false;

  const file = await open(filePath, "r");
  try {
    const buffer = Buffer.alloc(5);
    const { bytesRead } = await file.read(buffer, 0, buffer.length, 0);
    return buffer.subarray(0, bytesRead).toString("ascii") === "%PDF-";
  } finally {
    await file.close();
  }
}

await mkdir(manifestsRoot, { recursive: true });

for (const pathway of pathways) {
  const pathwayRoot = path.join(brochureRoot, pathway);
  const pdfFiles = await collectPdfs(pathwayRoot);
  const courses = [];

  for (const filePath of pdfFiles) {
    const sourcePath = path.relative(pathwayRoot, filePath).split(path.sep).join("/");
    const segments = sourcePath.split("/");
    const filename = path.basename(filePath);
    const category = path.basename(path.dirname(filePath));
    const publicPath = ["assets", "Brochures", pathway, ...segments]
      .map((segment) => encodeURIComponent(segment))
      .join("/");

    courses.push({
      sourcePath,
      title: filename.replace(/\.pdf$/i, ""),
      category,
      filename,
      url: `/${publicPath}`,
      available: await isAvailablePdf(filePath),
    });
  }

  courses.sort((first, second) =>
    first.category.localeCompare(second.category) ||
    first.title.localeCompare(second.title) ||
    first.sourcePath.localeCompare(second.sourcePath),
  );

  const manifestPath = path.join(manifestsRoot, `${pathway}.json`);
  await writeFile(manifestPath, `${JSON.stringify(courses, null, 2)}\n`, "utf8");

  const categoryCounts = new Map();
  for (const course of courses) {
    categoryCounts.set(course.category, (categoryCounts.get(course.category) ?? 0) + 1);
  }
  const categorySummary = Array.from(categoryCounts, ([category, count]) => `${category}: ${count}`).join(", ");
  console.log(`${pathway}: ${courses.length} PDFs${categorySummary ? ` (${categorySummary})` : ""}`);
}
