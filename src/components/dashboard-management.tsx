import Navbar from "../pages/navbar";
import "./dashboard.scss";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />  
      {/* <h1 className="text-primary text-center py-3"> Wallet</h1> */}
      <div className="row gx-4 gy-4">
        <div className="col-md-4">
          <div className="card text-white bg-success h-100">
            <div className="card-body">
              <h5 className="card-title">Total Income</h5>
              <p className="card-text fs-4"></p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-danger h-100">
            <div className="card-body">
              <h5 className="card-title">Total Expenses</h5>
              <p className="card-text fs-4"></p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h5 className="card-title">Remaining Balance</h5>
              <p className="card-text fs-4"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
