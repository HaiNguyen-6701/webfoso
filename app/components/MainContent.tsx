import Image from "next/image";
import PostList from "./PostList";
import PostItem from "./PostItem";
import PostSidebar from "./PostSidebar";
import Pagination from "./Pagination";

const MainContent: React.FC = () => {
    const categories = [
        { name: "Tất cả", count: 102 },
        { name: "Thiết Kế Website", count: 36 },
        { name: "Thiết Kế App Mobile", count: 13 },
        { name: "Quản Lý Sản Xuất", count: 25 },
        { name: "Quản Lý Bán Hàng", count: 22 },
        { name: "TBáo Chí Nói Về FOSO", count: 7 },
        { name: "Tin Tức FOSO", count: 5 },
    ];

    const postitems = [
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
        { title: "Quản Lý Sản Xuất", subtitle: "Tại sao BOM quan trọng trong quản lý sản xuất?", date: "17/11/2022", readingTime: "10 phút đọc" },
    ];

    return (
        <div className="w-[1440px] mx-auto mt-12 mb-20">
            <div className="flex">
                <div className="w-full md:w-3/4 p-3">
                    <div className="">
                        <PostList />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-9">
                        {postitems.map((post, index) => (
                            <div key={index} className="w-full my-2">
                                <PostItem postitems={[post]} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/4 p-3">
                    <PostSidebar categories={categories} />
                </div>
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    );
};

export default MainContent;
