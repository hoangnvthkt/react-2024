import { Space, Table } from 'antd';
// import { fetchAllUserAPI, deleteUserAPI } from '../../services/api.service';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import ViewUserDetail from './view.user.detail';
import { Popconfirm, notification } from 'antd';
import { deleteUserAPI } from '../../services/api.service'


const UserTable = (props) => {
    const { dataUser, loadUser } = props
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isModalViewOpen, setIsModalViewOpen] = useState(false);
    // const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);

    const handleDeleteUser = async (_id) => {
        const res = await deleteUserAPI(_id);
        if (res.data) {
            notification.success({
                message: "Delete success",
                description: `Xoá user thành công`
            })
            await loadUser()

        } else {
            notification.error({
                message: "Delete error",
                description: JSON.stringify(res.message)
            })
        }
    }


    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a onClick={() => {
                        setIsModalViewOpen(true)
                        setDataDetail(record)
                    }}>{record._id}</a>
                )
            }
        },
        {
            title: 'FullName',
            dataIndex: 'fullName',

        },
        {
            title: 'Email',
            dataIndex: 'email',

        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit<EditOutlined
                        onClick={() => {
                            setIsModalUpdateOpen(true)
                            setDataUpdate(record)

                        }
                        }
                        style={{ color: "orange" }} /></a>
                    <a>Delete
                        <Popconfirm
                            title="Xoá người dùng"
                            description="Mày có chắc chắn muốn xoá không?"
                            onConfirm={() => handleDeleteUser(record._id)}
                            // onCancel={() => setIsModalDeleteOpen(false)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined
                                style={{ color: "red" }} />
                        </Popconfirm>


                    </a>
                </Space>
            ),
        },

    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"}>
            </Table>
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadUser={loadUser}
            />

            <ViewUserDetail
                isModalViewOpen={isModalViewOpen}
                setIsModalViewOpen={setIsModalViewOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />


        </>

    )
}
export default UserTable;