  import react from "react";
  import Link from "next/link";
import Image from "next/image";
import { ImageConfigContext } from "next/dist/shared/lib/image-config-context.shared-runtime";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { imageConfigDefault } from "next/dist/shared/lib/image-config";


  const Page = () => {
    return(
      <main>
        <div>
          <ul className="flex justify-evenly items-center gap-4">
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">LATEST</Link></li>
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">TECH</Link></li>
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">FOOD</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">TRAVELS</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">ENTERTAINMENT</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">MONEY</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">HEALTH</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">HOME & GARDEN</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">DEALS</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">HACK</Link></li>   
            <li><Link href="#" className="text-sm hover:text-green-400 text-gray-600">FASHION</Link></li>   
          </ul>
        </div>
        <div>
          <h1 className="text-gray-700 hover:text-green-400 p-4 mx-8 px-6">TOP STORIES</h1>
          {/* <Image src="" width={40} height={60} alt="css image" /> */}
          <h2 className="text-gray-700 hover:text-green-400 text-gray-700 font-bold text-2xl">I Tested Nvidia’s AI Tool for Making Your Webcam Better, and Oof</h2>
        </div>
        <div>
          {/* <Image src="" width={} height={} alt=""></Image> */}
        </div>
        <div className="bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500 h-screen grid justify-center items-center">
          <div className="border bg-white h-[300px] w-[800px] grid justify-center items-center">  
            <h2 className="text-2xl font-bold mt-6 pt-8 mx-4 px-4">Ready to do everything better?</h2>
            <p className="mx-4 p-4 text-lg">Get daily tips, tricks, and tech guides delivered to your inbox.</p>
            <div className="flex items-center mx-4 px-2">
              <Box
                  component="form"
                  sx={{ '& .MuiTextField-root': { m: 1, width: '25ch', } }}
                  noValidate
                  autoComplete="off"
                >
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Enter email"
                />
              </Box> 
              <Button className="bg-green-700 h-[50px]" variant="contained" href="#contained-buttons">Sign up</Button>
          </div>
            <p className="text-xs m-2 mx-4 px-4">By clicking Sign Up, you confirm you are 16+ and agree to our</p>
            <p className="mx-4 pb-10 text-xs px-4"><Link href="#" className="hover:text-green-400">Terms of service</Link> and <Link href="#" className="hover:text-green-400">Privacy policy</Link></p> 
        </div>
      </div>
        <div className="flex justify-betweeen items-center border-2 border-green-600 p-8 m-8 ">
          <div className="px-8"> 
            <h2>OUR MISSION <Link href="#" className="text-green-400 hover:text-black">SEE MORE</Link></h2>
            <p className="text-xl mt-4">Lifehacker has been the world’s leading guide to tech and life tips, tricks and hacks since 2005. Our job is to figure out how tech, gadgets, software and other things work, so you don’t have to. Our team of experts spend over 5,000 hours per month researching and hands-on testing into the very best answers to your biggest questions and problems.</p>
          </div>
          <div className="px-8">
            <h2>OUR TEAM <Link href="" className="text-green-400 hover:text-black"> SEE MORE</Link></h2>
          <p className="text-xl mt-4">Lifehacker’s team of expert researchers and writers live to figure out how things work and how they can work better. Our team methodically and tirelessly researches and hands-on tests tech, gadgets, software and other things to give you every tip, trick and hack that help your do everything better.</p>
          </div>
        </div>
      
      </main>
    );
  };

  export default Page;