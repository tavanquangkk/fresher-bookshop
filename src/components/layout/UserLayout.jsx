import { Avatar, Badge, Dropdown, Input, Menu, Space } from "antd";
import bookLogo from "../../assets/icons/book-logo.png";
import { DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";
import Footer from "../footer/footer";
import "../../assets/styles/app.css";
const UserLayout = () => {
    const items = [
        {
            label: (
                <a href="#" target="_blank" rel="noopener noreferrer">
                    1st menu item
                </a>
            ),
            key: "0",
        },
        {
            label: (
                <a href="#" target="_blank" rel="noopener noreferrer">
                    2nd menu item
                </a>
            ),
            key: "1",
        },
        {
            type: "divider",
        },
        {
            label: "3rd menu item",
            key: "3",
        },
    ];
    return (
        <div>
            <div className="user-layout-header">
                <img
                    src={bookLogo}
                    alt=""
                    width={100}
                    style={{ filter: "drop-shadow(16px 16px 20px red) invert(75%)" }}
                />
                <Input placeholder="📔 ban can tim gi hom nay " />
                <div className="cart-block">
                    <Badge count={5}>
                        <ShoppingCartOutlined style={{ fontSize: "2rem", color: "#000" }} />
                    </Badge>
                    <Dropdown menu={{ items }} trigger={["click"]}>
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Tai khoan
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
            <Outlet />
            <Footer className={"footer"} />
        </div>
    );
};
export default UserLayout;
