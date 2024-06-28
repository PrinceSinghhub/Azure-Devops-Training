import "./App.css";

function App() {
  return (
    <>
      <h1>Microsoft Azure Exam AZ-204 Certification</h1>
      <strong>
        This course, offered by @CloudConduction, is designed to improve my
        production-level skills and increase my knowledge of Azure services.
      </strong>
      <br />
      <br />
      <li>3. Developer Azure Compute Solutions - Azure App Service Web Apps</li>
      <li>4. Developer Azure Compute Solutions - Azure Functions</li>

      <br />
      {/* marke a card with 500px w h that full reaspocsive its conatins the img and its details  */}
      <div className="card" style={{ display: "flex", gap: "10px" }}>
        <div className="div">
          <img
            src="https://media.whizlabs.com/website/Microsoft-Azure-Exam-AZ-204-Certification.webp"
            alt="profile"
            className="profile"
            style={{ width: "500px", borderRadius: "5px" }}
          />
          <div className="details">
            <h2>Prince Singh</h2>
            <p>
              Junior Software Engineer <strong>@CloudConduction</strong>
            </p>
          </div>
        </div>

        <div style={{ width: "500px", height: "310px", borderRadius: "5px" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/oPSHs71mTVU?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "5px" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default App;
