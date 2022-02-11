import {
  useAllPrismicDocumentsByType,
  useFirstPrismicDocument,
  usePrismicDocumentByUID,
} from "@prismicio/react";
import { loadavg, type } from "os";
import React, { useEffect, useState } from "react";

function Person() {

  const [document, { state }] = useFirstPrismicDocument();
  const [testPerson] = useAllPrismicDocumentsByType('Person')

  //console.log(document);
  console.log(testPerson);
  

  return (
    <div>
      <div>
        <h1>People from Prismic</h1>
        {state === "loading" ? <p>Loading...</p> : document?.data.name}
      </div>
      {JSON.stringify(document?.data)}
    </div>
  );
}

export default Person;
