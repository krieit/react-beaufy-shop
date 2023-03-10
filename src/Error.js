import React from "react";
import "./Error.css";
const Error = () => {
  return (
    <div id="error-page">
      <div class="content">
        <h2 class="header" data-text="404">
          404
        </h2>
        <h4 data-text="Opps! Page not found">Opps! Page not found</h4>
        <p>
          Sorry, the page you're looking for doesn't exist. If you think
          something is broken, report a problem. Please visit
          https://reasonbeauty.com/
        </p>
        <div class="btns">
          <a href="/home">return home</a>
          <a href="/problem">report problem</a>
        </div>
      </div>
    </div>
  );
};

export default Error;
