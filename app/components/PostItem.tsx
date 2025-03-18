import Image from "next/image";
import React from "react";

type PostItem = {
    title: string;
    subtitle: string;
    date: string;
    readingTime: string;
};

type PostItemProps = {
    postitems: PostItem[];
};

const PostItem: React.FC<PostItemProps> = ({ postitems }) => {
    return (
        <div className="flex flex-wrap gap-4 cursor-pointer">
            {postitems.map((item, index) => (
                <div key={index} className="max-w-[505px] mx-auto bg-white rounded-[20px] shadow-lg overflow-hidden transform transition duration-300 hover:scale-101 hover:shadow-xl">
                    {/* Image */}
                    <div className="pointer-events-none">
                        <Image
                            src="/images/postlist_2.png"
                            alt="up-right-arrow"
                            width={505}
                            height={475}
                            className="object-contain"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-4 pointer-events-none">
                        <div className="text-xs text-[#0F4F9E] bg-[#E2F0FE] rounded-lg py-1 mb-4 mt-2 px-2 w-[114px] h-[26px]">
                            {item.title}
                        </div>
                        <div className="text-2xl font-bold mb-4">{item.subtitle}</div>
                        <div className="flex mb-4">
                            <div className="flex items-center">
                                <Image
                                    src="/images/CalendarBlank.png"
                                    alt="calendar"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <span className="text-base text-gray-600 ml-2">{item.date}</span>
                            </div>
                            <div className="mx-4 h-6 border-l-2 border-[#D9E1E7]" />
                            <div className="flex items-center justify-end">
                                <Image
                                    src="/images/Clock.png"
                                    alt="clock"
                                    width={24}
                                    height={24}
                                    className="object-contain"
                                />
                                <span className="text-base text-gray-600 ml-2">{item.readingTime}</span>
                            </div>
                        </div>
                        <a href="#" className="flex gap-5 text-[#667F93] hover:underline">
                            <span>Khám phá thêm</span>
                            <Image
                                src="/images/right-icon.png"
                                alt="right arrow"
                                width={18}
                                height={15}
                                className="object-contain"
                            />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostItem;
