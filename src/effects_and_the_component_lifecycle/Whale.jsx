const Whale = ({ name, about, weight }) => (
  <div className="prose">
    <h3>
      {name}, weight {weight}kg
    </h3>
    <p>{about}</p>
  </div>
)

export default Whale
