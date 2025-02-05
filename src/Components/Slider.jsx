import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from '@material-tailwind/react';
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { useContextValue } from '../Context';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { useNavigate } from 'react-router-dom';
import Avatar from 'react-avatar';
const Slider = ({ user, fetchFulfilledRequests, setOption, setIsFormVisible, setToggleSlider, userPicture }) => {

  const fullName = user ? user.firstName + ' ' + user.lastName : 'Not Available';
  const { state, dispatch } = useContextValue();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging you out");
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    toast.success('logged out successfully!', {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {

      navigate('/login');
    }, 1100);

    dispatch({
      type: 'SET_USER',
      user: null,
    });
  };

  const handleOptionClick = (option) => {
    setToggleSlider(false);
    if (user?.userStatus === 'active') {
      setOption(option);
      if (option === 'Requests') {
        fetchFulfilledRequests(); // Fetch requests only if the option is Inbox
      }
      else if (option == 'createNewRequest') {
        setIsFormVisible(true);
      }
    }


  };

  return (
    <Card className='h-[100vh] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5'>
      <div className='mb-2 p-4 h-auto'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <div className='flex items-center justify-center w-[80%]'>
            {userPicture ? (
              <img src={userPicture} alt='User' className='h-24 w-24 object-cover rounded-full' />
            ) : (

            <Avatar
              name={fullName} // Generates initials based on the user's name
              size='100' // Avatar size
              round={true} // Makes it round
              className='h-24 w-24 object-cover text-xxl'
              color='#1E40AF' // Bluish background color (Tailwind's indigo-900)
              fgColor='#FFFFFF' // White text color
              // textSizeRatio={0.8} 
            />
            )}

          </div>
          <Typography variant='h5' color='blue-gray w-full'>
            Hello, {user?.firstName} {user?.lastName}
          </Typography>
          {user && user.userStatus === 'active' ? (
            <Typography variant='h5' color='blue-gray w-full'>
              ({user?.ISAFid})
            </Typography>
          ) : user && user.userStatus === 'blocked' ? (
            <button className="rounded-lg border-2 px-3 border-violet-gray-100 w-fit bg-[#F1F1F1] text-blue-gray font-archivo font-semibold">
              Account Blocked!
            </button>
          ) : (
            <button className="rounded-lg border-2 px-3 border-violet-gray-100 w-fit bg-[#F1F1F1] text-blue-gray font-archivo font-semibold">
              Unverified Account!
            </button>
          )}
        </div>
      </div>
      <List>
        <ListItem
          onClick={user?.userStatus === 'active' ? () => handleOptionClick('Profile') : null}
          className={user?.userStatus !== 'active' ? 'cursor-not-allowed opacity-50' : ''}
        >
          <ListItemPrefix>
            <UserCircleIcon className='h-5 w-5' />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem
          onClick={user?.userStatus === 'active' ? () => handleOptionClick('createNewRequest') : null}
          className={user?.userStatus !== 'active' ? 'cursor-not-allowed opacity-50' : ''}
        >
          <ListItemPrefix>
            <PresentationChartBarIcon className='h-5 w-5' />
          </ListItemPrefix>
          Create New Request
        </ListItem>

        <ListItem
          onClick={user?.userStatus === 'active' ? () => handleOptionClick('Requests') : null}
          className={user?.userStatus !== 'active' ? 'cursor-not-allowed opacity-50' : ''}
        >
          <ListItemPrefix>
            <InboxIcon className='h-5 w-5' />
          </ListItemPrefix>
          My requests
          <ListItemSuffix>
            {/* Uncomment if you want to show a Chip with unread count */}
            {/* <Chip
              value='14'
              size='sm'
              variant='ghost'
              color='blue-gray'
              className='rounded-full'
            /> */}
          </ListItemSuffix>
        </ListItem>

        <ListItem
          onClick={user?.userStatus === 'active' ? () => handleOptionClick('Subscriptions') : null}
          className={user?.userStatus !== 'active' ? 'cursor-not-allowed opacity-50' : ''}
        >
          <ListItemPrefix>
            <UserPlusIcon className='h-5 w-5' />
          </ListItemPrefix>
          Subscriptions
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>
            <PowerIcon className='h-5 w-5' />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Slider;
