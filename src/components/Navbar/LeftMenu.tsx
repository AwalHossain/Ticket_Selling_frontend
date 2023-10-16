'use client'
import { menuLinks } from "@/utils/data"
import Link from "next/link"
import { useState } from "react"

import { ArrowsAltOutlined } from "@ant-design/icons"
const NavLinks = () => {
    const [heading, setHeading] = useState("")
    return (
        <>
            {
                menuLinks.map((link, index) => (
                    <div key={index}>
                        <div
                            className="px-3 text-left md:cursor-pointer group"
                        >
                            <h1
                                className="py-7 flex justify-between items-center md:pr-0 pr-5"
                                onClick={() =>
                                    heading === link.name ? setHeading("") : setHeading(link.name)
                                }
                            >
                                {
                                    link.name
                                }
                                <span className="text-xl md:hidden  inline">
                                    <ArrowsAltOutlined />
                                </span>
                            </h1>
                            {
                                link.submenu && (
                                    <div>
                                        <div className="absolute top-15 hidden group-hover:md:block hover:md:block z-10">
                                            <div className="py-2">
                                                <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45">

                                                </div>
                                            </div>
                                            <div className="bg-white p-5 max-h-56 w-full overflow-y-auto"
                                                style={{
                                                    width: "300px"
                                                }}
                                            >
                                                {
                                                    link.sublinks.map((sublink, index) => (
                                                        <div key={index} >
                                                            <div className=" hover:bg-gray-200 px-2 py-0.5 !important">
                                                                <li className="text-sm text-gray-600 my-2.5
                                                                ">
                                                                    <Link

                                                                        href={sublink.link} >
                                                                        {
                                                                            sublink.name
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                        {/* Mobile Menus */}
                        <div
                            className={
                                `
                            ${heading === link.name ? "md:hidden" : "hidden"}
                            `
                            }
                        >
                            {
                                link.sublinks && (
                                    link.sublinks.map((sublink, index) => (
                                        <div key={index}>
                                            <div>
                                                <li className="py-3 pl-14 
                                                                ">
                                                    <Link

                                                        href={sublink.link} >
                                                        {
                                                            sublink.name
                                                        }
                                                    </Link>
                                                </li>
                                            </div>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default NavLinks