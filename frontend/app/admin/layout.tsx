import Link from "next/link";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="m-2  container mx-auto grid grid-cols-5 gap-4">
            <div className="col-span-1 flex flex-col border-2 p-2 space-y-2">
                <h1 className="text-center text-4xl">Foodio</h1>
                <Link className="text-center border-2 p-2 text-2xl bg-amber-50 hover:bg-green-100" href={'all'}>Orders</Link>
                <Link className="text-center border-2 p-2 text-2xl bg-amber-50 hover:bg-green-100" href={'menu-items'}>Menu Items</Link>
            </div>
            <div className="col-span-4">
                {children}
            </div>
        </div>
    );
}
