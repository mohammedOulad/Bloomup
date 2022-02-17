import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

interface useeffectProps {
  data: any[],
  loading: boolean
}

function Person() {
  // const { data , loading} : useeffectProps = useFetch("http://localhost:1337/api/people");

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:1337/api/people");
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
      <h1 style={{ textAlign:"center"}}>Strapi cms</h1>
      <h1>people from strapi</h1>
      {!loading ? (
        <div>
          {data.map((i: any) => (
            <div key= {i.id}>
              <h3>name: {i.attributes.Name}</h3>
              <h3>age: {i.attributes.Age}</h3>
            </div>
          ))}
        </div>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}

export default Person;
