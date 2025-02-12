import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


export default function signin () {
    return(
        <main className="min-h-[520px] flex justify-center bg-gray-300 py-8 px-2">
            <article>
                <div className="w-full md:w-[24em] rounded-md bg-white p-4">
                    <h1 className="text-2xl mb-2">Sign into Lumina</h1>
                    <p className="text-sm text-gray-600 mb-4">Sign in using</p>
        
                    <form className="mb-2">
                        <button type="submit" 
                        className="w-full h-[3.2em] flex justify-center items-center gap-2 border-b-2 border-green-500 bg-black">
                        <FaGoogle className="text-green-500 text-2xl" />
                        <span className="text-white text-lg">Google account</span>
                        </button>
                    </form>
                    <p className="text-gray-600 text-xs">By clicking on the signin button you confirm that you have read and agreed with our </p>
                    <Link href="#" className="text-gray-800 underline">Terms of use</Link>{""} and {""}
                    <Link href="#" className="text-gray-800 underline">Privacy policy</Link>
                </div>
            </article>

        </main>
    )
}