/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Modal, Row } from 'antd';
import Form from '../Forms/Form';
import FormInput from '../Forms/FormInput';

interface SignupModalProps {
    title: string;
    visible: boolean;
    confirmLoading: boolean;
    onOk: () => void;
    onCancel: () => void;
    showLogin?: () => void;
}

const SignupModal = ({
    title,
    visible,
    confirmLoading,
    onOk,
    onCancel,
    showLogin
}: SignupModalProps) => {

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
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
                        <FormInput name="name" label="Your Name" />
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
                    <p className="text-gray-500">Don't have an Account</p>
                    <span
                        onClick={showLogin}
                        className="text-blue-500 font-medium hover:underline cursor-pointer">
                        Login
                    </span>
                </div>
            </Form>
        </Modal>
    );
};

export default SignupModal;