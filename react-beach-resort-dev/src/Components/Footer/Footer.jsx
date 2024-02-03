import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span>  All Rights Copyright
        Reserved To{" "}
       <h1>mahidhar</h1>
      </p>
    </footer>
  );
}
