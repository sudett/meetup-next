import MeetupItem from "../meetup-item/MeetupItem";

const MeetupList = ({ meetups }) => {
  return (
    <div>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </div>
  );
};

export default MeetupList;
