import MeetupItem from "../meetup-item/MeetupItem";

import { useMeetupContext } from "../../contexts/MeetupContext";

const MeetupList = () => {
  const { meetups } = useMeetupContext();

  return (
    <div>
      {meetups?.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </div>
  );
};

export default MeetupList;
