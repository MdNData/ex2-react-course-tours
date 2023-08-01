import { useState } from "react";

export const Tour = ({ data, setData, allData }) => {
  const { id, image, info, name, price } = data;

  const [classExpand, setClassExpand] = useState("");
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

  const changeExtend = () => {
    if (classExpand == "") {
      setClassExpand("expand");
    } else {
      setClassExpand("");
    }
  };

  return (
    <article className="single-tour" id={id}>
      <p className="tour-price">${price}</p>
      <img className="img" src={image} alt="" />
      <div className="tour-info">
        <h5>{name}</h5>
        <p className={classExpand}>{info}</p>
        <button onClick={changeExtend} className="delete-btn">Read More</button>
        <br />
        <br />
        <button onClick={removeEntry} className="btn-block delete-btn btn">
          Not Interested
        </button>
      </div>
    </article>
  );
};
