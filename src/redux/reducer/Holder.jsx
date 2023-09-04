export const IS_SIGN_IN = "IS_SIGNIN";

const initial_state = {
  isSignin: null,
};

const holderReducer = (state = initial_state, action) => {
  switch (action.type) {
    case IS_SIGN_IN:
      return {
        ...state,
        isSignin: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default holderReducer;
