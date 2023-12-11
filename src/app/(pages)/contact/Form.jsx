
export default function Form() {
  return (
    <form className="p-4 flex flex-col gap-4">
      <label className="w-full" htmlFor="">
        <div>Full Name</div>
        <input className="w-full set-bg-light rounded set-border-divide" type="text" />
      </label>
      <label className="w-full" htmlFor="">
        <div>Email</div>
        <input className="w-full set-bg-light rounded set-border-divide" type="email" />
      </label>
      <label className="w-full" htmlFor="">
        <div>Phone Number</div>
        <input className="w-full set-bg-light rounded set-border-divide" type="email" />
      </label>
      <label className="w-full" htmlFor="">
        <div>Description</div>
        <textarea className="w-full set-bg-light rounded set-border-divide" name="" id="" cols="30" rows="3"></textarea>
      </label>
      <button className="btn-solid w-fit">Submit</button>
    </form>
  )
}
