import Image from "next/image";
import SocialBar from "./SocialBar";
import Content from "./Content";
import DetailPostSidebar from "./DetailPostSidebar";
import RelatedArticle from "./RelatedArticle";

const MainContent: React.FC = () => {
    return (
        <div className="mx-auto mt-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xl">
                <div className="md:col-span-2 p-4 h-screen sticky top-0">
                    <SocialBar />
                </div>

                <div className="md:col-span-6 p-4">
                    <Content />
                </div>

                <div className="md:col-span-4 p-4">
                    <DetailPostSidebar />
                </div>
            </div>
            <RelatedArticle />
        </div>
    );
};

export default MainContent;
