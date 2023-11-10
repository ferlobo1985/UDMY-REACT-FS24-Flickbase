import { AdminTitle } from '../../../utils/tools'
import AuthProfile from './auth';
import UserProfile from './profile';

const AdminProfile = () => {
    return(
        <>
            <AdminTitle title="Profile"/>
            <AuthProfile/>
            <UserProfile/>
        </>
    )
}

export default AdminProfile;