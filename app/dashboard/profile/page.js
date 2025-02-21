
import { signOut } from "@/auth"
import { Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function profile () {
    return(
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 px md:px-12 lg:px-16 bg-gray-100">
            <div className="w-full md-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 md:p-6">
                <div className="flex justify-center">
                    <Image 
                    width={80}
                    height={80}
                    src="/pexels-ketut-subiyanto-4908991.jpg"
                    alt="profile picture"
                    className="rounded-full w-[80px] h-[80px]"/>
                </div>
                    <p className="text-center py-3 border-b border-green-200">User name</p>
                    <p className="text-center py-3 border-b border-green-200">User email</p>
                    <p className="text-center py-3 border-b border-green-200">User ID</p>

                    <form
                    action={async () => {
                        "use server"
                        await signOut ()
                    }}
                    >
                        <Button className="w-full" variant="contained" color="error" type="submit">Log out</Button>
                        <Link href={"/dashbord/updat-profile"}
                        className="p-2 bg-green-600 rounded-md text-lg text-white text-center">
                            Update profile
                        </Link>
                    </form>
            </div>
        </main>
    )
}