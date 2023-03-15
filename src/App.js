import "./App.css";
import Card from "./components/Card";

const data = [
  {
    name: "Nikolaj Hoggins",
    position: "Lead Developer",
    age: 21,
    picture:
      "https://media.licdn.com/dms/image/C5603AQFwIDp_8ndonA/profile-displayphoto-shrink_200_200/0/1565083485236?e=1684368000&v=beta&t=3R_ZptNUJajS1raUu43eg5pPEMOa1KuqtcDUwo7UNSY",
    email: { home: "nikolaj@home.com", work: "nikolaj@work.com" },
  },
  {
    name: "Mike Møller Madsen",
    position: "CEO",
    age: "Gammel Mand",
    picture:
      "https://media.licdn.com/dms/image/C4E03AQENwN-KTOLohQ/profile-displayphoto-shrink_800_800/0/1619703800663?e=1684368000&v=beta&t=A7XXxnl1ipDi9uoaGb_NnIxYRSrztiUlZ6IfhjV0clI",
    email: { home: "mike@home.com", work: "mike@work.com" },
  },
  {
    name: "Sebastian Bach Anders",
    position: "CEO",
    age: "22",
    picture:
      "https://media.licdn.com/dms/image/C4D03AQFmMx3ktWYhIQ/profile-displayphoto-shrink_800_800/0/1601901074260?e=1684368000&v=beta&t=P-BoFNC41IcqpfERNt-fXCoI6m3QsjFM4waIkl7SrH0",
    email: { home: "sebastian@home.com", work: "sebastian@work.com" },
  },
  {
    name: "Rasmus Rosengreen",
    position: "CEO",
    age: "22",
    picture:
      "https://media.licdn.com/dms/image/C4D03AQFmMx3ktWYhIQ/profile-displayphoto-shrink_800_800/0/1601901074260?e=1684368000&v=beta&t=P-BoFNC41IcqpfERNt-fXCoI6m3QsjFM4waIkl7SrH0",
    email: { home: "rasmus@home.com", work: "rasmus@work.com" },
  },
];

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-gray-800">
      <div className="flex flex-col items-center">
        <p className=" text-2xl font-bold mb-14">Welcome to Bricksite!</p>
        <div className="flex flex-col gap-4">Cards go here</div>
      </div>
    </div>
  );
}

export default App;
