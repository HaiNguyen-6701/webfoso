import Image from 'next/image';

interface ContentSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  titleSection: string;
  contentSection: string;
  textColor: string;
  subSections: {
    subTitle: string;
    content: string;
  }[];
}

const HomePage = () => {
  const sectionData1 = {
    imageSrc: "/images/image-2.png",
    imageAlt: "image-1",
    title: "Tại sao doanh nghiệp cần quy trình 5S?",
    titleSection: "3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?",
    contentSection: "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:",
    textColor: "var(--primary-color)",
    subSections: [
      {
        subTitle: "3.1 Cải thiện rõ nét môi trường làm việc",
        content: "Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu quả cho từng cá nhân trong doanh nghiệp.",
      },
      {
        subTitle: "3.2 Tiết kiệm thời gian đáng kể",
        content: "Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.",
      },
      {
        subTitle: "3.3 Tăng năng suất làm việc",
        content: "Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng năng suất làm việc.",
      },
      {
        subTitle: "3.4 Tiết kiệm chi phí",
        content: "Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí vận hành đáng kể cho doanh nghiệp của mình.",
      },
      {
        subTitle: "3.5 Tăng chất lượng sản phẩm",
        content: "5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không mong muốn.",
      },
    ],
  };

  const sectionData2 = {
    imageSrc: "/images/image-3.png",
    imageAlt: "image-2",
    title: "Quy trình 5s gồm các bước",
    titleSection: "4. Quy trình 5S gồm các bước",
    contentSection: "5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ bản sau:",
    textColor: "var(--primary-color)",
    subSections: [
      {
        subTitle: "4.1 Seiri (Ngăn nắp)",
        content: "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
      },
      {
        subTitle: "4.2 Seiton (Sắp xếp)",
        content: "Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.",
      },
      {
        subTitle: "4.3 Seiso (Vệ sinh)",
        content: "Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.",
      },
      {
        subTitle: "4.4 Seiketsu (Tiêu chuẩn hóa)",
        content: "Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các dụng cụ, thiết bị, tài liệu.",
      },
      {
        subTitle: "4.5 Shitsuke (Kỷ luật)",
        content: "Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo quy trình.",
      },
    ],
  };

  const sectionData3 = {
    imageSrc: "/images/image-4.png",
    imageAlt: "image-3",
    title: "Các bước thực hiện quy trình 5s",
    titleSection: "5. Quy trình được thực hiện như sau:",
    contentSection: "Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn nên lựa chọn quy trình:",
    textColor: "var(--primary-color)",
    subSections: [
      {
        subTitle: "5.1 Giai đoạn chuẩn bị",
        content: "Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.",
      },
      {
        subTitle: "5.2 Triển khai rộng rãi",
        content: "Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.",
      },
      {
        subTitle: "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
        content: "Đây là bước có thể khiến mọi người không hào hứng trong các bước của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào hứng cho từng cá nhân.",
      },
      {
        subTitle: "5.4 Sàng lọc, sắp xếp và đánh giá",
        content: "Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm kiếm sau này. ",
      },
      {
        subTitle: "5.5 Đánh giá",
        content: "Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá trình thực hiện quy trình 5S.",
      },
    ],
  };

  return (
    <div>
      <ContentSection {...sectionData1} />
      <ContentSection {...sectionData2} />
      <ContentSection {...sectionData3} />
    </div>
  );
};

const ContentSection: React.FC<ContentSectionProps> = ({ imageSrc, imageAlt, title, titleSection, contentSection, textColor, subSections }) => {
  return (
    <div className="">
      <div className="my-8">
        <div>
          <Image src={imageSrc} alt={imageAlt} width={900} height={600} className="object-contain w-full" />
        </div>
        <div className="text-[#667F93] text-[20px] text-center mt-2">{title}</div>
      </div>
      <div className="">
        <div className="">
          <div className="text-[var(--primary-color)] text-2xl font-semibold">{titleSection}</div>
          <div className="">{contentSection}</div>
        </div>
        {subSections.map((section, index) => (
          <div key={index} className="my-6">
            <div className={`font-semibold text-[${textColor}]`}>{section.subTitle}</div>
            <div className='mt-2'>{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
