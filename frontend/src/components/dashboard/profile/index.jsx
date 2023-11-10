import { AdminTitle } from '../../../utils/tools'
import AuthProfile from './auth';

const AdminProfile = () => {
    return(
        <>
            <AdminTitle title="Profile"/>
            <AuthProfile/>
        </>
    )
}

export default AdminProfile;