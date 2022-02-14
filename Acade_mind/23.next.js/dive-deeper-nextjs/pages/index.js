import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
    address: "Some adress 5, 12345 5",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
    address: "Some adress 5, 12345 5",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A 3rd Meetup",
    image:
      "https://cdn.pixabay.com/photo/2019/08/01/12/36/illustration-4377408_960_720.png",
    address: "Some adress 5, 12345 5",
    description: "This is a third meetup!",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
