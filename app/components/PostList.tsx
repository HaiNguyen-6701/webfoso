import Image from "next/image";
import { useState } from "react";

type PostListProps = {

};

const PostList: React.FC<PostListProps> = () => {
    return (
        <div className="">
            <div className="text-4xl font-semibold mb-10">Tất cả bài viết</div>
            <div className="flex h-[318px] overflow-auto mx-auto rounded-[40px] bg-[linear-gradient(to_right,_#013DA0,_#0375F3)]">
                <div className="w-2/4 p-12 flex flex-col justify-between">
                    <div className="text-4xl font-semibold text-white">Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!</div>
                    <button className="flex justify-between items-center font-semibold w-[216px] h-[50px] border border-white rounded-[40px] py-[8px] px-[24px] bg-transparent text-white cursor-pointer">
                        Tham gia ngay
                        <Image
                            src="/images/up-right-arrow.png"
                            alt="up-right-arrow"
                            width={12}
                            height={12}
                            className="object-contain"
                        />
                    </button>
                </div>
                <div className="w-2/4 p-4">
                    <Image
                        src="/images/postlist_1.png"
                        alt="down-arrow"
                        width={472}
                        height={400}
                        className="object-contain ml-2"
                    />
                </div>
            </div>
        </div>
    );
};
export default PostList;