import MeetupList from "../components/meetup-list/MeetupList";

const meetups = [
  {
    id: 1,
    title: "First Meetup",
    address: "Some Street 1, Some City",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
  },
  {
    id: 2,
    title: "Second Meetup",
    address: "Some Street 2, Some City",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
  },
  {
    id: 3,
    title: "Third Meetup",
    address: "Some Street 3, Some City",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
  },
];

const Meetups = () => {
  return (
    <div>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default Meetups;
