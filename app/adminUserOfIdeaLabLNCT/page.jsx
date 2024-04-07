"use client"
import Link from "next/link"

const page = () => {
    // worst cheap trick any human can do
    
         function verify(){
            const token = localStorage.getItem('token')
         
           if(token === null){
            window.location.href = '/login'
        }
     }
            verify()
  return (
    <>
        <div className="bg-black max-sm:w-[100vw] max-sm:h-210">
            <h1 className="text-[2.4rem]xl:w-[40rem] font-bold text-white leading-[4rem] xl:pt-16 ms-40 max-sm:text-[3rem] max-sm:leading-[5.5rem]  max-sm:w-[30rem] max-sm:ms-5 ">Admin Settings </h1>       
            <hr className="mx-auto w-[80%] h-[1.5px] bg-[#373647] border-0 rounded mt-6 max-sm:mt-[2rem] max-sm:w-[100vw]  "/>
            <div className="grid grid-rows-4 grid-flow-col gap-8 justify-items-center xl:mt-14 ">
                <div className="w-[80%] flex gap-7 justify-center items-center">
                    <div className="w-20 bg-[#1f2127] p-2 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl text-white font-medium">Events</h3>
                        <p className="text-lg font-medium text-[#959595]">Manage your Events</p>
                    </div>
                    <button type="submit" className="w-36 h-10 bg-[#fafbfc] rounded-md ms-auto hover:bg-[#393b41]"><Link href={'/adminUserOfIdeaLabLNCT/addEvents'}>Go to Page</Link></button>
                </div>
                <div className="w-[80%] flex gap-7 justify-center items-center">
                    <div className="bg-[#1f2127] p-2 rounded-xl">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                        <path d="M0 0 C18.48 0 36.96 0 56 0 C56 17.16 56 34.32 56 52 C37.52 52 19.04 52 0 52 C0 34.84 0 17.68 0 0 Z M2 3 C1.90186013 4.43740353 1.8720172 5.87956327 1.87060547 7.3203125 C1.86745331 8.23796387 1.86430115 9.15561523 1.86105347 10.10107422 C1.8630777 11.09896973 1.86510193 12.09686523 1.8671875 13.125 C1.86623077 14.14223145 1.86527405 15.15946289 1.86428833 16.20751953 C1.86360639 18.36295636 1.86546165 20.51839522 1.86962891 22.67382812 C1.87497695 25.98572371 1.86968437 29.29748367 1.86328125 32.609375 C1.86394203 34.69791697 1.86522319 36.78645885 1.8671875 38.875 C1.86516327 39.87289551 1.86313904 40.87079102 1.86105347 41.89892578 C1.86420563 42.81657715 1.86735779 43.73422852 1.87060547 44.6796875 C1.87140106 45.49163574 1.87219666 46.30358398 1.87301636 47.14013672 C1.79635811 49.01545753 1.79635811 49.01545753 3 50 C4.55999048 50.09846967 6.12440544 50.12798618 7.6875 50.12939453 C8.68523438 50.13254669 9.68296875 50.13569885 10.7109375 50.13894653 C11.79632813 50.1369223 12.88171875 50.13489807 14 50.1328125 C15.65902344 50.13424759 15.65902344 50.13424759 17.3515625 50.13571167 C19.69531308 50.13639367 22.03906553 50.13453804 24.3828125 50.13037109 C27.98441788 50.12502314 31.58589853 50.13031547 35.1875 50.13671875 C37.45833361 50.13605797 39.72916714 50.13477682 42 50.1328125 C43.08539063 50.13483673 44.17078125 50.13686096 45.2890625 50.13894653 C46.28679688 50.13579437 47.28453125 50.13264221 48.3125 50.12939453 C49.63701172 50.12820114 49.63701172 50.12820114 50.98828125 50.12698364 C52.99767892 50.22270674 52.99767892 50.22270674 54 49 C54.09813987 47.56259647 54.1279828 46.12043673 54.12939453 44.6796875 C54.13412277 43.30321045 54.13412277 43.30321045 54.13894653 41.89892578 C54.1369223 40.90103027 54.13489807 39.90313477 54.1328125 38.875 C54.13376923 37.85776855 54.13472595 36.84053711 54.13571167 35.79248047 C54.13639361 33.63704364 54.13453835 31.48160478 54.13037109 29.32617188 C54.12502305 26.01427629 54.13031563 22.70251633 54.13671875 19.390625 C54.13605797 17.30208303 54.13477681 15.21354115 54.1328125 13.125 C54.13483673 12.12710449 54.13686096 11.12920898 54.13894653 10.10107422 C54.13579437 9.18342285 54.13264221 8.26577148 54.12939453 7.3203125 C54.12859894 6.50836426 54.12780334 5.69641602 54.12698364 4.85986328 C54.20364189 2.98454247 54.20364189 2.98454247 53 2 C51.44000952 1.90153033 49.87559456 1.87201382 48.3125 1.87060547 C47.31476562 1.86745331 46.31703125 1.86430115 45.2890625 1.86105347 C43.66097656 1.86408981 43.66097656 1.86408981 42 1.8671875 C40.89398438 1.86623077 39.78796875 1.86527405 38.6484375 1.86428833 C36.30468692 1.86360633 33.96093447 1.86546196 31.6171875 1.86962891 C28.01558212 1.87497686 24.41410147 1.86968453 20.8125 1.86328125 C18.54166639 1.86394203 16.27083286 1.86522318 14 1.8671875 C12.37191406 1.86415115 12.37191406 1.86415115 10.7109375 1.86105347 C9.71320312 1.86420563 8.71546875 1.86735779 7.6875 1.87060547 C6.36298828 1.87179886 6.36298828 1.87179886 5.01171875 1.87301636 C3.00232108 1.77729326 3.00232108 1.77729326 2 3 Z " fill="#FFFFFF" transform="translate(4,6)"/>
                        <path d="M0 0 C8.58 0 17.16 0 26 0 C26 3.3 26 6.6 26 10 C17.42 10 8.84 10 0 10 C0 6.7 0 3.4 0 0 Z M2 2 C2 3.98 2 5.96 2 8 C9.26 8 16.52 8 24 8 C24 6.02 24 4.04 24 2 C16.74 2 9.48 2 2 2 Z " fill="#FFFFFF" transform="translate(24,24)"/>
                        <path d="M0 0 C8.58 0 17.16 0 26 0 C26 1.98 26 3.96 26 6 C17.42 6 8.84 6 0 6 C0 4.02 0 2.04 0 0 Z M2 2 C2 2.66 2 3.32 2 4 C9.26 4 16.52 4 24 4 C24 3.34 24 2.68 24 2 C16.74 2 9.48 2 2 2 Z " fill="#FFFFFF" transform="translate(24,14)"/>
                        <path d="M0 0 C6.27 0 12.54 0 19 0 C19 0.66 19 1.32 19 2 C12.73 2 6.46 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FFFFFF" transform="translate(31,38)"/>
                        <path d="M0 0 C1.98 0 3.96 0 6 0 C6 1.98 6 3.96 6 6 C4.02 6 2.04 6 0 6 C0 4.02 0 2.04 0 0 Z " fill="#FFFFFF" transform="translate(23,38)"/>
                        <path d="M0 0 C4.95 0 9.9 0 15 0 C15 0.66 15 1.32 15 2 C10.05 2 5.1 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FFFFFF" transform="translate(31,42)"/>
                        <path d="M0 0 C2.64 0 5.28 0 8 0 C8 0.66 8 1.32 8 2 C5.36 2 2.72 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FFFFFF" transform="translate(12,26)"/>
                        <path d="M0 0 C2.64 0 5.28 0 8 0 C8 0.66 8 1.32 8 2 C5.36 2 2.72 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FFFFFF" transform="translate(12,16)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(53,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(48,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(43,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(38,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(33,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(28,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(23,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(18,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(13,50)"/>
                        <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.32 2 2.64 2 4 C1.34 4 0.68 4 0 4 C0 2.68 0 1.36 0 0 Z " fill="#FFFFFF" transform="translate(8,50)"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl text-white font-medium">Form Responses</h3>
                        <p className="text-lg font-medium text-[#959595]">View form responses from users</p>
                    </div>
                    <button type="submit" className="w-36 h-10 bg-[#dddee2] rounded-md ms-auto  max-sm:w-{15rem} max-sm:h-auto  hover:bg-[#393b41] "><Link href={'/adminUserOfIdeaLabLNCT/formResponses'}>Go to Page</Link></button>
                </div>
                <div className="w-[80%] flex gap-7 justify-center items-center">
                    <div className="w-20 bg-[#1f2127] p-2 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl text-white font-medium">Images</h3>
                        <p className="text-lg font-medium text-[#959595]">Manage Images</p>
                    </div>
                    <button type="submit" className="w-36 h-10 bg-[#fafbfb] rounded-md ms-auto hover:bg-[#393b41] "><Link href={'/Events'}>Go to Page</Link></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default page