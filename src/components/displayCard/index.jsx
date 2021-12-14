const DisplayCard = ({ type = "", data }) => {
  return (
    <>
      {type === "group"
        ? data.map((current) => (
            <div>
              <h3>{current.name}</h3>
              <h4>{current.category}</h4>
              <p>{current.description}</p>
              <p>By: {current.creator.username}</p>
            </div>
          ))
        : data.map((current) => (
            <div>
              <h3>{current.title}</h3>
              <h4>{current.category}</h4>
              <p>{current.difficulty}</p>
              <p>{current.frequency}</p>
              <p>Status: {current.achieved ? "Concluido" : "Em progresso"}</p>
              <p>Progresso: {current.how_much_achieved}/100</p>
            </div>
          ))}
    </>
  );
};
export default DisplayCard;
