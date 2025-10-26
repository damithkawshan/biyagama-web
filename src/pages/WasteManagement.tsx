import React from "react";

function WasteManagement(): JSX.Element {
  return (
    <div className="container" style={{ padding: "40px 0" }}>
      <h2>Waste Management Details (කසල කළමනාකරණය)</h2>
      <p>Biyagama Pradeshiya Sabha operates a comprehensive waste management system designed to keep our community clean and promote environmental sustainability. Our modern facility processes over 45 tons of waste daily through recycling, composting, and safe disposal methods.</p>
      <h3>Collection Schedule</h3>
      <ul>
        <li><strong>Organic Waste (දිරණ කසළ):</strong> Collected Monday, Wednesday, Friday (6:00 AM - 12:00 PM)</li>
        <li><strong>Recyclable Waste (නැවත භාවිතා කළ හැකි):</strong> Collected Tuesday, Thursday, Saturday (6:00 AM - 12:00 PM)</li>
        <li><strong>Special Waste Collection:</strong> First Sunday of every month for bulky items and e-waste</li>
      </ul>
      <h3>Waste Separation Guidelines</h3>
      <div className="services-grid">
        <div className="service-item">
          <h4 style={{ color: "#28a745" }}>Green Bin</h4>
          <p>Food waste, garden waste, paper, cardboard, leaves, branches (organic materials)</p>
        </div>
        <div className="service-item">
          <h4 style={{ color: "#007bff" }}>Blue Bin</h4>
          <p>Plastic bottles, glass, metal cans, clean packaging materials (recyclables)</p>
        </div>
        <div className="service-item">
          <h4 style={{ color: "#dc3545" }}>Red Bin</h4>
          <p>Medical waste, batteries, chemicals, hazardous materials (special handling required)</p>
        </div>
      </div>
      <h3>Composting Program</h3>
      <p>Free compost bins available for residents! Convert your kitchen and garden waste into nutrient-rich fertilizer. Register at our office or online to receive your complimentary composting kit with instructions.</p>
      <h3>Waste Management Team</h3>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chief Supervisor</td>
            <td>Mr. Nimal Fernando</td>
            <td>Ext. 245</td>
          </tr>
          <tr>
            <td>Zone 1 Coordinator</td>
            <td>Ms. Kamani Silva</td>
            <td>Ext. 246</td>
          </tr>
          <tr>
            <td>Zone 2 Coordinator</td>
            <td>Mr. Roshan Perera</td>
            <td>Ext. 247</td>
          </tr>
          <tr>
            <td>Recycling Manager</td>
            <td>Ms. Thisara Gunasekara</td>
            <td>Ext. 248</td>
          </tr>
        </tbody>
      </table>
      <h3>Report Issues</h3>
      <p>Missed collection? Illegal dumping? Report issues through:</p>
      <ul>
        <li>📱 Mobile App: "Biyagama Clean"</li>
        <li>📞 Hotline: 011-2411234 (24/7)</li>
        <li>✉️ Email: waste@biyagama.ps.lk</li>
        <li>💬 WhatsApp: 077-1234567</li>
      </ul>
    </div>
  );
}

export default WasteManagement;
