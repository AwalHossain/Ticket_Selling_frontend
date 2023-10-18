'use client'
import Link from 'next/link'
import NavLinks from './LeftMenu'
import Profile from './RightMenut'

const MobileView = ({ open }: { open: boolean }) => {
    return (
        <>
            <ul
                className={`md:hidden bg-white absolute 
                    text-black
                    w-full  bottom-0 py-24 pl-4
                        duration-500 ${open ? "left-0 h-screen" : "left-[-100%]"}
                        z-40 overflow-y-scroll scrollbar-hide 
                    `}
            // style={{ maxHeight: "calc(100vh - 80px)" }}
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
        </>
    )
}

export default MobileView