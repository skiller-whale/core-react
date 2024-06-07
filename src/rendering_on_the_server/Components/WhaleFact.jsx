const WhaleFact = ({ name, weight, about }) => {
  return (
    <div className="flex justify-between border border-gray-300 p-3">
      <div className="prose">
        <h3>
          {name}, weight {weight}kg{" "}
        </h3>
        <p>{about}</p>
      </div>
      <div className="flex text-8xl items-center justify-center justify-self-end ml-4">
        🐋
      </div>
    </div>
  );
};

export default WhaleFact;
