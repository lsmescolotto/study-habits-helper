const DisplayCard = ({ type = "", data }) => {
  return (
    <>
      {type === "group"
        ? data.map((current) => (
            <div>
              <h3>{current.name}</h3>
              <h4>{current.category}</h4>
              <p>{current.description}</p>
              <p>{current.creator.username}</p>
            </div>
          ))
        : data.map((current) => (
            <div>
              <h3>{current.title}</h3>
              <h4>{current.category}</h4>
              <p>{current.achieved}</p>
              <p>{current.how_much_achieved}</p>
            </div>
          ))}
    </>
  );
};
export default DisplayCard;
