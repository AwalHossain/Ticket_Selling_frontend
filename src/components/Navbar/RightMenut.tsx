/* eslint-disable react/no-unescaped-entities */
'use client'


import React, { useState } from 'react';
import LoginModal from '../modal/LoginModal';
import SignupModal from '../modal/SignupModal';



const Profile: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

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



    return (
        <>

            <button onClick={showLoginModal} className="bg-blue-950 text-black px-6 py-2 rounded-full">
                Get Started
            </button>

            <LoginModal
                title="Login"
                visible={loginModalVisible}
                confirmLoading={confirmLoading}
                onOk={handleOk}
                onCancel={closeModals}
                showSignup={showSignupModal}
            />

            <SignupModal
                title="Sign Up"
                visible={signupModalVisible}
                confirmLoading={confirmLoading}
                onOk={handleOk}
                onCancel={closeModals}
                showLogin={showLoginModal}
            />
        </>
    );
};

export default Profile;