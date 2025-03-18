"use client"
import styled from 'styled-components';
import Image from "next/image";
import ContentSection from './ContentSection';
import Feedback from './Feedback';
import RelatedArticle from './RelatedArticle';

// Định nghĩa style cho li với marker
const ListItem = styled.li`
  list-style-type: disc;
  list-style-position: inside;
  
  &::marker {
    color: var(--primary-color); /* Màu dấu chấm */
  }
`;

const Content: React.FC = () => {
    return (
        <div className="mx-auto mt-12">
            <div className="text-xs text-[#0F4F9E] bg-[#E2F0FE] rounded-lg py-1 px-2 w-[114px] h-[26px]">Quản Lý Sản Xuất</div>
            <div className="text-[36px] font-bold mt-4">Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết</div>
            <div className="flex justify-between my-8">
                <div className="flex gap-6 items-center">
                    <div>
                        <Image
                            src="/images/sublogo.jpg"
                            alt="up-right-arrow"
                            width={36}
                            height={36}
                            className="object-contain"
                        />
                    </div>
                    <div>
                        <div className="text-[#667F93]">Tác giả</div>
                        <div className="text-base font-semibold">FOSO Creator</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <Image
                            src="/images/CalendarBlank.png"
                            alt="calendar"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="text-gray-600 ml-3">Cập nhật vào: 17/11/2022</span>
                    </div>
                    <div className="mx-4 h-6 border-l-2 border-[#D9E1E7]" />
                    <div className="flex items-center">
                        <Image
                            src="/images/Clock.png"
                            alt="clock"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                        <span className="text-gray-600 ml-3">10 phút đọc</span>
                    </div>
                </div>

            </div>
            <div className="section-1">
                <div>
                    <Image
                        src="/images/image-1.png"
                        alt="image-1"
                        width={900}
                        height={600}
                        className="object-contain w-full"
                    />
                </div>
                <div className="text-[#667F93] text-[20px] text-center mt-2">Quy trình 5s là gì?</div>
                <div className="">
                    <div>
                        <Image
                            src="/images/bracket.jpg"
                            alt="image-1"
                            width={60}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="text-xl italic pl-16 pr-20 text-center">
                        Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây dựng 5S cần yếu tố gì? Bài viết dưới đây
                        của FOSO sẽ trả lời cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công của quy trình bạn nhé.
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="my-6 text-xl font-semibold text-[var(--primary-color)]">1. Quy trình 5S là gì?</div>
                <div>Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật Bản. </div>
                <div className='mt-6'>Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu trong tiếng Nhật:</div>
                <ul className="list-disc list-inside space-y-2 my-9">
                    <li className="text-lg">
                        <span className="text-[var(--primary-color)]">Seiri</span> (Ngăn nắp)
                    </li>
                    <li className="text-lg">
                        <span className="text-[var(--primary-color)]">Seiso</span> (Sạch sẽ)
                    </li>
                    <li className="text-lg">
                        <span className="text-[var(--primary-color)]">Seiton</span> (Trật tự)
                    </li>
                    <li className="text-lg">
                        <span className="text-[var(--primary-color)]">Shitsuke</span> (Kỷ luật)
                    </li>
                    <li className="text-lg">
                        <span className="text-[var(--primary-color)]">Seiketsu</span> (Tiêu chuẩn hóa)
                    </li>
                </ul>
                <div className="my-6 text-xl font-semibold text-[var(--primary-color)]">2. Lợi ích quy trình 5S đem lại</div>
                <div className="">Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi bước của quy trình với mục đích cải tiến môi trường làm việc của doanh nghiệp.</div>
                <div className="my-6">Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.</div>
                <div className="">Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa doanh nghiệp tích cực.</div>
            </div>
            <ContentSection />
            <div className="section-3">
                <div className="my-6 text-xl font-semibold text-[var(--primary-color)]">6. Quy trình 5S có giống với Kaizen?</div>
                <div>Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa chúng có mối quan hệ chặt chẽ với nhau.</div>
                <div className="border-l-4 pl-6 py-4 my-6 border-[var(--primary-color)]">
                    <div className='text-xl'>Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục trong doanh nghiệp.</div>
                    <div className='text-xl'>Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên tục và bền vững.</div>
                </div>
                <div className="border-l-4 pl-6 py-4 pr-80 my-6 border-[var(--primary-color)]">
                    <div className='text-xl'>Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt, tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. </div>
                </div>
                <div>Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp theo.</div>
            </div>
            <div className="section-4">
                <div className='mt-6'>
                    <Image
                        src="/images/image-5.png"
                        alt="image-1"
                        width={900}
                        height={600}
                        className="object-contain w-full"
                    />
                </div>
                <div className="text-[#667F93] text-[20px] text-center mt-2">Các yếu tố tạo nên thành công cho quy trình 5S</div>
                <div className="my-6 text-xl font-semibold text-[var(--primary-color)]">8. Các yếu tố tạo nên thành công cho quy trình 5S</div>
                <div>Và những nhân tố quyết định đến quá trình thành công của quy trình nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:</div>
                <ul className="list-disc list-inside space-y-2 my-9">
                    <li className="text-lg">
                        Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy tắc này hay không.
                    </li>
                    <li className="text-lg">
                        Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện triển khai 5S.
                    </li>
                    <li className="text-lg">
                        Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung của tổ chức, của doanh nghiệp.
                    </li>
                </ul>
                <div>Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương lai.</div>
            </div>
            <Feedback />
        </div>
    );
};

export default Content;
