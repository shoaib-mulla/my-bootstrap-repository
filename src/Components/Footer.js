import React from "react";

function Footer() {
  return (
    <>
      <footer className="d-flex flex-column position-fixed bottom-0 w-100 text-white">
        <div
          className="d-flex p-4 w-100 justify-content-center"
          style={{ backgroundColor: "#0a4275" }}
        >
          Footer
        </div>
        <div
          className="p-3 d-flex justify-content-center"
          style={{ backgroundColor: "#08355e" }}
        >
          Footer
        </div>
      </footer>
    </>
  );
}

export default Footer;
