import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { Form, Upload, } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const ViewUserDetail = (props) => {
    const { dataDetail, isModalViewOpen, setIsModalViewOpen } = props;
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("")
    useEffect(() => {
        if (dataDetail) {
            setId(dataDetail._id);
            setFullName(dataDetail.fullName);
            setEmail(dataDetail.email);
            setPhoneNumber(dataDetail.phone);
        }
    }, [dataDetail])
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (
        <>
            <Drawer
                width={"40vw"}
                title="User detail"
                onClose={() => {
                    setIsModalViewOpen(false)
                    // setDataDetail(null)
                }}
                open={isModalViewOpen}>
                <p>ID: {id}</p>
                <p>FullName: {fullName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <div>
                    <img height={250} width={300}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />

                </div>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <button
                            style={{
                                border: 0,
                                background: 'none',
                            }}
                            type="button"
                        >
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </button>
                    </Upload>
                </Form.Item>


            </Drawer>

        </>
    )
}
export default ViewUserDetail;