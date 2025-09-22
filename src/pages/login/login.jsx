import { Button, Col, Form, Input, message, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { loginAPI } from "../../services/auth-api";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onFinish = async (value) => {
        setIsLoading(true);
        const { email, password } = value;
        const res = await loginAPI(email, password);
        console.log(">>>Check res of value", res?.data);
        if (res.data) {
            message.success("ログインしました");
            form.resetFields();
        } else {
            message.error("エラー発生しました。内容ご確認の上、再度お試しください");
        }
        setIsLoading(false);
    };
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>ログイン</h1>
            <Row justify={"center"}>
                <Col sm={24} md={18} lg={6}>
                    <Form onFinish={onFinish} size="middle" form={form}>
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

                        <Form.Item label={null}>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}>
                                <Button type="primary" htmlType="submit" loading={isLoading}>
                                    Submit
                                </Button>
                                <span>
                                    アカウントをお持ちではないですか？
                                    <Link to={"/register"}>登録する</Link>
                                </span>
                            </div>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
