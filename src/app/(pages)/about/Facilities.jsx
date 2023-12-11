import Image from "next/image";

export default function Facilities() {
  return (
    <section className="pb-0 section-padding">
      <div className="section-heading">
        <h2 className="clr-p">Mission and Values</h2>
        <p>At Zenflix, we take pride in offering top-notch facilities designed to enhance your fitness experience. Our gym features</p>
      </div>
      <div className="flex-center flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 ">
          <ul className="flex flex-col gap-2">
            <li className="set-text-balance"><span className="font-bold">State-of-the-Art Equipment: </span>From cardio machines to strength training equipment, we provide a wide range of high-quality tools for every fitness level.</li>
            <li className="set-text-balance"><span className="font-bold">Spacious Workout Areas: </span>Enjoy ample space to move and exercise comfortably, whether you prefer individual workouts or group classes.</li>
            <li className="set-text-balance"><span className="font-bold">Locker Rooms and Amenities: </span>Our clean and well-maintained locker rooms are equipped with showers, changing areas, and amenities to make your post-workout routine convenient and refreshing.</li>
            <li className="set-text-balance"><span className="font-bold">Specialized Studios: </span>Explore our specialized studios for classes such as yoga, spinning, and functional training, led by expert instructors.</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 img-box aspect-video">
          <Image
            className="transition-all"
            src="/images/hero/3.jpg"
            width={1600}
            height={900}
            alt="About"
          />
        </div>
      </div>
      <p className="mt-5 text-left md:text-center md:w-4/5 mx-auto">Discover the ZenFlix&apos;s difference through our world-class facilities, designed to elevate your fitness journey.</p>

    </section>
  )
}
