export const Tour = ({ data, setData, allData }) => {
  const { id, image, info, name, price } = data;

  const removeEntry = () => {
    setData(
      allData.filter((item) => {
        if (item.id == id) {
        } else {
          return item;
        }
      })
    );
  };

  return (
    <article className="single-tour" id={id}>
      <p className="tour-price">${price}</p>
      <img className="img" src={image} alt="" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
        <button onClick={removeEntry} className="btn-block delete-btn btn">
          Not Interested
        </button>
      </div>
    </article>
  );
};
