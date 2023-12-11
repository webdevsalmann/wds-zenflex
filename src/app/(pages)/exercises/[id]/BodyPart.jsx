"use client"
import ExerciseCard from "@/components/ui/ExerciseCard";
import useData from "@/context/DataContext"
import { useEffect, useState } from "react"

export default function BodyPart({ bodyPart }) {
    const [exercises, setExercises] = useState([]);
    const { getExerciseBodyPart } = useData();

    useEffect(() => {
        const setNewExercise = async () => {
            const newExercise = await getExerciseBodyPart(bodyPart)
            setExercises(newExercise)
        }
        setNewExercise();
    }, [])

    return (
        <div className="py-6 sm:py-9 md:py-12 lg:py-16">
            <h2 className="mb-6 clr-p">Similar Body Parts</h2>
            {exercises && exercises[0] ?
                <div className="mt-4 grid gap-4 grid-cols-[repeat(auto-fill,_minmax(17rem,_1fr))]">
                    {exercises.slice(1, 8).map((item) => <ExerciseCard key={item.id + "BodyPart"} data={item} />)}
                </div> :
                <div className="py-12 w-full">
                    <h3 className="text-center">Exercise Not Found</h3>
                </div>
            }
        </div>
    )
}
