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
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item>
                        <Link to="/">홈</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/Barrier_free">배리어프리 지도</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/kakaomap">배리어프리 경로찾기</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/view">게시판</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content
                className="site-layout"
                style={{
                    padding: '0 50px',
                    marginTop: 64,
                }}
            >
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
