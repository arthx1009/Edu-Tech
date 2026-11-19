import iconStrip from "../assets/images/about-cyan-icons.png";

type AboutIconProps = {
  index: number;
  className?: string;
};

export default function AboutIcon({ index, className = "" }: AboutIconProps) {
  return (
    <span
      className={`about-icon ${className}`.trim()}
      style={{ "--about-icon-index": index } as React.CSSProperties}
      aria-hidden="true"
    >
      <img src={iconStrip} alt="" />
    </span>
  );
}
