import { useState } from "react";

export default function BMI() {
    const [unit, setUnit] = useState({ weight: '', height: '' });
    const [bmi, setBmi] = useState(null);

    const handleChange = (e) => {
        setUnit({ ...unit, [e.target.name]: e.target.value })
        setBmi(null)
    };

    const handleCalculate = () => {
        const weight = parseFloat(unit?.weight);
        const height = parseFloat(unit?.height);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            return alert('Please enter valid positive numbers to calculate your BMI.');
        }

        const bmiValue = weight / Math.pow(height, 2);
        const formattedBmi = parseFloat(bmiValue.toFixed(2));

        if (isNaN(formattedBmi) || formattedBmi === Infinity || formattedBmi === 0) {
            return alert('There was an issue calculating your BMI. Please check your inputs to ensure you have entered valid values.');
        }

        setBmi(formattedBmi);
    };

    return (
        <section className="section-padding pb-0">
            <div className="section-heading">
                <h2>Calculate Your <span className="clr-p">BMI</span></h2>
                <p>Welcome to our BMI Calculator! Body Mass Index (BMI) is a useful tool to assess if your weight is in a healthy range relative to your height. It&apos;s a simple calculation that provides valuable insights into your overall health.</p>
            </div>

            <div className="flex gap-6 flex-col md:flex-row md:items-center">
                <div className="w-full md:w-1/2 set-border-divide rounded-md">
                    <div className="p-4">
                        <p className=" text-center md:text-left">BMI is a numerical value of a person&apos;s weight in relation to their height. It is an indicator often used by health professionals to classify individuals into different weight categories - underweight, normal weight, overweight, and obesity.</p>
                        <div className="my-4 font-bold">BMI Categories:</div>
                        <ul>
                            <li
                                className={`set-text-balance ${bmi < 18.5 && "text-red-400"}`}>
                                <span className="font-medium">Underweight: </span>BMI less than 18.5
                            </li>
                            <li
                                className={`set-text-balance ${bmi >= 18.5 && bmi < 24.9 && "text-green-400"}`}>
                                <span className="font-medium">Normal Weight: </span>BMI between 18.5 and 24.9
                            </li>
                            <li
                                className={`set-text-balance ${bmi >= 25 && bmi <= 29.9 && "text-red-400"}`}>
                                <span className="font-medium">Overweight: </span>BMI between 25 and 29.9
                            </li>
                            <li
                                className={`set-text-balance ${bmi > 30 && "text-red-500"}`}>
                                <span className="font-medium">Obesity: </span>BMI 30 or greater
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="p-4 flex flex-col gap-4">
                        <label className="w-full" htmlFor="weight">
                            <div>Weight (in kilograms):</div>
                            <input className="w-full set-bg-light rounded set-border-divide" name="weight" value={unit.weight} type="text" onChange={handleChange} />
                        </label>
                        <label className="w-full" htmlFor="height">
                            <div>Height (in meters):</div>
                            <input className="w-full set-bg-light rounded set-border-divide" name="height" value={unit.height} type="text" onChange={handleChange} />
                        </label>
                        <button className="btn-solid w-fit" onClick={handleCalculate}>Calculate BMI</button>

                        {bmi && (
                            <div>
                                Your BMI is calculated using a weight of {unit.weight} kg and a height of {unit.height} m. It is <span className="font-bold underline">{bmi}</span>.
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </section>
    )
}
