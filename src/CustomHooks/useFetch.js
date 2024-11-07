import React, { useEffect, useState } from "react";

function useFetch(dataUrl) {
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(dataUrl)
      .then((response) => response.json())
      .then((json) => setdata(json));
  }, [dataUrl]);
  return [data];
}

export default useFetch;
