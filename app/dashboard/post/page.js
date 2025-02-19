
import Link from "next/link"
import Image from "next/image"

export default function post() {

    const blogDetails = [
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
        {
            author:"John mark",
            timestamp:"monday, 17 feb 2025",
            title:"Full stack Development",
            body:"Full stack development is the future of tech, and it help youngstars t0 become techies and contributes to the socity",
        },
       
    ]

    return(
        <main className="min-h-dvh p-2">
            <h1 className="text-center m-3 lg:my-7 text-3xl lg:text-5xl font-bold text-green-600">LUMINA BLOG</h1>
            <p>Our blogs are written by trusted authors and well known writers so that we can provide you the best so we can tailor to your needs </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 md:p-10">
            {blogDetails.map((blog,index) => (

            <Link  key={index} href={"#"} className="space-y-2 group">
            <Image src="/pexels-freestockpro-2070485.jpg" alt="css image" width={200} height={200} />
            <div>
                <span className="text-green-500 text-sm">{blog.author}</span>
                <span className="text-blue-400 text-sm">{blog.timestamp}</span>
            </div>
            <h1 className="font-bold text-lg">{blog.title}</h1>
            <p className="text-sm text-gray-400 line-clamp-1 group-hover:underline">{blog.body}</p>
            </Link>
            ))}

        </div>
        </main>
    )
}