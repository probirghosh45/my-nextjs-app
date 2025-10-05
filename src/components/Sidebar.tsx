"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Settings } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Profile", href: "/profile", icon: <User size={18} /> },
    { name: "Settings", href: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <aside className="h-screen w-64 bg-slate-900 text-slate-200 flex flex-col shadow-lg">
      <div className="px-6 py-4 border-b border-slate-700">
        <h1 className="text-xl font-semibold tracking-wide">Dashboard</h1>
      </div>

      <nav className="flex flex-col mt-4 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-5 py-2.5 rounded-md mx-3 transition-all duration-200 
            ${pathname === item.href ? "bg-blue-600 text-white" : "hover:bg-slate-800"}`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-6 py-4 text-xs text-slate-500 border-t border-slate-700">
        © {new Date().getFullYear()} My Dashboard
      </div>
    </aside>
  );
};

export default Sidebar;
