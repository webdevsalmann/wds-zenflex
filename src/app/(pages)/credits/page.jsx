
export default function Page() {
  return (
    <section className="py-8 px-4 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16">
      <h1 className="mb-8 text-center clr-p">Credits</h1>
      <div className="mx-auto w-full md:w-1/2">
        <h2 className="mb-6">Images</h2>
        <p className="mb-4 flex gap-4 w-full ">
          <div className="font-medium">Images: </div>
          <a className="capitalize set-text-link" href="https://www.manypixels.co/gallery" target="_blank">manypixels</a>
          <a className="capitalize set-text-link" href="https://www.unsplash.com" target="_blank">Unsplash</a>
        </p>
        <p className="mb-4 flex gap-4 w-full ">
          <div className="font-medium">API: </div>
          <a className="capitalize set-text-link" href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb" target="_blank">ExerciseDB</a>
        </p>
      </div>
    </section>
  )
}
