'use client';
import { useUserLoginMutation } from '@/redux/api/user/authApi';
import { Button, Col, Modal, Row, Space, Spin, message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';
import { IGenericErrorResponse } from '../Types/common';

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
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [userLogin, { isLoading: isUserLoginLoading }] = useUserLoginMutation();

    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        setLoading(true);
        try {

            const res = await userLogin({
                email: data.email,
                password: data.password
            }).unwrap();

            console.log(res, 'res', isUserLoginLoading);

            if (res?.data.accessToken) {
                setLoading(false);
                message.success(res.message);
                localStorage.setItem('accessToken', res.data.accessToken);
                router.push('/home')
                onCancel();
            }
        } catch (error: IGenericErrorResponse | any) {
            setLoading(false);
            message.error(error.message)
            console.log(error, 'miii');
        }
    };

    const toggleLoginModal = () => {
        setIsLoginModalVisible(!isLoginModalVisible);
    };


    if (loading) {
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
            <Modal
                className={loading ? '!blur-sm' : ""}
                title={title}
                open={visible}
                onOk={onOk}
                // confirmLoading={confirmLoading}
                onCancel={onCancel}
            // closeIcon={<><p>Close</p></>}
            >
                <div>
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
                </div>
            </Modal>
        </>
    );
};

export default LoginModal;