import { FC } from "react";
import Image from "next/image";
import AdvertisementFirst from "../AdvertisementFirst";
import AdvertisementSecond from "../AdvertisementSecond";

interface ListItem {
    label: string;
    subItems?: ListItem[];
}

const listItems: ListItem[] = [
    { label: "Quy trình 5S là gì?" },
    { label: "Lợi ích quy trình 5S đem lại " },
    {
        label: "Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
        subItems: [
            { label: "3.1 Cải thiện rõ nét môi trường làm việc" },
            { label: "3.2 Tiết kiệm thời gian đáng kể" },
            { label: "3.3 Tăng năng suất làm việc" },
            { label: "3.4 Tiết kiệm chi phí" },
            { label: "3.5Tăng chất lượng sản phẩm" }
        ]
    },
    {
        label: "Quy trình 5S gồm các bước:",
        subItems: [
            { label: "4.1 Seiri (Ngăn nắp)" },
            { label: "4.2 Seiton (Sắp xếp)" },
            { label: "4.3 Seiso (Vệ sinh)" },
            { label: "4.4 Seiketsu (Tiêu chuẩn hóa)" },
            { label: "4.5 Shitsuke (Kỷ luật)" }
        ]
    },
    {
        label: "Quy trình được thực hiện như sau:",
        subItems: [
            { label: "5.1 Giai đoạn chuẩn bị" },
            { label: "5.2 Triển khai rộng rãi" },
            { label: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp" },
            { label: "5.4 Sàng lọc, sắp xếp và đánh giá" },
            { label: "5.5 Đánh giá" }
        ]
    },
    { label: "Quy trình 5S có giống với Kaizen?" },
    { label: "Đối tượng nào nên áp dụng 5S?" },
    { label: "Các yếu tố tạo nên thành công cho quy trình 5S" }
];

const DetailPostSidebar: FC = () => {
    return (
        <div className="mx-auto mt-12">
            <div className="text-xl">
                <div className="flex justify-between items-center">
                    <div className="text-4xl font-semibold mb-6">Nội dung bài viết</div>
                    <div className="mr-30">
                        <Image
                            src="/images/top-arrow-primary.png"
                            alt="image-1"
                            width={900}
                            height={600}
                            className="object-contain w-full"
                        />
                    </div>
                </div>
                <ol className="list-decimal list-inside space-y-4 cursor-pointer">  {/* khoảng cách giữa các mục chính */}
                    {listItems.map((item, index) => (
                        <li key={index}>
                            {item.label}
                            {item.subItems && (
                                <ol className="list-inside ml-6 my-4 space-y-4"> {/* khoảng cách giữa các mục con */}
                                    {item.subItems.map((subItem, subIndex) => (
                                        <li key={subIndex} className="hover:text-[var(--primary-color)]">
                                            {subItem.label}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
            <AdvertisementFirst />
            <AdvertisementSecond />
        </div>

    );
};

export default DetailPostSidebar;
