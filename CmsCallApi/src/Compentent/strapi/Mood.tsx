import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Mood() {
  // const { loading, error, data }: any = useFetch("http://localhost:1337/api/moods");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:1337/api/moods");
    const json = await res.json();
    setData(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1>mood from strapi</h1>
      {!loading ? (
        <div>
          <p>hey</p>
          {data.map((i: any) => (
            <div>
              <h3>{i.attributes.sad}</h3>
              <input type="checkbox" id="happy" name="happy" />
            </div>
          ))}
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}

export default Mood;
