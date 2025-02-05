export const initialState = {
  user: localStorage.getItem('name') ? localStorage.getItem('name') : null,
  membership: null,
  mail: localStorage.getItem('email') ? localStorage.getItem('email') : null,
  student: null,
  amount: 0,
  isaddressChecked: false,
  picture:null,
  id: '',
  phoneNo:null,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        membership: action.membership,
        amount: action.price,
        student: action.studentType,
        id: action.id,
        
      };
    case 'SET_USER':
      return { ...state, user: action.user, mail: action.email , picture: action.picture, phoneNo: action.phoneNo};
    case 'SET_ADDRESS':
      return { ...state, isaddressChecked: action.address };
    default:
      return { ...state };
  }
};

export default Reducer;
