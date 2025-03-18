import { FC } from "react";
import PostItem from "../PostItem";

const postitems = [
    { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
    { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
    { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
];

const RelatedArticle: FC = () => {
    return (
        <div className="mt-12 flex flex-col justify-center items-center">
            <div className="text-4xl font-semibold">Bài viết liên quan</div>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1440px] gap-8 mt-9">
                {postitems.map((post, index) => (
                    <div key={index} className="w-full">
                        <PostItem postitems={[post]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticle;
