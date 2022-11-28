import './profile.css'
import CustomBtn from '../../components/CustomBtn'

function Profile() {
    return (
        <div className='profile'>
            <CustomBtn color='yellow' title="Profile ka oper wala btn" />

            <h1>Profile</h1>

            <CustomBtn title="Profile ka btn" />
        </div>
    )
}

export default Profile
