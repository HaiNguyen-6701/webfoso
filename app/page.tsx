import Breadcrumbs from './components/Breadcrumbs';
import IntroSection from './components/IntroSection';
import MainContent from './components/MainContent';

const Home = () => {
  const paths = [
    { name: "Trang chủ", href: "/" },
    { name: "Tài nguyên", href: "/detailpost" },
    { name: "Blog", href: "/detailpost" }
  ];

  return (
    <div>
      <Breadcrumbs paths={paths} /> {/* Truyền paths vào Breadcrumbs */}
      <IntroSection paths={paths} /> {/* Truyền paths vào IntroSection */}
      <MainContent />
    </div>
  );
};

export default Home;
