const initialState = {
  title: 'Iam coming from the Redux store!',
  editing: false
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload,
        editing: false
      };
    // NEW CASE HERE
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      };
    default:
      return state;
  }
};
