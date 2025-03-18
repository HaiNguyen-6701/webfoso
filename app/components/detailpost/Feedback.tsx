import Image from "next/image";
import { FC, useState } from "react";

interface Reaction {
    src: string;
    alt: string;
    count: number;
    label: string;
}

const reactions: Reaction[] = [
    { src: "/images/like.png", alt: "like", count: 1, label: "Hữu ích" },
    { src: "/images/greenheart.png", alt: "green heart", count: 2, label: "Yêu thích" },
    { src: "/images/startruck.png", alt: "star struck", count: 0, label: "Thú vị" },
    { src: "/images/hushedface.png", alt: "hushed face", count: 1, label: "Bất ngờ" },
    { src: "/images/like.png", alt: "like", count: 0, label: "Nhàm chán" },
    { src: "/images/angryface.png", alt: "angry face", count: 0, label: "Tức giận" },
];

const Feedback: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="mx-auto mt-12">
            <div className="shadow-[1px_1px_10px_rgba(0,0,0,0.2)] rounded-2xl py-8 px-12">
                <div className="text-center my-6">
                    <div className="text-3xl font-semibold">Bạn thấy bài viết như thế nào?</div>
                    <div className="text-2xl text-[#33404A]">4 phản hồi</div>
                </div>
                <div className="flex justify-center space-x-6">
                    {reactions.map((reaction, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center gap-3 w-32 flex-grow-0 p-2 rounded-lg cursor-pointer
                                        ${activeIndex !== index ? "hover:bg-[#9ff0d4]" : ""}
                                        transition duration-300
                                        ${activeIndex === index ? "text-[var(--primary-color)] border border-[var(--primary-color)] rounded-lg" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <Image
                                src={reaction.src}
                                alt={reaction.alt}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <div className="text-2xl font-bold">{reaction.count}</div>
                            <div className="text-xl text-center">{reaction.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
