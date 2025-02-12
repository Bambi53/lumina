import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const year = new Date().getFullYear();

function Footer() {
    return(
        <footer className='grid grid-cols-1 gap-4 lg:gap-o lg:grid-clos-3 py-4 px-2 md:px-8 lg:px-16'>
            <div>
                <p className="text=2xl text-gray-800 font-bold">Lumina</p>
                <p className=''>&copy;{year}Lumina blog</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head Office</p>
                <p className="text-md text-gray-700 ">Ladoke Akinlola Street, Victoria Island, Lagos</p>
            </div>
            <div>
                <ul className="flex justify-end items-center gap-4">
                    <li><Link href="#"><FaXTwitter /></Link></li>
                    <li><Link href="#"><CiYoutube /></Link></li>
                    <li><Link href="#"><FaTiktok /></Link></li>   
                </ul>
                <ul className="flex justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-600">Termss of use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">Privacy policy</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">Bug bounty</Link></li>   
                </ul>
                
            </div>
        </footer>
    )
}
export default Footer;