import Image from "next/image";

export default function History() {
  return (
    <section className="pb-0 section-padding">
      <div className="section-heading">
        <h2 className="clr-p">Mission and Values</h2>
      </div>
      <div className="flex-center flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2 img-box aspect-video">
          <Image
            className="transition-all"
            src="/images/hero/2.jpg"
            width={1600}
            height={900}
            alt="About"
          />
        </div>

        <div className="w-full md:w-1/2 ">
          <p className="mb-4">Established in 2007, ZenFlix has been a cornerstone of the local fitness community. Founded by John Doe, a fitness enthusiast with a vision to create a space that goes beyond traditional gyms, we have grown from a small fitness center to a comprehensive wellness hub.</p>

          <p>Over the years, we have witnessed countless success stories, celebrated milestones, and adapted to the evolving needs of our members. From our humble beginnings to becoming a trusted fitness destination, our commitment to providing exceptional fitness experiences remains unwavering.</p>
        </div>
      </div>

    </section>
  )
}
