
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-layout">
      <SideBar />

      <div className="main-layout">
        <Header />

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
