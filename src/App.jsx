import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Rockets from "./components/Rockets";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-800 dark:text-white">
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
    </div>
  );
}

export default App;
