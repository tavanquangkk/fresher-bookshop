import { Button, Input, Form, Checkbox, Col, Row, message, notification } from "antd";
import { registerAPI } from "../../services/auth-api";
import { Link } from "react-router";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onFinish = async (value) => {
        setIsLoading(true);
        const { fullName, email, password, phone } = value;
        const res = await registerAPI(fullName, email, password, phone);
        console.log(">>>Check res of value", res.data);
        if (res.data) {
            message.success("アカウント作成できました");
            form.resetFields();
        } else {
            message.error("エラー発生しました。内容ご確認の上、再度お試しください");
        }
        setIsLoading(false);
    };

    return (
        <div className="register">
            <h1 style={{ textAlign: "center" }}>会員登録</h1>
            <Row justify="center">
                <Col sm={24} md={18} lg={6}>
                    <Form size="middle" onFinish={onFinish} form={form}>
                        <Form.Item
                            layout="vertical"
                            label="フルネーム"
                            name="fullName"
                            rules={[{ required: true, message: "氏名を入力してください" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="メール"
                            name="email"
                            rules={[{ required: true, message: "メールを入力してください" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="パスワード"
                            name="password"
                            rules={[{ required: true, message: "パスワードを入力してください" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            layout="vertical"
                            label="携帯番号"
                            name="phone"
                            rules={[{ required: true, message: "携帯番号を入力してください" }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label={null}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <Button type="primary" htmlType="submit" loading={isLoading}>
                                    新規登録
                                </Button>
                                <span>
                                    <Link to={"/login"}>
                                        すでにアカウントをお持ちの方?
                                        <strong>ログイン</strong>
                                    </Link>
                                </span>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterPage;
