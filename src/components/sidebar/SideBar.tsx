import { getUserInfo } from '@/services/auth.service';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import SideBarItem from './SideBarItem';

const { Header, Content, Footer, Sider } = Layout;

const SideBar: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { role } = getUserInfo() as any;


    return (

        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,
            }}


        >
            <div
                style={{
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: ".5rem",
                    padding: "10px 0px",
                }}
            >
                UMS
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={SideBarItem(role)}
            />
        </Sider>
    );
};

export default SideBar;


{/* <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout> */}