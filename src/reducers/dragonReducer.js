const initialState = {
  otherStateProperties: '',
  members: [
    { name: 'Justin T', dragonStatus: true },
    { name: 'Justin A', dragonStatus: false }
  ]
};

export const dragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return {
        ...state,
        members: [
          ...state.members,
          { name: action.payload, dragonStatus: false }
        ]
      };
    default:
      return state;
  }
};
