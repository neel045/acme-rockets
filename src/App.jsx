import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
import CalenderComponent from "./components/CalenderComponent";

const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Rockets = lazy(() => import("./components/Rockets"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function App() {
  return (
    <>

     <div className="min-h-screen bg-slate-50 dark:bg-gray-800 dark:text-white">
    //   <Suspense fallback={<Loading />}>
    //     <Navbar />

    //     <main className="mx-auto max-w-4xl">
    //       <Hero />
    //       <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
    //       <Rockets />
    //       <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
    //       <Testimonials />
    //       <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
    //       <ContactUs />
    //     </main>
    //     <Footer />
    //   </Suspense>
     </div>
      {/* <CalenderComponent /> */}
    </>
  );
}

export default App;
