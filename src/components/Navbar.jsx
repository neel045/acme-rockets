import { useEffect } from "react";
import { useRef } from "react";

function Navbar() {
  const hamburgerBtn = useRef(null);
  const mobileMenu = useRef(null);

  const toggleMenu = () => {
    mobileMenu.current.classList.toggle("hidden");
    mobileMenu.current.classList.toggle("flex");
  };

  useEffect(() => {
    if (hamburgerBtn.current) {
      hamburgerBtn.current.addEventListener("click", toggleMenu);
    }
    if (mobileMenu.current) {
      mobileMenu.current.addEventListener("click", toggleMenu);
    }
  });
  return (
    <>
      <header className="sticky top-0 z-10 bg-teal-700 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-3">
          <h1 className="text-3xl font-medium">
            <a href="#hero"> 🚀 Acme Rockets</a>
          </h1>
          <div>
            <button
              className="cursor-pointer text-3xl md:hidden"
              id="hamburger-btn"
              ref={hamburgerBtn}
            >
              &#9776;
            </button>
            <nav
              className="hidden space-x-8 text-xl md:block"
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact Us
              </a>
            </nav>
          </div>
        </section>
        <section
          id="mobile-menu"
          className="absolute top-0 hidden w-full origin-top animate-open-menu flex-col justify-center bg-gray-800 text-4xl"
          ref={mobileMenu}
        >
          <button className="self-end px-6 text-8xl">&times;</button>
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <a
              href="#hero"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#rockets"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Our Rockets
            </a>
            <a
              href="#testimonials"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#footer"
              className="w-full py-6 text-center hover:opacity-90"
            >
              Legal
            </a>
          </nav>
        </section>
      </header>
    </>
  );
}

export default Navbar;
