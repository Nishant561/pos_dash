import Button from "./components/Button";
import Card from "./components/Card";
import "./dashboard-page.scss";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="title-container">
        <div className="page-description">
          <p className="title">Dashboard</p>
          <p>Plan, Prioritze and Accomplish your task in time.</p>
        </div>
        <div className="button-container">
          <Button title="Add Task" />
          <Button title="View All" />
        </div>
      </div>

      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="analysis-container">
        <div className="analtyics-container">
          <p>project analytics</p>
        </div>
        <div className="remainder-container">
          <p>remainder</p>
        </div>
        <div className="project-container">
          <p>projects</p>
        </div>
      </div>

      <div className="team-collaboration-container">
        <div className="team-container">
          <p>team collaboration</p>
        </div>
        <div className="progress-container">
          <p>progress</p>
        </div>

        <div className="tracker-container">
          <p>tracker</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
