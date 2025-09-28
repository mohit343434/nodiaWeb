"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const NavBar = () => {
    const [token, setToken] = useState()
    useEffect(() => {
        const data = localStorage.getItem("token")
        if (data) {
            setToken(data);
        } else {
            setToken(null)
        }
    }, [])
    return (
        <nav className="relative bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" command="--toggle" commandfor="mobile-menu" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                                <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center">
                            <Link href="/">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
                                    <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                                </svg>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link href="/enquiry" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Enquiry</Link>
                                <Link href="/Privacy-Policy" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Privacy Policy</Link>
                                <Link href="/Terms-Conditions" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link href="/AdminLogin" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">{token ? "Dashbord" : "Login"}</Link>


                        <el-dropdown className="relative ml-3">
                            <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10" />
                            </button>

                            <el-menu anchor="bottom end" popover className="w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                <Link href="/enquiry" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Enquiry</Link>
                                <Link href="/Privacy-Policy" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Privacy Policy</Link>
                                <Link href="/Terms-Conditions" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Terms & Conditions</Link>
                            </el-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>

            <el-disclosure id="mobile-menu" hidden className="block sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <Link href="/enquiry" aria-current="page" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Enquiry</Link>
                    <Link href="/Privacy-Policy" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"> Privacy Policy</Link>
                    <Link href="/Terms-Conditions" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white">Terms & Conditions</Link>
                </div>
            </el-disclosure>
        </nav>

    )
}

export default NavBar