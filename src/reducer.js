
export const initialState = {
    user: null
  };
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case  "SET_USER" :
          return{
            ...state,
            //bd name
            user :"hi"
          }
      default:
        return state;
    }
  };
  
  export default reducer;
