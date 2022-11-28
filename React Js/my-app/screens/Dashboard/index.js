import '/dashboard.css'
import CustomBtn from '../../components/CustomBtn'

function Dashboard() {
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            
            {/* props */}
            <CustomBtn title="Dashboard ka button"/>
        </div>
    )
}

export default Dashboard