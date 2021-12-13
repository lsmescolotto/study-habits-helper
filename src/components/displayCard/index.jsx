const DisplayCard = ({ type = "", data }) => {
  return (
    <>
      {type === "group"
        ? data.map((atual, index) => (
            <div key={index}>
              <h3>{atual.name}</h3>
              <h4>{atual.category}</h4>
              <p>{atual.description}</p>
              <p>{atual.creator.username}</p>
            </div>
          ))
        : data.map((atual, index) => (
            <div key={index}>
              <h3>{atual.title}</h3>
              <h4>{atual.category}</h4>
              <p>{atual.achieved}</p>
              <p>{atual.how_much_achieved}</p>
            </div>
          ))}
    </>
  );
};
export default DisplayCard;
