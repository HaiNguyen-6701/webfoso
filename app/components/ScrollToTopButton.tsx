import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-8 right-8">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="bg-[var(--primary-color)] text-white p-4 rounded-full shadow-lg transition duration-300 hover:bg-[#128b64] focus:outline-none"
                    aria-label="Scroll to top"
                >
                    <Image
                        src="/images/top-arrow.png"
                        alt="up-right-arrow"
                        width={32}
                        height={32}
                        className="object-contain"
                    />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
