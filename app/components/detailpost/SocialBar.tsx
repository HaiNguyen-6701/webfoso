import Image from "next/image";

interface SocialIcon {
  src: string;
  alt: string;
}

const SocialBar: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    { src: "/images/zalo.jpg", alt: "Zalo Icon" },
    { src: "/images/facebook.jpg", alt: "Facebook Icon" },
    { src: "/images/x.jpg", alt: "X Icon" },
    { src: "/images/in.jpg", alt: "LinkedIn Icon" },
    { src: "/images/robot.jpg", alt: "Robot Icon" },
  ];

  return (
    <div className="mx-auto mt-12 flex flex-col items-center space-y-4">
      {socialIcons.map((icon, index) => (
        <div
          key={index}
          className="border-2 border-[var(--primary-color)] rounded-lg p-4"
        >
          <Image
            src={icon.src}
            alt={icon.alt}
            width={32}
            height={32}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialBar;
