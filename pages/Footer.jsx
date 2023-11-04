import Link from "next/link"

const Footer = () => {
  return (
    <div>
        <footer className='bg-black'>
            <div className="flex flex-wrap justify-between pt-12 pb-8 ps-24">
                <div className="w-[20rem]">
                    <h3 className="text-3xl text-white font-bold">Address</h3>
                    <div className="pt-6 text-lg font-medium text-[#959595] hover:text-slate-200 hover:cursor-pointer">
                        <p>📍 AICTE IDEA Lab, LNCT <br /> Raisen Road, Kalchuri Nagar <br />Bhopal, Madhya Pradesh 462022</p>
                    </div>
                </div>
                <div className="w-[20rem]">
                    <h3 className="text-3xl text-white font-bold">Quick Links</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595]">
                        <li className='hover:text-slate-200'><Link href="/">Home</Link></li>
                        <li className='hover:text-slate-200'><Link href="#aboutUs">About Us</Link></li>
                        <li className='hover:text-slate-200'><Link href="#">Projects</Link></li>
                        <li className='hover:text-slate-200'><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="w-[20rem]">
                    <h3 className="text-3xl text-white font-bold">Follow Us</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] hover:cursor-pointer">
                        <li className='hover:text-slate-200'>Facebook</li>
                        <li className='hover:text-slate-200'>Twitter</li>
                        <li className='hover:text-slate-200'>Instagram</li>
                        <li className='hover:text-slate-200'>Linkedin</li>
                    </ul>
                </div>
                <div className="w-[20rem]">
                    <h3 className="text-3xl text-white font-bold">Contact Us</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] hover:cursor-pointer">
                        <li className='hover:text-slate-200'>Phone</li>
                        <li className='hover:text-slate-200'>Email</li>
                    </ul>
                </div>
          </div>
          <div className="flex justify-between pt-8 pb-4 px-24 text-lg font-medium text-[#959595]">
            <p>© 2023 All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer