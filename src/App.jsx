import { useState } from "react";
import { useEffect } from "react";
import { Loading } from "./assets/components/Loading/Loading";
import { Tours } from "./assets/components/Tours/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [entryData, setEntryData] = useState(null);
  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (response.ok) {
          setEntryData(data);
          console.log(data);
        } else {
          console.log("An Error Occurred");
        }
      } catch (error) {
        console.log("An Error Occurred");
      }
    };
    fetchData();
  }, []);
  if (entryData == null) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="title">Our Tours</h1>
      <Tours data={entryData} dataSet={setEntryData} />
    </div>
  );
};
export default App;
