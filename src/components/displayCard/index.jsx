const DisplayCard = ({ type, data }) => {
  const dataInfo =
    type === "group"
      ? {
          name: data.name,
          category: data.category,
          description: data.description,
          additionalInfo: data.creator.username,
        }
      : {
          name: data.title,
          category: data.category,
          description: data.achieved,
          additionalInfo: data.how_much_achieved,
        };

  return (
    <div>
      <h3>{dataInfo.name}</h3>
      <h4>{dataInfo.category}</h4>
      <p>{dataInfo.description}</p>
      <p>{dataInfo.additionalInfo}</p>
    </div>
  );
};
export default DisplayCard;
