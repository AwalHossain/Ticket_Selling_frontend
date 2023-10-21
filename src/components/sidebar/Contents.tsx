import { Layout } from 'antd';

const { Content } = Layout;

import React from 'react';

const Contents = ({ children }: { children: React.ReactNode }) => {
    return (
        <Content
            style={{
                minHeight: "100vh",
                color: "black",
            }}
        >
            <div>

                {children}
            </div>
        </Content>
    )
}

export default Contents