const initialState = {
    userRole: null, // Initial state for the "userRole" property
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER_ROLE":
        return {
          ...state,
          userRole: action.payload, // Update state with the new role
        };
        case "SET_USER_ROLE_NULL":
            return{
                ...state,
                userRole:null
            }
      default:
        return state;
    }
  };
  
  export default userReducer;