import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
} from '@material-tailwind/react';
import {
    InboxIcon,
    PowerIcon,
} from '@heroicons/react/24/solid';
import { useContextValue } from '../../Context';
import { useNavigate } from 'react-router-dom';
import activeUser from "/AdminPortal/activeUser.png";
import blockedUser from "/AdminPortal/blockedUser.png";
import pendingApproval from "/AdminPortal/pendingApproval.png";
import newRequest from "/AdminPortal/newRequests.png";
import completed from "/AdminPortal/completed.png";
import logout from "/AdminPortal/logout.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Sidebar = ({ setRequestType, adminName ,admin}) => {
    const { state, dispatch } = useContextValue();
    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logging you out");
        setIsLoading(true);
        // Remove tokens and reset user state
        localStorage.removeItem('subAdminToken');
        localStorage.removeItem('subAdminUserName');
        
        toast.success(`Logged Out Successfully!`, {
            position: toast.POSITION.TOP_RIGHT, // Adjust position as needed
            autoClose: 3000, // Display the toast for 3 seconds
        });    
        setIsLoading(false);
        setShowDialog(false);
        // Delay the navigation to give time for the toast to display
        setTimeout(() => {
            navigate('/');
        }, 1100); // Delay by 3 seconds
    };
    
    return (
        <>        <Card className='h-[calc(100vh-1rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
            <div className='mb-2 p-4 h-[100]'>
                <div className='flex flex-col items-center justify-center gap-7'>
                    <div className='flex items-center justify-center w-[80%]'>
                        <Avatar
                            src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
                            alt='image'
                            size='lg'
                        />
                    </div>
                    <div className='flex flex-col items-center'>
                    <Typography variant='h5' color='blue-gray w-full'>
                        Hello, {admin.name?admin.name:'Admin'}
                    </Typography>
                    <Typography variant='h6' color='blue-gray w-full'>
                        ({admin.userName})
                    </Typography>
                    </div>
                </div>
            </div>
            <List className='gap-6'>
             
                <ListItem onClick={() => setRequestType("pending")}>
                    <ListItemPrefix>
                    <img src={newRequest}  className='h-8 w-8' alt="" />

                    </ListItemPrefix>
                    New Requests
                </ListItem>
                <ListItem onClick={() => setRequestType("completed")}>
                    <ListItemPrefix>
                    <img src={completed}  className='h-5 w-5' alt="" />

                    </ListItemPrefix>
                    Completed Requests
                </ListItem>


                <ListItem onClick={()=>setShowDialog(true)}>
                    <ListItemPrefix>
                    <img src={logout} className='h-5 w-5' alt="" />

                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
        </Card>
        {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Log Out</h2>
            <p>Are you sure you want to logout?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={()=>setShowDialog(false)}
                className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
                disabled={isLoading}
              >
                {isLoading ? 'Please Wait' : 'Yes'}
              </button>
            </div>
          </div>
        </div>
      )}
        </>

    );
};

export default Sidebar;
