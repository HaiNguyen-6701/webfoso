import Image from "next/image";

const AdvertisementFirst: React.FC = () => {
    return (
        <div className="flex-col justify-center items-center overflow-auto pb-16 pt-6 mt-10 max-w-[366px] rounded-[40px] bg-[linear-gradient(to_bottom,_#0375F3,_#013DA0)]">
            <Image
                src="/images/postsidebar-1.jpg"
                alt="up-right-arrow"
                width={367}
                height={245}
                className="w-full h-auto object-cover rounded-[40px]"
            />
            <div className="flex justify-center items-center">
                <Image
                    src="/images/postsidebar-2.png"
                    alt="up-right-arrow"
                    width={136}
                    height={136}
                    className="h-auto object-cover rounded-[40px]"
                />
                <div>
                    <div className="text-xl font-bold text-white">Miễn phí dùng thử</div>
                    <Image
                        src="/images/postsidebar-3.png"
                        alt="up-right-arrow"
                        width={156}
                        height={46}
                        className="h-auto object-cover rounded-[40px]"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center w-full mt-8">
                <a href="detailpost" className="flex justify-between items-center font-semibold h-[50px] w-full mx-[20px] border border-white rounded-[40px] py-[8px] px-[24px] bg-transparent text-white cursor-pointer">
                    Tham gia ngay
                    <Image
                        src="/images/up-right-arrow.png"
                        alt="up-right-arrow"
                        width={12}
                        height={12}
                        className="object-contain"
                    />
                </a>
            </div>
        </div>
    );
};

export default AdvertisementFirst;
