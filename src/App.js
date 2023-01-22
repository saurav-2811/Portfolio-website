import "./assets/css/App.css";
import MainContainer from "./component/MainContainer";
import TopNavbar from "./component/TopNavbar";

function App() {
  return (
    <div
      className="container-fluid p-0 bg-black"
      style={{ height: "100vh", overflowY: "hidden" }}
    >
      <TopNavbar />
     <MainContainer/>
    </div>
  );
}

export default App;
