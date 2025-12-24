import Link from "next/link";
import AuthNavLinks from "../_components/auth-nav-link";



export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col border-2">
                    <div className="text-center">
                        <Link className="text-5xl font-bold" href={'/login'}>Foodio</Link>
                        
                        <p className="py-6">
                            Premium flavors, delivered.
                        </p>
                        <AuthNavLinks></AuthNavLinks>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
