const Card = ({ card }) => {
  const sendEmail = (emails) => {
    const workEmail = emails.work;
    alert("email sent to " + workEmail);
  };

  return (
    <div className="flex flex-col text-gray-800 border p-3 shadow-md rounded-md items-end hover:-translate-y-1 transition-all">
      <div className="flex items-center w-full">
        <div>
          <img
            src={card.picture}
            alt="employee"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ml-8">
          <p className=" text-xl">{card.name}</p>
          <p>{card.position}</p>
          <p>
            Age: {card.age} years <span className=" text-gray-600">/</span>{" "}
            about {card.age * 12} months
          </p>
        </div>
      </div>
      <button
        className="border p-2 rounded-sm mt-2"
        onClick={() => sendEmail(card.email)}
      >
        Send email to work
      </button>
    </div>
  );
};
export default Card;
