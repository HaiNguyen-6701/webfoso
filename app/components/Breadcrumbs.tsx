'use client'; 

import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  paths: { name: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <nav aria-label="Breadcrumb">
        <ul className="flex space-x-2 text-base">
          {paths.map((_, idx, arr) => {
            const isLast = idx === arr.length - 1;
            return (
              <React.Fragment key={idx}>
                <li>
                  {isLast ? (
                    <span className="font-bold">{arr[idx].name}</span>
                  ) : (
                    <Link href={arr[idx].href}>
                      <span className="font-normal text-black hover:text-gray-800">
                        {arr[idx].name}
                      </span>
                    </Link>
                  )}
                </li>
                {!isLast && (
                  <li>
                    <span>{">"}</span>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
