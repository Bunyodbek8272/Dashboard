import "./App.css";
// import "antd/dist/antd.css";
import { Space } from "antd";
import {} from "antd";
import AppHeader from "./components/appHeader";
import AppFooter from "./components/appFooter";
import PageContents from "./components/pageContents";
import SideMenu from "./components/sideMenu";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className="side__menu">
        <SideMenu></SideMenu>
        <PageContents></PageContents>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
