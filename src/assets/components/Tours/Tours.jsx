import { Tour } from "../Tour/Tour";

export const Tours = ({ data, dataSet }) => {
  return (
    <section className="tours">
      {data.map((element, id) => {
        return <Tour data={element} key={id} setData={dataSet} allData={data} />;
      })}
    </section>
  );
};
