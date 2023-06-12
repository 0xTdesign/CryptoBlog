import React from "react";
import "./Footer.css";
import ViewCounter from "../PageCount/page";

export default function Footer() {
  return (
    <footer>
      <ViewCounter />
      <h3>&copy; My Blog </h3>
    </footer>
  );
}
