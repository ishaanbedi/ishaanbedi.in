import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link href='/'>
                        <a className="btn btn-ghost normal-case text-xl">
                            <Image src="/logo.png" height={40} width={40} />
                        </a>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-primary p-0">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/education'>Education</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}