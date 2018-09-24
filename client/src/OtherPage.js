import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      Im in the other page!
      <Link to="/">Go back home!</Link>
    </div>
  );
};
