"use client"
import { Ibarbell, Ibody, Itire } from "@/components/svgs/logo";
import useData from "@/context/DataContext"
import Image from "next/image"
import { useEffect, useState } from "react"
import Equipment from "./Equipment";
import Target from "./Target";
import BodyPart from "./BodyPart";

export default function Details({ id }) {
    const [exercise, setExercise] = useState({});
    const { getExerciseById } = useData();

    useEffect(() => {
        const setNewExercise = async () => {
            const newExercise = await getExerciseById(id)
            setExercise(newExercise)
        }
        setNewExercise();
    }, [getExerciseById, id])

    const exerciseExist =!exercise || Object.keys(exercise).length === 0;
    if (exerciseExist) {
        return <></>; // or return a loading/error message
    }

    return (
        <section className="section-padding">
            <div className="mb-6 sm:mb-9 md:mb-12 flex flex-col md:flex-row rounded-md overflow-hidden">
                <div className="img-box w-full md:w-1/2">
                    <Image
                        src={exercise?.gifUrl}
                        width={70000}
                        height={50000}
                        alt={exercise.name}
                    />
                </div>
                <div className="p-4 md:w-1/2 set-bg-light">
                    <div className="text-2xl font-semibold">{exercise?.name}</div>
                    <div className="mt-4 flex gap-4">
                        <div className="p-4 sm:p-6 md:p-8 icon-box flex-col gap-4 aspect-square set-border-divide rounded-md">
                            <Ibody className="text-neutral-300" />
                            {exercise?.bodyPart}
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 icon-box flex-col gap-4 aspect-square set-border-divide rounded-md">
                            <Ibarbell className="text-neutral-300" />
                            {exercise?.equipment}
                        </div>
                        <div className="p-4 sm:p-6 md:p-8 icon-box flex-col gap-4 aspect-square set-border-divide rounded-md">
                            <Itire className="text-neutral-300" />
                            {exercise?.target}
                        </div>
                    </div>
                </div>
            </div>

            <BodyPart bodyPart={exercise.bodyPart} />
            <Target target={exercise?.target} />
            <Equipment equipment={exercise?.equipment} />
        </section>
    )
}
