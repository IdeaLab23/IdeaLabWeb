"use client"
import React from 'react'
import CardComp from './CardComp'
import getFormResponses from '@/app/controllers/getFormResponses'

const page = () => {
    const [formResponses, setFormResponses] = React.useState([])
    React.useEffect( () => {
        async function fetchFormResponses() {
            try {
                const formResponsesData = await getFormResponses()
                setFormResponses(formResponsesData)
                console.log(formResponses);
            } catch (error) {
                console.log(error)
            }
        }
        fetchFormResponses()
    }, [])

    const fetchedFormResponses = formResponses.map( formResponse => {
        return (
            <CardComp 
                key={formResponse._id}
                name={formResponse.name}
                email={formResponse.email}
                phone={formResponse.phone}
                pitch={formResponse.pitch}
                iot={formResponse.iot}
                dev={formResponse.dev}
                ui={formResponse.ui}
            />
        )
    })

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className="text-[2rem] font-bold text-white leading-[4rem] pt-16 max-sm:text-[5rem] max-sm:leading-[5.5rem] max-sm:my-9 max-sm:w-[50rem] max-sm:ms-28 ">Form Responses</h1>  
        <div className="flex flex-wrap gap-8 justify-center items-center">
            {fetchedFormResponses}
        </div>
    </div>
  )
}

export default page