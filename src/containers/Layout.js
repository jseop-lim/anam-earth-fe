import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const CustomLayout = props => {
    return (
        <Layout>
            <Header
                style={{
                    position: 'fixed',
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `Front${index + 1}`,
                    }))}
                />
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 380,
                    }}
                >
                    {props.children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    height: '100%',
                    width: '100%',
                }}
            >
                Ant Design ?2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default CustomLayout;
