import Image from "next/image";

const data = [
  {
    id: 4231,
    name: "John Fitness",
    desc: "Certified Personal Trainer with over a decade of experience in strength training and functional fitness. Passionate about helping clients achieve their fitness goals through personalized programs and motivation.",
    img: "/images/person/1.jpg"
  },
  {
    id: 3842,
    name: "Emily Wellness",
    desc: "Holistic Health Coach specializing in nutrition and mindfulness. Committed to empowering individuals to make sustainable lifestyle changes for overall well-being.",
    img: "/images/person/2.jpg"
  },
  {
    id: 4933,
    name: "Alex Strength",
    desc: "Strength and Conditioning Specialist dedicated to optimizing athletic performance. Experienced in designing comprehensive training programs tailored to individual needs.",
    img: "/images/person/6.jpg"
  }
]


function Card({ data }) {
  return (
    <div className='relative p-4 set-bg-light flex-center flex-col gap-4 set-border-divide hover:border-theme-500 rounded-lg overflow-hidden'>

      <div className="img-box w-1/2 aspect-square">
        <Image
          className="rounded-full overflow-hidden"
          src={data.img}
          width={500}
          height={500}
          alt={data.name}
        />
      </div>

      <div className="p-2 text-center">
        <p className="font-bold">{data.name}</p>
        <p className="text-sm">{data.desc}</p>
      </div>
    </div>
  )
}


export default function Team() {
  return (
    <section className="pb-0 section-padding">
      <div className="section-heading">
        <h2 className="clr-p">Team & Staff</h2>
        <p>Our dedicated team at Zenflix is composed of experienced and certified fitness professionals who are passionate about helping you achieve your fitness goals. Each member of our team brings a unique set of skills and expertise to create a dynamic and motivating environment.</p>
        <p>Meet some of our key team members</p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          data.map(item => {
            return <Card key={item.id + 12} data={item} />
          })
        }
      </div>

      <p className="mt-5 text-left md:text-center md:w-4/5 mx-auto">Together, we are committed to guiding you on your fitness journey, providing personalized support, and creating a positive and inspiring atmosphere.</p>
    </section>
  )
}
