import UserForm from "../user/user.form"
import UserTable from "../user/user.table"

const UserPage = () => {
    return (
        <div>
            <div>
                <UserForm></UserForm>
                <UserTable />
            </div>
        </div>
    )
}
export default UserPage