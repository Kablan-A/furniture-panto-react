import "./css/sections.css";
import Header from "./components/Header";
import Reasons from "./components/Reasons";
import ProductPage from "./components/ProductPage";
import SectionExperience from "./components/SectionExperience";
import SectionMaterials from "./components/SectionMaterials";
import ReviewPage from "./components/ReviewPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Reasons />
      <ProductPage />
      <SectionExperience />
      <SectionMaterials />
      <ReviewPage />
      <Footer />
    </div>
  );
}

export default App;
