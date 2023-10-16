'use client'
import Header from "@/components/Header"
import Home from "@/components/Home/HomePage"
import Trending from "@/components/Trending"

const HomePage = () => {
    return (
        <div>
            <Header />
            <Trending />
            <Home />
        </div>
    )
}

export default HomePage