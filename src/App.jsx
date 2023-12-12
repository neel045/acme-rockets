import { Suspense, lazy } from "react";

const ContactUs = lazy(() => import("./components/ContactUs"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const Rockets = lazy(() => import("./components/Rockets"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800 dark:text-white">
      <Suspense
        fallback={
          <div className=" flex justify-center items-center container">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
            </div>
          </div>
        }
      >
        <Navbar />

        <main className="mx-auto max-w-4xl">
          <Hero />
          <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
          <Rockets />
          <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
          <Testimonials />
          <hr className="mx-auto w-1/2 bg-gray-800 dark:bg-white" />
          <ContactUs />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
