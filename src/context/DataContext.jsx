"use client"
import { useState, useContext, createContext } from "react";
import { datas } from "@/data/data";

const DataContext = createContext();


// eslint-disable-next-line react/prop-types
export function DataProvider({ children }) {
    // const [data, setData] = useState(datas)
    const [displayData, setDisplayData] = useState(datas)
    const [activeCat, setActiveCat] = useState("")

    // ================================================ FILTERING DATAS =====================================
    // UNIQUE BODY PARTS
    function getUniqueBodyParts() {
        const uniqueBodyParts = new Set();
        datas.forEach(item => { uniqueBodyParts.add(item.bodyPart); });
        return Array.from(uniqueBodyParts);
    }

    // SET EXERCISES BY BODY PARTS
    async function setExerciseByBodyParts(bodyPart) {
        const exercises = await datas.filter(item => item.bodyPart === bodyPart)
        setDisplayData(exercises);
    }

    // GET EXERCISES BY BODY PARTS
    async function getExerciseBodyPart(bodyPart) {
        const exercises = await datas.filter(item => item.bodyPart === bodyPart)
        return exercises;
    }

    // GET EXERCISES BY TARGETS
    async function getExerciseByTarget(target) {
        const exercises = await datas.filter(item => item.target === target)
        return exercises;
    }

    // GET EXERCISES BY EQUIPMENTS
    async function getExerciseByEquipment(equipment) {
        const exercises = await datas.filter(item => item.equipment === equipment)
        return exercises;
    }

    // SET SEARCH EXERCISES
    async function searchExercises(string) {
        const exercises = await datas.filter(item => {
            return item.bodyPart.includes(string) ||
                item.equipment.includes(string) ||
                item.name.includes(string) ||
                item.target.includes(string)
        })
        setDisplayData(exercises);
        setActiveCat("")
    }

    // GET EXERCISE BY ID
    async function getExerciseById(id) {
        const exercises = await datas.find(item => item.id === id)
        return exercises
    }

    const contextValues = {
        displayData,
        getUniqueBodyParts,
        setExerciseByBodyParts,
        searchExercises,
        activeCat,
        setActiveCat,
        getExerciseById,
        getExerciseBodyPart,
        getExerciseByTarget,
        getExerciseByEquipment
    }
    return (
        <DataContext.Provider value={contextValues}>{children}</DataContext.Provider>
    )
}

export default function useData() {
    return useContext(DataContext);
}