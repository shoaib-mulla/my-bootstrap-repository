import Button from "react-bootstrap/Button";
import React, { useEffect } from "react";
import { useState } from "react";
import useFetch from "../CustomHooks/useFetch";

function UseEffectDemo() {
  const [content, setContent] = useState("posts");
  const [fetchedData, setFetchedData] = useState();

  const customHookData = useFetch("https://jsonplaceholder.typicode.com/posts");
  console.log("customHookData: ", customHookData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/" + content)
      .then((response) => response.json())
      .then((json) => setFetchedData(json));
  }, []);

  return (
    <>
      <div
        style={{ marginTop: "80px" }}
        className="d-flex justify-content-center align-items-center gap-2"
      >
        <Button variant="primary" onClick={() => setContent("posts")}>
          posts
        </Button>
        <Button variant="secondary" onClick={() => setContent("comments")}>
          comments
        </Button>
        <Button variant="danger" onClick={() => setContent("albums")}>
          albums
        </Button>
        <Button variant="info" onClick={() => setContent("photos")}>
          photos
        </Button>
        <Button variant="comments" onClick={() => setContent("todos")}>
          todos
        </Button>
        <Button variant="comments" onClick={() => setContent("users")}>
          users
        </Button>
        <h1>{content}</h1>
      </div>
      <div>
        {content !== "photos" ? (
          <ul>
            {fetchedData &&
              fetchedData.map((item, index) => (
                <>
                  <li key={index}>{item.id}</li>
                  <li>{item.title}</li>
                </>
              ))}
          </ul>
        ) : (
          fetchedData &&
          fetchedData.map((item, index) => (
            <img key={index} alt={item.id} src={item.thumbnailUrl} />
          ))
        )}
      </div>
    </>
  );
}

export default UseEffectDemo;
