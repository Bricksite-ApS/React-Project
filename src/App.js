import "./App.css";
import Card from "./components/Card";

const data = [
  {
    name: "Nikolaj Hoggins",
    position: "Lead Developer",
    age: 21,
    picture:
      "https://hoggins.io/media/65b7baed3edc9c37fcee2ebf/w2000/Final-Pitch-Day-StartupAarhus-3.jpg",
    email: { home: "nikolaj@home.com", work: "nikolaj@work.com" },
  },
  {
    name: "Mike Møller Madsen",
    position: "CEO",
    age: "Gammel Mand",
    picture:
      "https://mikemoller.dk/media/65ae728251a03749f5c66cf1/w2000/25407-3-1.jpeg",
    email: { home: "mike@home.com", work: "mike@work.com" },
  },
  {
    name: "Sebastian Bach Andersen",
    position: "Developer",
    age: "24",
    picture:
      "https://bricksite.io/media/62a0566711a4c16a80ffa708/w2000/25233.jpg",
    email: { home: "sebastian@home.com", work: "sebastian@work.com" },
  },
  {
    name: "Rasmus Rosengreen",
    position: "Marketeer",
    age: "32",
    picture:
      "https://bricksite.io/media/62a0566711a4c16a80ffa708/w2000/25233.jpg",
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
