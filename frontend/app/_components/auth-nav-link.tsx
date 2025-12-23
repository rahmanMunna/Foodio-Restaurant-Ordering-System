"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNavLinks() {
    const pathname = usePathname();

    const linkClass = (path: string) =>
        `px-4 py-2 rounded-md border transition
        ${pathname === path
            ? 'bg-blue-600 text-white border-blue-600'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
        }`;

    return (
        <div className="flex justify-center gap-2 border-2 p-2 rounded-3xl bg-amber-50">
            <Link href="/login" className={linkClass('/login')}>
                Login
            </Link>

            <Link href="/registration" className={linkClass('/registration')}>
                Register
            </Link>
        </div>
    );
}