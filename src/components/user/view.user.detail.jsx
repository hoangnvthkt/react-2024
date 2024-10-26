import { useEffect, useState } from "react";
import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const { dataDetail, isModalViewOpen, setIsModalViewOpen, setDataDetail } = props;
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

    return (
        <>
            <Drawer
                width={"40vw"}
                title="Chi tiết User"
                onClose={() => {
                    setDataDetail(null);
                    setIsModalViewOpen(false);
                }}
                open={isModalViewOpen}
            >
                {dataDetail ? <>
                        <p>Id: {dataDetail.id}</p>
                        <br />
                        <p>Full name: {dataDetail.fullName}</p>
                        <br />
                        <p>Email: {dataDetail.email}</p>
                        <br />
                        <p>Phone number: {dataDetail.phone}</p>
                        <br />
                        <p>Avatar:</p>
                        <div>
                            <img height={100} width={150}
                                 src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                        </div>
                        <div>
                            <label htmlFor='btnUpload' style={{
                                display: "block",
                                width: "fit-content",
                                marginTop: "15px",
                                padding: "5px 10px",
                                background: "orange",
                                borderRadius: "5px",
                                cursor: "pointer"
                            }}>
                                Upload Avatar
                            </label>
                            <input type='file' hidden id='btnUpload' />
                        </div>

                        {/* <Button type='primary'>Upload Avatar</Button> */}
                    </>
                    :
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                }
            </Drawer>

        </>
    )
}
export default ViewUserDetail;