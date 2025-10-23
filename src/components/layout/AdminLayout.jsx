import {
    DesktopOutlined,
    FileOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import Header from "../header/header";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const isAdminRoute = window.location.pathname.startsWith("/admin");
    const user = useSelector((state) => state.account.user);
    const userRole = user.role;

    const { Header, Content, Footer, Sider } = Layout;
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem("ADMIN", "1", <PieChartOutlined />),
        getItem("Dashboard", "2", <DesktopOutlined />),
        getItem("Manage Users", "sub1", <UserOutlined />, [
            getItem("CRUD", "3"),
            getItem("File1", "4"),
        ]),
        getItem("Manage Books", "sub2", <TeamOutlined />),
        getItem("Manage Orders", "9", <FileOutlined />),
    ];
    return (
        <div className="layout-admin-app">
            {isAdminRoute && userRole === "ADMIN" && <Header />}

            <Layout style={{ minHeight: "100vh" }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}>
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content style={{ margin: "0 16px" }}>
                        <Breadcrumb
                            style={{ margin: "16px 0" }}
                            items={[{ title: "User" }, { title: "Bill" }]}
                        />
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                                borderRadius: borderRadiusLG,
                            }}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Ant Design ©{new Date().getFullYear()} Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
            {isAdminRoute && userRole === "ADMIN" && <Footer />}
        </div>
    );
};
export default AdminLayout;
