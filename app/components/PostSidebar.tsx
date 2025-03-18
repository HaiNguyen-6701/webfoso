"use client";
import Image from "next/image";
import { useState, FC } from "react";
import AdvertisementFirst from "./AdvertisementFirst";
import AdvertisementSecond from "./AdvertisementSecond";

type Category = {
    name: string;
    count: number;
}

type PostSidebarProps = {
    categories: Category[];
}

const PostSidebar: FC<PostSidebarProps> = ({ categories }) => {
    return (
        <div className="category">
            <div className="text-2xl font-semibold mb-6">Danh mục</div>
            <div className="space-y-4">
                {categories.map((category, index) => (
                    <a href="/detailpost"
                        key={index}
                        className="flex justify-between border-b border-[#F1F5F7] pb-2 hover:text-[var(--primary-color)]"
                    >
                        <div className="text-lg">{category.name}</div>
                        <div className="text-lg">{category.count}</div>
                    </a>
                ))}
            </div>
            <AdvertisementFirst />
            <AdvertisementSecond />
        </div>
    );
};

export default PostSidebar;
