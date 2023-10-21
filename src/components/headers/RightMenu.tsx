'use client'
/* eslint-disable react/no-unescaped-entities */
import { useAuth } from '@/services/auth.service';
import { removeUserInfo } from '@/utils/local-storage';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, MenuProps, Space, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authKey } from '../constants/storageKey';
import LoginModal from '../modal/LoginModal';
import SignupModal from '../modal/SignupModal';


interface Props {
    isLoading: boolean;
    isUserLoggedIn: boolean;
    // logOut: () => void;
}


const RightMenu = () => {
    const { isUserLoggedIn, isLoading } = useAuth();
    console.log(isUserLoggedIn, 'isUserLoggedIn', isLoading, 'isLoading');

    const [open, setOpen] = useState(false);
    const [userInfoLoading, setUserInfoLoading] = useState(false);


    const router = useRouter();

    const logout = () => {
        // setUserInfoLoading(true);
        removeUserInfo(authKey);

        router.push('/home');
        // window.location.reload();
    };


    const items: MenuProps["items"] = [
        {
            key: "0",
            label: (
                <Button type="text" >
                    Account
                </Button>
            ),
        },
        {
            key: "1",
            label: (
                <Button onClick={logout} type="text" danger>
                    Logout
                </Button>
            ),
        },
    ];

    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signupModalVisible, setSignupModalVisible] = useState(false);

    const showLoginModal = () => {
        setLoginModalVisible(true);
        setSignupModalVisible(false);
    };

    const showSignupModal = () => {
        setSignupModalVisible(true);
        setLoginModalVisible(false);
    };

    const closeModals = () => {
        setLoginModalVisible(false);
        setSignupModalVisible(false);
    };



    if (isLoading) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    zIndex: 9999
                }}
            >
                <Space>
                    <Spin tip="Loading" size="large" />
                </Space>
            </div>
        )

    }
    return (
        <>

            {
                isUserLoggedIn ? (

                    <Dropdown menu={{ items }} placement="bottom"   >
                        <Avatar size="large" icon={<UserOutlined />} />
                    </Dropdown>
                ) : (
                    <button onClick={showLoginModal} className="bg-gray-400 text-white px-4 py-2 rounded-xl">
                        Log In
                    </button>

                )
            }


            <LoginModal
                title="Login"
                visible={loginModalVisible}

                onCancel={closeModals}
                showSignup={showSignupModal}
            />

            <SignupModal
                title="Sign Up"
                visible={signupModalVisible}

                onCancel={closeModals}
                showLogin={showLoginModal}
            />
        </>
    );
};

export default RightMenu;