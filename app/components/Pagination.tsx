"use client";
import Image from "next/image";
import React, { useState } from 'react';

const Pagination: React.FC = () => {
    const totalPages = 10; // Total number of pages
    const [currentPage, setCurrentPage] = useState<number>(1); // Current page (as a number)

    const handlePageClick = (page: number) => {
        // Ensure the page is within the range
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            console.log(`Going to page ${page}`);
        }
    };

    return (
        <div className="flex justify-between items-center w-full mx-auto mt-8 p-4">
            {/* Previous Page Button */}
            <button
                className="flex gap-3 text-lg font-semibold text-[#809FB8] hover:text-[#9ff0d4] cursor-pointer"
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <Image
                    src="/images/right-icon.png"
                    alt="image-1"
                    width={24}
                    height={24}
                    className="object-contain rotate-180"
                />
                Trang trước
            </button>

            {/* Page Numbers */}
            <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <button
                            key={page}
                            className={`w-[40px] h-[40px] rounded-[8px] flex items-center justify-center text-lg font-semibold text-[#809FB8] border border-[#9ff0d4] hover:bg-[#9ff0d4] cursor-pointer transition-all ${page === currentPage ? 'bg-[#9ff0d4] text-[#809FB8]' : ''
                                }`}
                            onClick={() => handlePageClick(page)}
                        >
                            {page}
                        </button>
                    );
                })}
            </div>

            {/* Next Page Button */}
            <button
                className="flex gap-3 text-lg font-semibold text-[#809FB8] hover:text-[#9ff0d4] cursor-pointer"
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Trang sau
                <Image
                    src="/images/right-icon.png"
                    alt="image-1"
                    width={24}
                    height={24}
                    className="object-contain"
                />
            </button>
        </div>
    );
};

export default Pagination;
