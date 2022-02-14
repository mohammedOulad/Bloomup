import React, { useState, useEffect } from 'react';
import { client } from '../../Client';

function Person() {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      setLoading(true)
      client.getEntries()
        .then((res:any) => {
          console.log(res);
          setData(res.items)
        })
        .catch(console.error)
      console.log("dees is met response.items", data);
      setLoading(false)
    }, [])
    console.log("dees is met response.items", data);
  
    return (
      <div className="App">
        {!loading ?
          data.map((i, index) =>
            <div key={index}>
              <h1>
                name: {i.fields.name}
              </h1>
              <h1>
                age: {i.fields.age}
              </h1>
            </div>
          )
          : <h1>Loading...</h1>}
      </div>
    );
}

export default Person