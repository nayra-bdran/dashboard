import { useEffect, useState, lazy, Suspense } from "react";
import usePageStore from "./zustand/usePageStore";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Customers from "./components/Customers";
import TasksTable from "./components/TasksTable";

const Dash = lazy(() => import("./components/Dash"));
const DealsTable = lazy(() => import("./components/DealsTable"));

function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const { setPageTitle } = usePageStore();

  useEffect(() => {
    const titleMap = {
      dashboard: "Dashboard",
      deals: "Deals",
      customers: "Customers",
      tasks: "Tasks",
    };
    setPageTitle(titleMap[activePage] || "Dashboard");
  }, [activePage, setPageTitle]);

  const renderPage = () => {
    switch (activePage) {
      case "customers":
        return <DealsTable />;
      case "deals":
        return <DealsTable />;
      case "tasks":
        return <TasksTable/>;
      case "dashboard":
      default:
        return <Dash />;
    }
  };

  return (
    <div className="bg-[#F6FAFDE5]">
      <Header />
      <div className="flex min-h-screen ">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-1">
          <Suspense fallback={<div className="p-6">Loading page...</div>}>
            {renderPage()}
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
