import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

function ApiDataComp() {
  const [ApiData, setApiData] = useState();

  const handleApiData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await response.json();
    setApiData(data);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        {ApiData ? (
          <ul>
            {ApiData.map((item, index) => (
              <li key={index}>
                <strong>Title:</strong> {item.title}{" "}
                {/* Correctly embedding the value */}
              </li>
            ))}
          </ul>
        ) : (
          <p>No data available</p>
        )}
      </div>
      <Button variant="primary" onClick={handleApiData}>
        Get Data!
      </Button>
    </div>
  );
}

export default ApiDataComp;
