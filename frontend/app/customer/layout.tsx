import CustomerLayout from "../_layouts/customer_layout";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="">
            <CustomerLayout></CustomerLayout>
            <main className="col-span-2 p-4 container mx-auto">
                {children}
            </main>
        </div>
    );
}
