import Form from "./Form";

export default function Contact() {
    return (
        <section className="section-padding pb-0">
            <div className="section-heading">
            <h2>Join Our Fitness Community Today!</h2>
            <p>Whether you have questions about our facilities, classes, or membership options, or you&apos;re ready to kick-start your fitness journey with us, we&apos;re here to help. Choose the option that suits you best - contact us directly or sign up online!</p>
            </div>
            <div className="flex gap-6 flex-col md:flex-row md:items-center">
                <div className="w-full md:w-1/2">
                    <div className="p-4">
                        <h3 className="text-center md:text-left">Get in Touch!</h3>
                        <p className="mt-2 text-center md:text-left">Have specific questions or need more information? Feel free to reach out to our friendly team. We&apos;re here to assist you on your fitness journey.</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <Form />
                </div>

            </div>
        </section>
    )
}
