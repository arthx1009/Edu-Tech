import iconStrip from "../assets/images/pathway-icons.png";
import professionalIcon from "../assets/images/pathway-professional-icon.png";
import lifeIcon from "../assets/images/pathway-life-icon.png";

type PathwayIconProps = {
  index: number;
  className?: string;
};

export default function PathwayIcon({ index, className = "" }: PathwayIconProps) {
  const separateIcon = index === 5 ? professionalIcon : index === 6 ? lifeIcon : null;

  return (
    <span
      className={`pathway-icon ${className}`.trim()}
      style={{ "--icon-index": index } as React.CSSProperties}
      role="img"
      aria-label=""
      aria-hidden="true"
    >
      <img
        className={separateIcon ? "pathway-icon__separate" : undefined}
        src={separateIcon ?? iconStrip}
        alt=""
      />
    </span>
  );
}
