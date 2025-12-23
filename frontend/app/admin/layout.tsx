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

                <Link
                    className="text-center border rounded-md p-2 text-lg font-medium bg-amber-50 hover:bg-green-100 hover:shadow transition duration-200"
                    href={"all"}
                >
                    Orders
                </Link>

                <Link
                    className="text-center border rounded-md p-2 text-lg font-medium bg-amber-50 hover:bg-green-100 hover:shadow transition duration-200"
                    href={"menu-items"}
                >
                    Menu Items
                </Link>
                <Link
                    className="text-center border rounded-md p-2 text-lg font-medium bg-red-500 hover:bg-red-600 hover:shadow transition duration-200"
                    href={'/login'}>
                    Logout
                </Link>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-white p-6 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}
