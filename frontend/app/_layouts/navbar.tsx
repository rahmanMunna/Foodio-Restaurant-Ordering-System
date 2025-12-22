"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/" },
    { name: "Food Menu", href: "/menu" },
    { name: "My Orders", href: "/my_orders" },
  ];

  return (
    <nav className="flex gap-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={`px-2 py-1 rounded ${
            pathname === route.href ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          {route.name}
        </Link>
      ))}
    </nav>
  );
}
