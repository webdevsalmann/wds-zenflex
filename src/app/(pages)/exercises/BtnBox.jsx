import useData from "@/context/DataContext"
import { useState } from "react";

export default function BtnBox() {
    const { displayData } = useData();
    const [currentPage, setCurrentPage] = useState(1);

    // Pagination
    const itemsPerPage = 12;
    const totalPages = Math.ceil(displayData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    exercise = exercise.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    };

    return (
        <div className="flex justify-end">
            <div className="mt-4 flex gap-4">
                <button
                    className="btn-soft"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                >Previous</button>

                <span>{currentPage} / {totalPages}</span>

                <button
                    className="btn-soft"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                >Next</button>
            </div>
        </div>
    )
}
