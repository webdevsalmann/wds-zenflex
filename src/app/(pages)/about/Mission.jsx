import Image from "next/image";

export default function Mission() {
    return (
        <section className="pb-0 section-padding">
            <div className="section-heading">
                <h2 className="clr-p">Mission and Values</h2>
            </div>
            <div className="flex-center flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 ">
                    <p className="mb-4">At ZenFlex, our mission is to inspire and empower individuals to achieve their fitness goals, promoting a healthier and happier lifestyle. We are dedicated to providing a supportive and inclusive environment where every member feels motivated and valued on their fitness journey.</p>

                    <ul className="flex flex-col gap-2">
                        <li className="set-text-balance"><span className="font-bold">Commitment to Excellence: </span>We strive for excellence in every aspect of our services, from state-of-the-art facilities to professional trainers and diverse fitness programs.</li>
                        <li className="set-text-balance"><span className="font-bold">Community and Inclusivity: </span>We believe in fostering a community that embraces diversity and inclusivity, where everyone feels welcome and supported.</li>
                        <li className="set-text-balance"><span className="font-bold">Integrity: </span>We uphold the highest standards of integrity, transparency, and honesty in our interactions with members and the community.</li>
                        <li className="set-text-balance"><span className="font-bold">Passion for Health: </span>Our passion for health and well-being drives us to continually evolve our offerings and stay at the forefront of fitness trends.</li>
                        <li className="set-text-balance"><span className="font-bold">Team Spirit: </span>We work as a team, valuing collaboration and the collective effort to help our members reach their fitness goals.</li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 img-box aspect-video">
                    <Image
                        className="transition-all"
                        src="/images/hero/1.jpg"
                        width={1600}
                        height={900}
                        alt="About"
                    />
                </div>
            </div>

        </section>
    )
}
