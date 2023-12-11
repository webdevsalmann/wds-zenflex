import Details from "./Details";

export default function page({ params }) {


    return (
        <>
            <Details id={params.id} />
        </>
    )
}
