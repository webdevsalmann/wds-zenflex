import Image from "next/image";

export default function MembershipCard({ item }) {
  return (
    <div className='relative mt-4 p-4 pt-8 set-bg-light rounded-lg set-border-divide flex-center flex-col gap-4'>

      <div className="absolute -top-4 px-2 w-fit set-bg-light set-border-divide text-2xl font-bold rounded">{item.name}</div>

      <div className="px-2 set-bg w-fit text-xl clr-p font-bold">$ {item.price}</div>

      <p className="text-center text-sm">{item.benefit}</p>

      <div className="font-semibold self-start">Access to:</div>
      <div className="px-4 flex flex-1 w-full flex-col gap-1">
        {
          item.access.map((item, i) => {
            return (
              <li key={i + "jkl42"} className="set-text-balance list-outside">{item}</li>
            )
          })
        }
      </div>

      {
        item.extras &&
        <>
          <div className="font-semibold self-start text-left">Extras:</div>
          <div className="px-4 flex flex-1 w-full flex-col gap-1">
            {
              item.extras.map((item, i) => {
                return (
                  <li key={i + "jkl42"} className="set-text-balance list-inside">{item}</li>
                )
              })
            }
          </div>
        </>
      }

      <button className="btn-soft hover:set-bg hover:clr-p w-full">Activate</button>
    </div>
  )
}
