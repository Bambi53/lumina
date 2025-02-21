  import react from "react";
  import Link from "next/link";
  import Image from "next/image"; 
  import Button from '@mui/material/Button';
  import { FaRobot } from "react-icons/fa";
  import { LuUserRound } from "react-icons/lu";
  import { IoIosFitness } from "react-icons/io";
  import { AiOutlineRobot } from "react-icons/ai";
  import { FaBroom } from "react-icons/fa";
  import { GiTakeMyMoney } from "react-icons/gi";
  import { FaCarrot } from "react-icons/fa";
  import { FaScissors } from "react-icons/fa6";





  const Page = () => {
    return(
      <main>
        <div className=" px-2 py-4 m-6"> 
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
        <div className="grid"> 
          <div className="flex justify-start px-4 py-6">
            <h1 className="text-gray-700 hover:text-green-500 px-2 py-4 mx-4 md:text-2xl font-bold">TOP STORIES</h1>
            <hr className="md:w-[500px] w-[400px] h-1 my-6 bg-green-600" />
          </div>
          <Image src="/pexels-pavel-danilyuk-8438918.jpg" width={800} height={60} alt="css image" className="px-6 rounded" />
          <div className="flex pt-4 px-4 gap-2 ">
            <FaRobot className="text-green-600 text-xl" />
            <Link href="#" className="text-green-600 text-sm" >TECH</Link>
          </div>
          <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-2xl">I Tested Nvidia’s AI Tool for Making Your Webcam Better, and Oof</h2>
          <div className="flex gap-2 pb-4 px-4">
            <LuUserRound />
            <Link href="" className="text-sm hover:text-green-500">Mark Knapp</Link>
          </div>
        </div>
        <div className="flex justify-center items-center max-md:grid ">
          <div>
            <Image src="/pexels-marlonretratos-30725189.jpg" width={400} height={60} alt="css image" className="px-4 py-2 mx-2"/>
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Why (and How) to Wear Your Apple Watch on Your Ankle</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>       
          <div className="items-center px-4 ">
            <Image src="/pexels-luis-gomes-166706-546819.jpg" width={400} height={60} alt="css image" className="px-4 py-2 mx-2"/>
            <div className="flex pt-4 px-4 gap-2 ">
              <AiOutlineRobot  className="text-green-600 text-xl"/>
              <Link href="#" className="text-green-600 text-sm">AI</Link>
            </div>
              <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">How to Easily Search the Internet With ChatGPT Search</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Khamosh Pathak</Link>
            </div>
          </div> 
        </div>

        <div className="flex justify-start px-4 py-6">
          <h1 className="text-gray-700 hover:text-green-500 p-4 mx-4 md:text-2xl font-bold">TOP STORIES</h1>
          <hr className="md:w-[800px] w-[500px] h-1 my-6 bg-green-600" />
        </div>
        <div className="grid md:flex justify-evenly py-6">
          <div>
            <Image src="/pexels-karolina-grabowska-4239091.jpg" width={40} height={60} alt="css image" className="w-[200px] px-4 -mx-2" />
            <div className="flex pt-4 px-4 gap-2 ">
              <FaBroom className="text-green-600 text-2xl" />
              <Link href="#" className="text-green-600 text-sm" >CLEANING & ORGANIZING</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Five Easy Ways to Hide Cords and Cables in Your Home</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Jeff Somers</Link>
            </div>
          </div>
          <div>
            <Image src="/pexels-anush-1229356.jpg" width={40} height={60} alt="css image" />
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-2xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">The Two Biggest Mistakes Beginners Make on the Rowing Machine</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>
          <div>
            <Image src="/pexels-pixabay-259027.jpg" width={40} height={60} alt="css image" />
            <div className="flex pt-4 px-4 gap-2 ">
              <GiTakeMyMoney  className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">MONEY</Link>
            </div>
              <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">How to Get Free Car Maintenance and Repair WorK</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Jeff Somers</Link>
            </div>
          </div> 
          <div>
            <Image src="/pexels-ella-olsson-572949-1640772.jpg" width={40} height={60} alt="css image" />
            <div className="flex pt-4 px-4 gap-2 ">
              <FaCarrot className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">NUTRITION</Link>
            </div>
              <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">The Cheapest Ways to Get Your Protein Right Now</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div> 
          <div>
            <Image src="/pexels-shattha-pilabut-38930-135620.jpg" width={40} height={60} alt="css image" />
            <div className="flex pt-4 px-4 gap-2 ">
              <FaScissors className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FASHION</Link>
            </div>
              <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Keep to date with latest fashion trends</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Khamosh Pathak</Link>
            </div>
          </div> 
        </div>
        <div className="my-10 bg-gradient-to-r from-sky-500 via-emerald-500 to-sky-500 h-screen grid justify-center items-center">
          <div className="border bg-white h-[400px] max-md:mx-6 max-md:h-[400px] w-[600px] max-md:w-[400px] grid justify-center items-center">  
            <h2 className="text-2xl font-bold max-md:mt-2 text-center mt-6 pt-4">Ready to do everything better?</h2>
            <p className="text-center mx-4 px-2 text-lg">Get daily tips, tricks, and tech guides delivered to your inbox.</p>
            <div className="grid items-center mx-4 px-4">
             <input className="border-2 border-black rounded p-2 m-2" type="email" id="input-field" placeholder="Enter your email" required></input>
             <input className="border-2 border-black rounded p-2 m-2" type="password" id="input-field" placeholder="Enter your password" required></input>
              <Button className="bg-green-700 h-[50px]" variant="contained" href="#contained-buttons">Sign up</Button>
          </div> 
          <p className="text-gray-600 p-4 mx-4 text-sm">If you don't have an account click 
           <Link href="#" className="text-gray-800 hover:text-green-400 underline"> here </Link>{""} to sign up</p>
          
        </div>
        </div>

        <div className="flex justify-between items-center p-4">
          <h1 className="text-gray-700 hover:text-green-500 px-2 py-4 md:text-xl font-bold">Featured: Find Your Fit Tech</h1>
          <hr className="md:w-[700px] w-[400px] h-1 my-4 bg-green-600" />
          <Link href="#" className="text-green-400 text-sm"> SEE MORE</Link> {""};
        </div>
          <div className="items-center p-6 grid justify-">
            {/* <Image src="" width={40} height={60} alt="css image" /> */}
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Nobody Can Agree on What 'Zone 2' Cardio Is</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>
        <div className="grid md:flex justify-evenly items-center">
          <div>
            {/* <Image src="" width={40} height={60} alt="css image" /> */}
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Fitness
            10 Ways Listening to Your Health Apps Can Backfire (and What to Do Instead)</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>
          <div>
            {/* <Image src="" width={40} height={60} alt="css image" /> */}
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Should You Get a Whoop Band or a Smartwatch?</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>
          <div>
            {/* <Image src="" width={40} height={60} alt="css image" /> */}
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">The Best Fitness Watches for Outdoor Adventures</h2>
            <div className="flex gap-2 pb-4 px-4">
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
            </div>
          </div>
          <div>
            {/* <Image src="" width={40} height={60} alt="css image" /> */}
            <div className="flex pt-4 px-4 gap-2 ">
              <IoIosFitness className="text-green-600 text-xl" />
              <Link href="#" className="text-green-600 text-sm">FITNESS</Link>
            </div>
            <h2 className="text-gray-700 px-4 hover:text-green-500 text-gray-700 font-bold text-xl">Your Fitness Tracker Has No Idea How Many Calories You’re Burning</h2>
            <div className="flex gap-4"> 
              <LuUserRound />
              <Link href="" className="text-sm hover:text-green-500">Beth Skwarecki</Link>
           </div> 
          </div>   
        </div>

        <div className="flex max-md:grid gap-4 justify-betweeen items-center border-2 border-green-600 p-8 mx-8 my-10 ">
          <div className="px-8 max-md:pt-2"> 
            <div className="flex justify-between max-md:grid ">
              <span>OUR MISSION</span>
              <hr className="bg-green-600 md:my-3 md:h-1 w-[200px] md:w-[240px]"/>  
              <Link href="#" className="text-green-400 hover:text-black"> SEE MORE</Link>
            </div>
            <p className="text-xl mt-4 max-md:pb-4">Lifehacker has been the world’s leading guide to tech and life tips, tricks and hacks since 2005. Our job is to figure out how tech, gadgets, software and other things work, so you don’t have to. Our team of experts spend over 5,000 hours per month researching and hands-on testing into the very best answers to your biggest questions and problems.</p>
          </div>
          <div className="px-8 max-md:border-t-2 max-md:border-green-600 max-md:pt-6">
            <div className="flex justify-between max-md:grid ">
              <span>OUR TEAM</span>
              <hr className="bg-green-600 md:my-3 md:h-1 w-[200px]"/>
              <Link href="" className="text-green-400 hover:text-black"> SEE MORE</Link>
            </div>
            <p className="text-xl mt-4">Lifehacker’s team of expert researchers and writers live to figure out how things work and how they can work better. Our team methodically and tirelessly researches and hands-on tests tech, gadgets, software and other things to give you every tip, trick and hack that help your do everything better.</p>
          </div>
        </div>
        
      
      </main>
    );
  };

  export default Page;