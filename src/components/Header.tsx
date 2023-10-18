'use client'
import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SearchBar from "./SearchBar";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='banner'>
            <Navbar />
            <SearchBar />
        </div>
    )
}

export default Header