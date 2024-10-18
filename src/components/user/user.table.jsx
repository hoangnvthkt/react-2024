import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';


const UserTable = () => {
    const [dataUser, setDataUser] = useState([])
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data);
    }
    useEffect(() => {
        loadUser();
    }, []);
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',


            render: (text) => <a>{text}</a>,
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

    ];
    // const data = [
    //     {
    //         key: '1',
    //         name: 'John Brown',
    //         age: 32,
    //         address: 'New York No. 1 Lake Park',
    //         tags: ['nice', 'developer'],
    //     },
    //     {
    //         key: '2',
    //         name: 'Jim Green',
    //         age: 42,
    //         address: 'London No. 1 Lake Park',
    //         tags: ['loser'],
    //     },
    //     {
    //         key: '3',
    //         name: 'Joe Black',
    //         age: 32,
    //         address: 'Sydney No. 1 Lake Park',
    //         tags: ['cool', 'teacher'],
    //     },
    // ];


    return (
        <Table columns={columns} dataSource={dataUser} rowKey={"_id"}></Table>
    )
}
export default UserTable;