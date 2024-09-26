const CardComp = (props) => {
  return (
    <div className="bg-[#1D1E24] m-2 max-w-fit p-6 rounded-xl">
        <div className="flex justify-between">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Name</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.name}</h3>
        </div>
        <div className="flex justify-between gap-6">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Email</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.email}</h3>
        </div>
        <div className="flex justify-between">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Phone</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.phone}</h3>
        </div>
        <div className="flex justify-between">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Pitch</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.pitch}</h3>
        </div>
        <div className="flex justify-between gap-6">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>IOT Skills</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.iot}</h3>
        </div>
        <div className="flex justify-between gap-6">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Developer</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.dev}</h3>
        </div>
        <div className="flex justify-between">
            <h3 className='text-[1.2rem] text-[#959595] font-medium'>Designer</h3>
            <h3 className='text-[1.2rem] text-white font-medium'>{props.ui}</h3>
        </div>
    </div>
  )
}

export default CardComp