import Image from "next/image";

interface SocialIconProps {
  href?: string;
  filePath: string;
}

export default function SocialIcon({ href = "#", filePath }: SocialIconProps) {
  return (
    <a href={href}>
      <div className="relative w-5 h-5">
        <Image fill src={filePath} alt="" className="object-cover" />
      </div>
    </a>
  );
}
