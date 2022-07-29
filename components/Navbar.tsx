import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar lg:px-12 mt-8">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                            <li><a>about</a></li>
                            <li><a>posts</a></li>
                            <li><a>contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">ishaanbedi</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>about</a></li>
                        <li><a>posts</a></li>
                        <li><a>contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline">Twitter</a>
                </div>
            </div>
        </>
    )
}

export default Navbar