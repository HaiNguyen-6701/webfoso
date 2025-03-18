'use client';

import Image from "next/image";
import React from "react";
import Breadcrumbs from "./Breadcrumbs"; // Importing Breadcrumbs

interface IntroSectionProps {
    paths: { name: string; href: string }[]; // Định nghĩa kiểu cho paths
}

const IntroSection: React.FC<IntroSectionProps> = ({ paths }) => {
    return (
        <div className="py-8">
            <div className="px-4">
                <div className="flex justify-between">
                    <Breadcrumbs paths={paths} /> {/* Breadcrumbs sẽ nhận paths qua props */}
                </div>
                <div>
                    <div className="flex justify-between">
                        <Image
                            src="/images/calendar.png"
                            alt="down-arrow"
                            width={282}
                            height={268}
                            className="object-contain"
                        />
                        <div className="flex flex-col justify-center items-center">
                            <div className="text-[64px]">
                                Blog <span className="text-[#1AD598] font-semibold">FOSO</span> –
                            </div>
                            <div className="text-[64px]">
                                Cập Nhật Tin Tức
                                <span className="font-bold underlineintro relative inline-block z-1 ml-4">
                                    Mới Nhất
                                </span>
                            </div>

                            <div className="mt-4">Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</div>
                        </div>
                        <Image
                            src="/images/handwriting.png"
                            alt="down-arrow"
                            width={320}
                            height={251}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
