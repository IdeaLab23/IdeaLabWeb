import {NextResponse} from "next/server"
import jwt from 'jsonwebtoken'
export function GET(){
 const token=jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data:"ravi"
  }, 'siddhant' )
// console.log(token)
    
    return NextResponse.json(token)}
