import { ProfileOutlined, TableOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import Link from 'next/link';
import { USER_ROLE } from '../constants/role';

const SideBarItem = (role: string) => {

    const defaultSideBarItem: MenuProps["items"] = [
        {
            label: "Profile",
            key: "Profile",
            icon: <ProfileOutlined />,
            children: [
                {
                    label: <Link href={`/${role}`}>Account Profile</Link>,
                    key: `/${role}/AccountProfile`,
                }, {
                    label: <Link href={`/${role}/change-password`}>Change Password</Link>,
                    key: `/${role}/change-password`,
                },
            ]
        },
    ]

    const commonSideBarItem: MenuProps["items"] = [
        {
            label: "User Management",
            key: "user-management",
            icon: <TableOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/user-management`}>User List</Link>,
                    key: `/${role}/user-management`,
                },
                {
                    label: <Link href={`/${role}/user-management/create`}>Create User</Link>,
                    key: `/${role}/user-management/create`,
                },
                {
                    label: <Link href={`/${role}/user-management/role`}>Manage Role</Link>,
                    key: `/${role}/user-management/role`,
                }
            ]
        },
        {
            label: "Service Management",
            key: "service-management",
            icon: <TableOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/service-management/event`}>Event</Link>,
                    key: `/${role}/service-management/event`,
                },
                {
                    label: <Link href={`/${role}/service-management/city`}>City</Link>,
                    key: `/${role}/service-management/city`,
                },
                {
                    label: <Link href={`/${role}/service-management/venue`}>Venue</Link>,
                    key: `/${role}/service-management/venue`,
                },
                {
                    label: <Link href={`/${role}/service-management/category`}>Category</Link>,
                    key: `/${role}/service-management/category`,
                },
                {
                    label: <Link href={`/${role}/service-management/create`}>Create Ticket</Link>,
                    key: `/${role}/service-management/create`,
                },
            ]
        }, {
            label: "Order Management",
            key: "order-management",
            icon: <TableOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/order-management`}>Order List</Link>,
                    key: `/${role}/order-management`,
                },
            ]
        }, {
            label: "Content Management",
            key: "conten-management",
            icon: <TableOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/blog`}>Blog</Link>,
                    key: `/${role}/blog`,
                },
                {
                    label: <Link href={`/${role}/faq`}>FAQ</Link>,
                    key: `/${role}/faq`,
                },
            ]
        },

    ]


    const adminSideBarItem: MenuProps["items"] = [
        ...defaultSideBarItem,
        ...commonSideBarItem,
    ]

    const superAdminSideBarItem: MenuProps["items"] = [
        ...defaultSideBarItem,
        ...commonSideBarItem,
        {
            label: "admin management",
            key: "admin-management",
            icon: <TableOutlined />,
            children: [
                {
                    label: <Link href={`/${role}/admin-management`}>Create Admin</Link>,
                    key: `/${role}/admin-management`,
                },
                {
                    label: <Link href={`/${role}/admin-management/role`}>Manage Role</Link>,
                    key: `/${role}/system-management/create`,
                },
            ]
        }
    ]


    if (role === USER_ROLE.SUPER_ADMIN) return superAdminSideBarItem
    else if (role === USER_ROLE.ADMIN) return adminSideBarItem
    else return defaultSideBarItem
}

export default SideBarItem