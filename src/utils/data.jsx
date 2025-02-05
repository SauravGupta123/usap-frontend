import { BsCurrencyDollar, BsShield} from 'react-icons/bs';
import { CgProfile } from "react-icons/cg";
import { FiCreditCard } from 'react-icons/fi';

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const userProfileData = [
  {
    icon:<CgProfile /> ,
    title: 'Dashboard',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    link:'/profile',
  },
  {
    icon: <BsShield />,
    title: 'Requests',
    desc: 'Fulfilled requests',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    'link':'/profile'
  },
  {
    icon: <BsCurrencyDollar />,
    title: 'Subscriptions',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    link:'/profile'
  },
];
