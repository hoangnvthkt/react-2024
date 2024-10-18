import { createUserAPI } from '../../services/api.service';

const createUser = () => {
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
    return (
        <>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </>
    )
}
export default createUser;