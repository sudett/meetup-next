export const INITIAL_STATE = {
  meetups: [
    {
      id: 1,
      title: "First Meetup",
      address: "Some Street 1, Some City",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
      description: "This is some description",
    },
    {
      id: 2,
      title: "Second Meetup",
      address: "Some Street 2, Some City",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
      description: "This is some description",
    },
    {
      id: 3,
      title: "Third Meetup",
      address: "Some Street 3, Some City",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
      description: "This is some description",
    },
  ],
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
