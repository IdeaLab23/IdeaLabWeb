'use client'
import React from 'react'
import getUser from '@/app/controllers/getUser'
import bcrypt from 'bcryptjs'
import { useRouter } from 'next/navigation'

const page = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    if ( !email || !password ) {
      setError('Please fill all the fields')
      return
    } else {
      setError('')
    }
    const form = e.target
    form.reset()
 
    // bcrypt.genSalt(10, function(err, salt) {
    //   bcrypt.hash(password, salt, function(err, hash) {
    //       console.log(hash);
    //   });
    // });
    
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        if (userData[0].email === email) {
          bcrypt.compare(password, userData[0].password, function(err, res) {
            res === true ? router.push('/adminUserOfIdeaLabLNCT') : setError('Password is incorrect');
          });
        } else {
          setError('Email is incorrect');
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser()
  }

  return (
    <div className='grid place-items-center h-screen'>
        <div className="w-fit h-fit grid place-items-center border-t-4 border-t-green-500 rounded-lg p-5 shadow-lg shadow-slate-700 ">
            <h1 className="text-[2rem] font-bold text-white leading-[4rem]">Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[20rem] text-black ">
                <input type="email" placeholder="Email" onChange={e =>setEmail(e.target.value)} className="p-2 rounded-md" />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className="p-2 rounded-md" />
                <button className="bg-[#7B8CE5] p-2 rounded-md text-white">Login</button>
                {error && <div className='bg-red-500 text-white w-fit py-1 px-3 text-sm mt-2 rounded-md '>{error}</div>}
            </form>
        </div>
    </div>
  )
}

export default page
