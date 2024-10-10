import { Button, Checkbox, Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("")
    const handleClickBtn = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = { fullName, password, email, phone };

        axios.post(URL_BACKEND, data)
        // console.log("check data", { fullName, password, email, phone })
    }
    // console.log("check  >>", fullName, password, email, phone);
    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }} />
            </Form.Item>



            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
            </Form.Item>

            <Form.Item
                label="PhoneNumber"
                name="phone"
                rules={[
                    {
                        required: true,
                        message: 'Please input your phone!',
                    },
                ]}
            >
                <Input
                    value={phone}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={() => handleClickBtn()}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );

}
export default UserForm;