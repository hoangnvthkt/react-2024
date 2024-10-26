import { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, notification, Modal } from 'antd';
import { updateUserAPI } from "../../services/api.service"
const UpdateUserModal = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props
    // const { loadUser } = props;
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhoneNumber] = useState("")
    // const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    useEffect(() => {
        if (dataUpdate) {
            setFullName(dataUpdate.fullName);
            setId(dataUpdate._id);
            setPhoneNumber(dataUpdate.phone);
        }
    }, [dataUpdate])
    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        if (res.data) {
            console.log(res.data)
            notification.success({
                message: "update success",
                description: `Cập nhật user thành công`
            })
            setIsModalUpdateOpen(false)
            await loadUser()

        } else {
            notification.error({
                message: "Update error",
                description: JSON.stringify(res.message)
            })
        }



    }

    return (
        <>
            <Modal

                title="Update User"
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => setIsModalUpdateOpen(false)}
                maskClosable={false}
                okText={"SAVE"}

            >
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

                >
                    <Form.Item
                        label="Id"
                    >
                        <Input
                            value={id}
                            disabled
                        />
                    </Form.Item>
                    <Form.Item
                        label="Username"
                    >
                        <Input
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="PhoneNumber"
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
                </Form>
            </Modal>
        </>
    )
}
export default UpdateUserModal;