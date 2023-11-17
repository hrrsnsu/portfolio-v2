import AboutUs from "./components/molecules/AboutUs/AboutUs";
import ScrollView from "./components/molecules/ScrollView/ScrollView";
import "./globals.css";

export default function Home() {
  return (
    <div className="PageContainer">
      <div className="PageContent">
        <AboutUs />
        <ScrollView />
      </div>
    </div>
  );
}
