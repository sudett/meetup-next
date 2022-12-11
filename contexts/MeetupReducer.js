export const INITIAL_STATE = {
  meetups: [],
};

export const meetupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "add-meetup":
      return {
        ...state,
        meetups: [
          ...state.meetups,
          {
            ...action.payload,
            id: state.meetups.length + 1,
          },
        ],
      };

    default:
      return state;
  }
};
