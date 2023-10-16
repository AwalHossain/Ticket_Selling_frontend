'use client'
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import logo from "../../../public/next.svg";
import NavLinks from "./LeftMenu";
import Profile from "./RightMenut";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <div
                    className="bg-transparent text-white "
                >
                    <div
                        className="flex items-center font-medium justify-around !important"
                    >
                        <div
                            className="z-50 p-5 md:w-auto w-full flex justify-between text-red-800 !important"
                        >
                            {/* <p>Logo</p> */}
                            <Image height={30} width={90} className="bg-red-800 " src={logo} alt="" />
                            <div className="md:hidden text-3xl text-white" onClick={() => setOpen(!open)}>
                                {
                                    open ? <CloseOutlined className="text-black" /> : < MenuOutlined />
                                }
                            </div>
                        </div>
                        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] !important">
                            <li>
                                <Link href="/" className="py-7 px-3 inline-block">
                                    Home
                                </Link>

                            </li>
                            <NavLinks />
                        </ul>
                        <div className="md:block hidden !important">
                            <Profile />
                        </div>
                        {/* Mobile View */}
                        <ul
                            className={`md:hidden bg-white absolute 
                    text-black
                    w-full h-full bottom-0 py-24 pl-4
                        duration-500 ${open ? "left-0" : "left-[-100%]"}
                        z-10
                    !important
                    `}
                        >
                            <li >
                                <Link href="/" className="py-7 px-3 inline-block">
                                    Home
                                </Link >
                            </li>
                            <NavLinks />
                            <div className="py-5">
                                <Profile />
                            </div>
                        </ul>
                    </div>
                </div >
            </Suspense>
        </div>

    );
};

export default Navbar;