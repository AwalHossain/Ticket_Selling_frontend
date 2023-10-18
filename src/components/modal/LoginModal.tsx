'use client';
import { useUserLoginMutation } from '@/redux/api/user/authApi';
import { Button, Col, Modal, Row } from 'antd';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';

interface SignupModalProps {
    title: string;
    visible: boolean;
    confirmLoading: boolean;
    onOk: () => void;
    onCancel: () => void;
    showSignup?: () => void;
}

type FormValues = {
    email: string;
    password: string;
};

const LoginModal = ({
    title,
    visible,
    confirmLoading,
    onOk,
    onCancel,
    showSignup
}: SignupModalProps) => {
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(true);

    const [userLogin] = useUserLoginMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        console.log(data);
        try {
            const res = await userLogin({
                email: data.email,
                password: data.password
            });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleLoginModal = () => {
        setIsLoginModalVisible(!isLoginModalVisible);
    };

    return (
        <>
            <Modal
                title={title}
                open={visible}
                onOk={onOk}
                confirmLoading={confirmLoading}
                onCancel={onCancel}
            >
                <h1 className="text-2xl text-center">{title}</h1>
                <Form submitHandler={onSubmit}>
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={24} style={{ margin: '10px 0' }}>
                            <FormInput name="email" label="Email" size="large" />
                            <FormInput name="password" label="Password" type="password" />
                        </Col>
                    </Row>

                    <div className="flex items-center justify-center py-4">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                        <p className="text-gray-500">Already have an Account?</p>
                        <span
                            className="text-blue-500 font-medium hover:underline cursor-pointer"
                            onClick={showSignup}
                        >
                            Sign Up
                        </span>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default LoginModal;