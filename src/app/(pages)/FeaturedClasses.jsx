import FeatureCard from "@/components/ui/FeatureCard";

const data = [
    {
        id: "498123",
        name: "Cardio Blast",
        desc: "Elevate your heart rate and boost your cardiovascular endurance with our Cardio Blast class. This high-energy workout combines dynamic movements with upbeat music to create an exhilarating fitness experience. Suitable for all fitness levels, Cardio Blast is designed to torch calories, improve stamina, and leave you feeling invigorated.",
        am: "9:00 AM - 10:00 AM",
        pm: "6:00 PM - 7:00 PM",
        instructor: "",
        image: "/images/hero/1.jpg",
    },
    {
        id: "84893",
        name: "Yoga Harmony",
        desc: "Experience tranquility and enhance your mind-body connection with our Yoga Harmony class. Led by our skilled yoga instructor, this class focuses on breath control, flexibility, and relaxation. Whether you're a yoga enthusiast or a beginner, Yoga Harmony provides a space to de-stress, improve flexibility, and find inner balance.",
        am: "10:30 AM - 11:30 AM",
        pm: "7:30 PM - 8:30 PM",
        instructor: "",
        image: "/images/hero/7.jpg",
    },
    {
        id: "93480",
        name: "Strength & Conditioning",
        desc: "Build lean muscle, increase strength, and boost metabolism with our Strength & Conditioning class. This full-body workout incorporates functional movements and resistance training to help you achieve your fitness goals. Whether you're looking to tone up or enhance athletic performance, this class is tailored to deliver results.",
        am: "11:00 AM - 12:00 PM",
        pm: "6:30 PM - 7:30 PM",
        instructor: "",
        image: "/images/hero/6.jpg",
    },
]

export default function FeaturedClasses() {
    return (
        <section className="section-padding pb-0">
            <div className="mb-8 section-heading">
                <h2><span className="clr-p">Featured</span> Classes</h2>
                <p>Discover our exciting range of classes designed to challenge and inspire. From high-intensity workouts to mind-body balance, we have something for everyone. Explore our featured classes below.</p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(item => {
                        return <FeatureCard key={item.id + 1} item={item} />
                    })
                }
            </div>
            {/* <FeatureCard /> */}
        </section>
    )
}
