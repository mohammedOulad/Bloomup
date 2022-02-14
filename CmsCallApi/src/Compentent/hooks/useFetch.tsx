import React, { useEffect, useState } from "react";

function useFetch(url:string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      setLoading(false);
    };
    getData();
  }, [url]);

  return <></>;
}

export default useFetch;
