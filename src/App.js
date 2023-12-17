import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import IndexingServices from "./components/IndexingServices";
import Contact from "./components/Contact";
// import Education from "./components/Education";
// import ProfessionalMemberships from "./components/ProfessionalMemberships";
import SelectedClients from "./components/SelectedClients";
import EditingServices from "./components/EditingServices";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <IndexingServices />
      <EditingServices />
      {/* <Education /> */}
      {/* <ProfessionalMemberships /> */}
      <SelectedClients />
      <Testimonials />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
