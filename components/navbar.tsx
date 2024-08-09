"use client"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 bg-opacity-40">
            <header className="flex justify-start flex-nowrap z-50 w-full bg-white opacity-70 text-sm py-4">
                <nav className="max-w-[85rem] w-full mx-auto px-4 flex items-center justify-between" aria-label="Global">
                    <Link className="flex-none text-2xl font-semibold " href="/"> ZunDash </Link>
                    <div className="flex flex-row items-center gap-5  justify-end mt-0 pl-5 transition-all transform-gpu">
                        <Link className="transition-colors font-medium text-gray-600 hover:text-blue-500 " href="/" aria-current="page">Home</Link>
                        <Link className="transition-colors font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400 " href="/dashboard">Dashboard</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}