import Breadcrumbs from "../components/Breadcrumbs";
import MainContent from "../components/detailpost/MainContent";
import "../globals.css";

export default function Home() {

    const paths = [
        { name: "Trang chủ", href: "/" },
        { name: "Tài nguyên", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Quản lý sản xuất", href: "#" }
    ];

    return (
        <div>
            <Breadcrumbs paths={paths} /> {/* Truyền paths vào Breadcrumbs */}
            <MainContent />
        </div>
    );
}
