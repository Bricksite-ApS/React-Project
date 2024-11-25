const Card = ({ employee }) => {
  const sendEmail = (emails) => {
    const workEmail = emails.mail.work;
    alert("email sent to " + workEmail);
  };

  return (
    <div className="flex flex-col text-gray-800 border p-3 shadow-md rounded-md items-end hover:-translate-y-1 transition-all">
      <div className="flex items-center w-full">
        <div>
          <img
            src={employee.picture}
            alt="employee"
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ml-8">
          <p className=" text-xl">{employee.name}</p>
          <p>{employee.position}</p>
          <p>
            Age: {employee.age} years <span className=" text-gray-600">/</span>{" "}
            about {employee.age * 12} months
          </p>
        </div>
      </div>
      <button
        className="border p-2 rounded-sm mt-2"
        onClick={() => sendEmail(employee.email)}
      >
        Send email to work
      </button>
    </div>
  );
};
export default Card;
