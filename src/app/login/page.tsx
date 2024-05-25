import { Button } from "flowbite-react";
import image from "../../../public/img/img-login.png";
import bg from "../../../public/img/login-bg.png";
import logo from "../../../public/img/MadServiceLogo.png";
import backIcon from "../../../public/img/back-icon.png";

import Link from "next/link";

export default function Login() {
  return (
    <div className="w-screen h-screen flex items-center" style={{
      backgroundImage: `url(${bg.src})`
    }}>
      <div className="grid grid-cols-2 bg-white w-1/2 mx-auto rounded-xl drop-shadow-xl">
        <img src={image.src} alt="" style={{ width: 294 }} />
        <div className="p-4 ps-1 pe-6">
          <div className="flex justify-between">
            <Link href="/" className="mt-4"><img src={backIcon.src} /></Link>
            <img src={logo.src} alt="" style={{ width: 150 }} />
          </div>
          <h2 className="text-black mt-6 text-lg font-semibold">Welcome</h2>
          <p className="text-black text-sm">Login to your account to continue</p>
          <div className="relative z-0 mt-10">
            <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Full name</label>
          </div>
          <div className="relative z-0 mt-5">
            <input type="password" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
          </div>
          <p className="text-black text-xs text-right mt-2"><a href="">Forgot your password?</a></p>
          <Button className="text-white w-full mt-8 bg-btn-login">Log In</Button>

          <p className="text-black text-sm mt-16">Don’t have an account? <a href="" className="text-blue-700 hover:underline">Sign Up</a></p>
        </div>
      </div>
    </div>
  )
}
