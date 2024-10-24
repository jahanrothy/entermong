import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {PaginationProps} from "../../types/table/pagination";

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, maxVisiblePages = 5, onSubmit }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const pageNumber = parseInt(searchParams.get('page') || '1', 10);
        const calculatedTotalPages = Math.ceil((totalItems ?? 0) / itemsPerPage);
        setCurrentPage(pageNumber);
        setTotalPages(calculatedTotalPages);
    }, [location.search, totalItems, itemsPerPage]);

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            setSearchParams({ page: String(pageNumber) });
            navigate(`?page=${encodeURIComponent(pageNumber)}`);
            onSubmit(pageNumber);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers: JSX.Element[] = [];
        const classes = "relative inline-flex items-center rounded-full w-7 h-7 text-primary text-center justify-center bg-transparent hover:text-white hover:bg-primary";
        const activeClass = "relative z-10 inline-flex items-center rounded-full w-7 h-7 text-center justify-center text-white bg-primary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base";

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button
                        key={`page-${i}`}  // Added unique key
                        onClick={() => handlePageChange(i)}
                        className={i === currentPage ? activeClass : classes}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            const leftEllipsis = currentPage > 2 ? <span key="left-ellipsis">...</span> : null;  // Added unique key
            const rightEllipsis = currentPage < totalPages - 1 ? <span key="right-ellipsis">...</span> : null;  // Added unique key

            let startPage = Math.max(1, currentPage - 2);
            let endPage = Math.min(currentPage + 2, totalPages);

            if (currentPage <= 2) {
                endPage = maxVisiblePages;
            } else if (currentPage >= totalPages - 1) {
                startPage = totalPages - maxVisiblePages + 1;
            }

            for (let i = startPage; i <= endPage; i++) {
                pageNumbers.push(
                    <button
                        key={`page-${i}`}  // Added unique key
                        onClick={() => handlePageChange(i)}
                        className={i === currentPage ? activeClass : classes}
                    >
                        {i}
                    </button>
                );
            }

            if (startPage > 1) {
                pageNumbers.unshift(leftEllipsis as JSX.Element);
            }
            if (endPage < totalPages) {
                pageNumbers.push(rightEllipsis as JSX.Element);
            }
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-between bg-white px-2 pt-8">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Previous
                </button>
                <button
                    onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Next
                </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-neutral-500">
                        Showing
                        <span>&nbsp;{Math.min(itemsPerPage * currentPage, (totalItems ?? 0))}</span> of{' '}
                        <span>{totalItems}</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex gap-x-4" aria-label="Pagination">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}
                            className="relative inline-flex items-center rounded-full w-7 h-7 justify-center text-primary bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                        {renderPageNumbers()}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                            className="relative inline-flex items-center rounded-full w-7 h-7 justify-center text-primary bg-gray-50 focus:z-20 focus:outline-offset-0">
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
