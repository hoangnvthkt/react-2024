import { Button, Checkbox, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { createUserAPI } from '../../services/api.service';

const onFinish = (values) => {
    //console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    //console.log('Failed:', errorInfo);
};
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhoneNumber] = useState("")
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, password, email, phone);
        if (res.data) {
            notification.success({
                message: "create success",
                description: `Tạo user thành công`
            })
            console.log(res.data.data)
        } else {
            notification.error({
                message: "create error",
                description: JSON.stringify(res.message)
            })
        }


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