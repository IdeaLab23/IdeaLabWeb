import Link from "next/link"

const Footer = () => {
  return (
    <div>
        <footer className='bg-black'>
            <div className="flex flex-wrap justify-between pt-16 pb-8 ps-24 max-sm:w-[60rem] min-[550px]:pt-24 ">
                <div className="w-[20rem] max-sm:-[30rem] ">
                    <h3 className="text-3xl text-white font-bold max-sm:text-[3.5rem] ">Address</h3>
                    <div className="pt-6 text-lg font-medium text-[#959595] hover:text-slate-200 hover:cursor-pointer max-sm:text-4xl max-sm:leading-normal max-sm:py-10 ">
                       <Link href="https://maps.app.goo.gl/9G7zqUiAun3R1vbd7"> 📍 AICTE IDEA Lab, LNCT <br /> Raisen Road, Kalchuri Nagar <br />Bhopal, Madhya Pradesh 462022</Link>
                    
                    </div>
                </div>
                <div className="w-[20rem] max-sm:-[30rem] ">
                    <h3 className="text-3xl text-white font-bold max-sm:text-[3.5rem] ">Our Coordinators </h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] max-sm:text-4xl max-sm:py-10 max-sm:leading-normal ">
                        <li className='hover:text-slate-200'><Link href="https://in.linkedin.com/in/dr-anand-singh-550488149"><b>Dr. Anand Singh</b>(Coordinator AICTE IDEA Lab, & HOD, Electrical & Electronic Department )</Link></li>
                       <br></br>
                        <li className='hover:text-slate-200'><Link href="https://in.linkedin.com/in/siju-george"><b>Prof.Siju George</b>(Coordinator AICTE IDEA Lab )</Link></li>
                        <li className='hover:text-slate-200'><Link href=""></Link></li>
                        <li className='hover:text-slate-200'><Link href="#contact"></Link></li>
                    </ul>
                </div>
                    <div className="w-[20rem] max-sm:-[30rem] ">
                    <h3 className="text-3xl text-white font-bold max-sm:text-[3.5rem] ">Quick Links</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] max-sm:text-4xl max-sm:py-10 max-sm:leading-normal ">
                        <li className='hover:text-slate-200'><Link href="/">Home</Link></li>
                        <li className='hover:text-slate-200'><Link href="#aboutUs">About Us</Link></li>
                        <li className='hover:text-slate-200'><Link href="#">Projects</Link></li>
                        <li className='hover:text-slate-200'><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="w-[20rem] max-sm:-[30rem] ">
                    <h3 className="text-3xl text-white font-bold max-sm:text-[3.5rem] ">Follow Us</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] hover:cursor-pointer max-sm:text-4xl max-sm:py-10 max-sm:leading-normal ">
                    <li className='hover:text-slate-200'><Link href="https://in.linkedin.com/company/aicte-idea-lab-lnct-bhopal">LinkedIn</Link></li>
                    <li className='hover:text-slate-200'><Link href="https://m.facebook.com/p/AICTE-IDEA-Lab-LNCT-Bhopal-100083871655159/">Facebook</Link></li>
                    {/* <li className='hover:text-slate-200'><Link href="https://twitter.com">Twitter</Link></li> */}
                    {/* <li className='hover:text-slate-200'><Link href="https://instagram.com">Instagram</Link></li> */}
                    </ul>
                </div>
                <div className="w-[20rem] max-sm:-[30rem] ">
                    <h3 className="text-3xl text-white font-bold max-sm:text-[3.5rem] ">Contact Us</h3>
                    <ul className="pt-6 text-lg font-medium text-[#959595] hover:cursor-pointer max-sm:text-4xl max-sm:py-10 max-sm:leading-normal ">
                        <li className='hover:text-slate-200'>Phone</li>
                        <li className='hover:text-slate-200'><Link href="mailto:idealab@lnct.ac.in">Email</Link></li>
                    </ul>
                </div>
          </div>
          <div className="flex justify-between pt-8 pb-4 px-24 text-lg font-medium text-[#959595] max-sm:w-[60rem] max-sm:text-3xl max-sm:px-12 max-sm:py-10 max-sm:ms-5 ">
            <p>© 2023 All Rights Reserved.</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="bg-red-800 font-semi-bold text-white text-center py-4  bottom-0 w-full"> Website developed with  Love by <Link href="https://in.linkedin.com/in/siddhant-jain-coolsidofficial"> <b>Siddhant Jain</b> </Link>and <Link href="https://in.linkedin.com/in/utkarsh-bajpai-144925254"><b>Utkarsh Bajpai</b> </Link></div>
        </footer>
    </div>
  )
}

export default Footer