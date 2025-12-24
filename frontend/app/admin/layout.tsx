import { ArchiveRestore, LogOut, Menu } from "@deemlol/next-icons";
import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen mx-4 mt-4">
            {/* Sidebar */}
            <div className="w-64 flex flex-col border-r rounded-none shadow-md p-4 space-y-4 bg-white">
                <h1 className="text-center text-3xl font-bold text-amber-600 tracking-wide">
                    Foodio
                </h1>
                <div
                    className="flex items-center justify-center gap-2 text-center border rounded-md p-2 text-lg font-medium bg-green-900 hover:bg-green-800 hover:shadow transition duration-200">
                    <Menu size={24} color="#FFFFFF" />
                    <Link

                        href={"menu-items"}
                    >
                        Menu Items
                    </Link>
                </div>
                <div className="flex items-center justify-center gap-2 text-center border rounded-md p-2 text-lg font-medium bg-green-900 hover:bg-green-800 hover:shadow transition duration-200">
                    <ArchiveRestore size={24} color="#FFFFFF" />
                    <Link
                        href={"all"}
                    >
                        Orders
                    </Link>

                </div>

                <div className="flex justify-center text-center border rounded-md p-2 text-lg font-medium bg-red-500 hover:bg-red-600 hover:shadow transition duration-200">
                    <LogOut size={24} color="#FFFFFF" />
                    <Link

                        href={'/login'}>
                        Logout
                    </Link>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-white p-6 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}
