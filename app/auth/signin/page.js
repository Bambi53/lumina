
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { auth, signIn } from "@/auth";

export default async function signin () {
    const session = await auth();
    console.log(session);
    

    return(
        <main className="min-h-[520px] flex justify-center bg-gray-300 py-8 px-2">
            <article>
                <div className="w-full md:w-[24em] rounded-md bg-white p-4">
                    <h1 className="text-2xl mb-2">Sign into Lumina</h1>
                    <p className="text-sm text-gray-600 mb-4">Sign in using...</p>
                    
                    <form 
                    action = {async () => {
                        "use server"
                        await signIn("google")
                
                    }}
                    className="mb-2">
                        <button type="submit" 
                        className="w-full h-[3.2em] flex justify-center items-center rounded-lg gap-2 border-b-2 border-green-500 bg-black">
                        <FcGoogle className=" text-2xl" />
                        <span className="text-white text-lg">Google account</span>
                        </button>
                    </form>
                    <form 
                    action = {async () => {
                        "use server"
                        await signIn("facebook")
                    }}
                    className="mb-2">
                        <button type="submit" 
                        className="w-full h-[3.2em] flex justify-center items-center rounded-lg gap-2 border-b-2 border-green-500 bg-black">
                        <FaFacebook className="text-blue-500 text-2xl" />
                        <span className="text-white text-lg">Facebook account</span>
                        </button>
                    </form>
                    
                    <p className="text-gray-600 text-xs">By clicking on the signin button you confirm that you have read and agreed with our </p>
                    <Link href="#" className="text-gray-800 text-sm underline">Terms of use</Link>{""} and {""}
                    <Link href="#" className="text-gray-800 text-sm underline">Privacy policy</Link>
                </div>
            </article>

        </main>
    )
}