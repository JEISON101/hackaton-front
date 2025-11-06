import Cards from "../components/dashboard/Cards";
import Charts from "../components/dashboard/Charts";
import DataStock from "../components/dashboard/DataStock";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 text-black min-h-screen p-6">
      <div>
        <h1 className="text-2xl text-black font-bold mb-6">Dashboard</h1>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
        <Charts/>
      </div>
      <div>
        <DataStock/>
      </div>
    </div>
  );
};

export default Dashboard;
