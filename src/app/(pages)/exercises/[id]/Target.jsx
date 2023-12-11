"use client"
import ExerciseCard from "@/components/ui/ExerciseCard";
import useData from "@/context/DataContext"
import { useEffect, useState } from "react"

export default function Target({ target }) {
    const [exercises, setExercises] = useState([]);
    const { getExerciseByTarget } = useData();

    useEffect(() => {
        const setNewExercise = async () => {
            const newExercise = await getExerciseByTarget(target)
            setExercises(newExercise)
        }
        setNewExercise();
    }, [])



    return (
        <div className="py-6 sm:py-9 md:py-12 lg:py-16">
            <h2 className="mb-6 clr-p">Similar Targets</h2>
            {exercises && exercises[0] ?
                <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]">
                    {exercises.slice(1, 8).map((item) => <ExerciseCard key={item.id + "Target"} data={item} />)}
                </div> :
                <div className="py-12 w-full">
                    <h3 className="text-center">Exercise Not Found</h3>
                </div>
            }
        </div>
    )
}
