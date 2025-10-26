import React from "react";

function SecretaryMessage(): JSX.Element {
  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h2>Secretary's Message (ලේකම්තුමාගේ පණිවුඩය)</h2>
      <div className="secretary-grid">
        <img src="https://via.placeholder.com/200x250/004080/ffffff?text=Secretary" alt="Secretary" className="secretary-photo" />
        <img src="/content/images/person-placeholder.svg" alt="Secretary" className="secretary-photo" />
        <div className="secretary-message">
          <p className="quote">"Dear Residents and Stakeholders,</p>
          <p>It is my privilege to serve as the Secretary of Biyagama Pradeshiya Sabha. Our organization is committed to transforming Biyagama into a model local authority that balances rapid development with environmental sustainability and social equity.</p>
          <p>Over the past year, we have achieved significant milestones: digitizing our services, improving infrastructure, enhancing waste management, and strengthening community engagement. These achievements are the result of dedicated teamwork between our council members, staff, and most importantly, our residents.</p>
          <p>As we move forward, we are focused on implementing smart city solutions, expanding green spaces, supporting local businesses, and ensuring that every resident has access to quality services. Your feedback and participation are crucial to our success.</p>
          <p>I encourage you to utilize our online services, attend public consultations, and reach out to us with your ideas and concerns. Together, we will build a Biyagama that we can all be proud of.</p>
          <p className="signature">Ms. Dilini Jayawardena<br />Secretary<br />Biyagama Pradeshiya Sabha</p>
        </div>
      </div>
    </div>
  );
}

export default SecretaryMessage;
