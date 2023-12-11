import MembershipCard from "@/components/ui/MembershipCard";

const data = [
    {
        id: "412313",
        name: "Basic",
        price: 4.25,
        access: ["Unlimited access to the gym facilities during operating hours.", "Attend any standard fitness classes.", "Use of locker room facilities."],
        benefit: "This plan is perfect for those looking for a straightforward gym experience with access to essential facilities and standard classes.",
        image: "/images/hero/1.jpg",
    },
    {
        id: "52344",
        name: "Premium",
        price: 9.99,
        access: ["Unlimited 24/7 access to the gym.",
            "Attend any fitness class, including premium and specialty classes.",
            "Priority access to premium locker room facilities."
        ],
        extras: [
            "Exclusive discounts on personal training sessions.",
            "Complimentary fitness assessment."
        ],
        benefit: "Elevate your fitness journey with our Premium Membership, offering round-the-clock access, additional class options, and exclusive perks.",
        image: "/images/hero/2.jpg",
    },
    {
        id: "5345324",
        name: "Elite",
        price: 14.99,
        access: [
            "Unlimited 24/7 access to the gym.",
            "Attend any fitness class, including premium, specialty, and exclusive elite classes.",
            "VIP access to luxury locker room facilities."
        ],
        extras: [
            "Personalized fitness program designed by a dedicated trainer.",
            "Priority registration for workshops and events.",
            "Complimentary nutritional consultation."
        ],
        benefit: "Experience the pinnacle of fitness with our Elite Membership, designed for those seeking a comprehensive and personalized approach to their health and wellness journey.",
        image: "/images/hero/3.jpg",
    },
]

export default function MembershipOptions() {
    return (
        <section className="section-padding pb-0" id="membership">
            <div className="section-heading mb-12">
                <h2><span className="clr-p">Membership</span> Options</h2>
                <p>Unlock a world of fitness with our flexible membership options. Choose the plan that best fits your lifestyle and goals. Our memberships include.</p>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(item => {
                        return <MembershipCard key={item.id + 1} item={item} />
                    })
                }
            </div>
        </section>
    )
}
