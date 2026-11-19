import type { Theme } from "../hooks/useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={!isDark}
      onClick={onToggle}
    >
      <span className="theme-toggle__sun" aria-hidden="true">
        ☼
      </span>
      <span className="theme-toggle__track" aria-hidden="true">
        <span className={`theme-toggle__knob${isDark ? "" : " is-light"}`} />
      </span>
    </button>
  );
}
