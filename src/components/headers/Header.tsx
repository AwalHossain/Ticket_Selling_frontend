'use client'
import { useState } from "react";
import SearchBar from "../SearchBar";
import Navbar from "./Navbar";

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