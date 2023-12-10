function Footer() {
  return (
    <footer className="bg-teal-700 text-xl text-white" id="footer">
      <section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
        <address>
          <h2>CodingWallah</h2>
          1246 B <br />
          Email:
          <a href="mailto:patelneel0445@gmail.com">patelneel0445@gmail.com</a>
          <br />
          Phone:
          <a href="tel:+919537303549">95373 03549</a>
        </address>
        <nav className="hidden flex-col gap-2 sm:flex" aria-label="footer">
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
        <div className="felx-flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2022</span>
          </p>
          <p className="text-right">All Rights reserved</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
