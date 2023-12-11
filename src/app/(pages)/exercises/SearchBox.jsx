import useData from "@/context/DataContext";
import { useState } from "react";

export default function SearchBox({ setCurrentPage }) {
    const { searchExercises, getUniqueBodyParts, activeCat, setActiveCat, setExerciseByBodyParts } = useData();
    const [search, setSearch] = useState("");
    const bodyParts = getUniqueBodyParts();

    return (
        <>
            <label htmlFor="searchExercise" className="w-full flex-center gap-2">
                <input className="w-full md:w-1/2 h-8 set-bg-light rounded" type="text" id="searchExercise" name="searchExercise" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Exercise" />
                <button className="btn-solid text-sm h-8" onClick={() => { searchExercises(search); setCurrentPage(1) }}>Search</button>
            </label>

            <div className="mt-4 flex gap-2 flex-wrap">
                {bodyParts !== "" && bodyParts.map((item) => {
                    return (
                        <div key={item + "BodyPart" || item} className="py-2 px-4 set-bg-light rounded cursor-pointer group" onClick={() => { setExerciseByBodyParts(item); setActiveCat(item); setCurrentPage(1) }}>
                            <p className={`text-xs font-bold capitalize cursor-pointer group-hover:text-brand-500 ${activeCat === item && "clr-p"}`}>{item}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
