import SideProfile from "./components/layout/SideProfile";
import Introduce from "./pages/Introduce";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <main className="w-full h-full bg-black  ">
        <div className="grid grid-cols-1 lg:grid-cols-4  container mx-auto px-8  ">
          <div className="lg:col-span-1 relative ">
            <div className=" lg:fixed top-0 md:left-9 lg:w-1/4   ">
              <SideProfile />
            </div>
          </div>
          <div
            id="kanan"
            className=" lg:col-span-3  grid grid-cols-1  relative py-8  h-full items-start md:pl-6 max-w-full  "
          >
            <Introduce></Introduce>
            <About></About>
            <Resume></Resume>
            <Skills></Skills>
            <Portofolio></Portofolio>
            <Contact></Contact>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
