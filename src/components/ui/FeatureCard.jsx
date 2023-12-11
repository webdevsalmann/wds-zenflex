import Image from "next/image";

export default function FeatureCard({ item }) {
    return (
        <div className='relative set-bg-light rounded-lg' data-aos="fade-up">
            <div className="relative img-box aspect-[3/4] rounded-md overflow-hidden">
                <Image
                    src={item.image}
                    width={300}
                    height={400}
                    alt="Picture of the author"
                />
                <div className="absolute top-0 left-0 m-4 py-1 px-2 set-bg clr-p text-lg font-bold rounded">{item.name}
                </div>
                <div className="absolute bottom-0 right-0 left-0 p-4 pt-12 bg-gradient-to-t from-zinc-950 z-10">
                    <div className="my-2 line-clamp-3 text-sm">{item.desc}</div>
                </div>
            </div>
        </div>
    )
}
