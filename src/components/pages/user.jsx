import UserForm from "../user/user.form"
import UserTable from "../user/user.table"
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';
const UserPage = () => {
    const [dataUser, setDataUser] = useState([])
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUser(res.data);
    }
    useEffect(() => {
        loadUser();
    }, []);
    return (
        <div>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    loadUser={loadUser}
                    dataUser={dataUser} />
            </div>
        </div>
    )
}
export default UserPage