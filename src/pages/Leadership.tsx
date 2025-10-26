import React from "react";

function Leadership(): JSX.Element {
  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h2>Current Leadership (වත්මන් නායකත්වය)</h2>
      <div className="leadership">
        <div className="leader-card">
          <img src="/content/PS/chairman.png" alt="Chairman" />
          <h3>Mr. Lal Kumarapeli</h3>
          <p>Chairman<br />Leading the council with dedication to community welfare and sustainable development.</p>
        </div>
        <div className="leader-card">
          <img src="/content/PS/main.png" alt="Secretary" />
          <h3>Ms. Dilini Jayawardena</h3>
          <p>Secretary<br />Overseeing administrative operations and ensuring efficient service delivery to residents.</p>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
