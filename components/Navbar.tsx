import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/education'>Education</Link></li>
                            <li><Link href='/uses'>Uses</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center"></div>
                <div className="navbar-end"></div>
            </div>
        </>
    )
}