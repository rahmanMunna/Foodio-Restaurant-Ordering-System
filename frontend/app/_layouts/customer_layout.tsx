import Link from "next/link";
import Navbar from "./navbar";
import LogoutBtn from "../_components/logout-btn";
import { AuthService } from "../_services/auth.service";

export default async function CustomerLayout() {
    return (
        <div className="navbar bg-white container mx-auto space-y-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Navbar></Navbar>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Foodio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Navbar></Navbar>
                </ul>
            </div>
            <div className="navbar-end">
                <LogoutBtn></LogoutBtn>
            </div>
        </div>
    )
}
