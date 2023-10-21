'use client'

import Contents from '@/components/sidebar/Contents'
import SideBar from '@/components/sidebar/SideBar'
import { useAuth } from '@/services/auth.service'
import { Layout } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    const router = useRouter()

    const { isLoading, isUserLoggedIn } = useAuth()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (!isUserLoggedIn) {
        return router.push('/home')
    }


    return (
        <Layout hasSider>
            <SideBar />
            <Contents>
                {children}
            </Contents>
        </Layout>
    )
}

export default DashboardLayout