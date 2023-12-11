"use client"
import ExerciseCard from "@/components/ui/ExerciseCard";
import useData from "@/context/DataContext";
import BtnBox from "./BtnBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function Exercise() {
    const { displayData } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    // let exercises = displayData.slice(0, 12);

    // Pagination
    const itemsPerPage = 12;
    const totalPages = Math.ceil(displayData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const exercises = displayData.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    };


    return (
        <section className="section-padding pb-0">
            <div className="mb-10 section-heading">
                <h2 className="">Awsome <span className="clr-p"> Exercise</span> you should know</h2>
                <p>Elevate your workout with step-by-step animated guides showcasing the correct form for effective and safe exercises.</p>
            </div>

            <SearchBox setCurrentPage={setCurrentPage} />

            {displayData[0] && exercises[0] && <div className="flex justify-end">
                <div className="mt-4 flex-center gap-4">
                    <button
                        className="btn-soft"
                        disabled={currentPage <= 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                    >Previous</button>

                    <span>{currentPage} / {totalPages}</span>

                    <button
                        className="btn-soft"
                        disabled={currentPage >= totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                    >Next</button>
                </div>
            </div>}

            {exercises[0] ?
                <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]">
                    {exercises.map((item) => <ExerciseCard key={item.id + 1} data={item} />)}
                </div> :
                <div className="py-12 w-full">
                    <h3 className="text-center">Exercise Not Found</h3>
                </div>
            }


            {
                displayData[0] && exercises[0] && <div className="flex justify-end">
                    <div className="mt-4 flex-center gap-4">
                        <button
                            className="btn-soft"
                            disabled={currentPage <= 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >Previous</button>

                        <span>{currentPage} / {totalPages}</span>

                        <button
                            className="btn-soft"
                            disabled={currentPage >= totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >Next</button>
                    </div>
                </div>
            }

        </section >
    )
}
