function ContactUs() {
  return (
    <section id="contact" className="my-12 scroll-m-20 p-6">
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Contact Us
      </h2>
      <form className="mx-auto flex max-w-4xl flex-col items-start gap-4 text-2xl sm:text-3xl">
        <label htmlFor="subject">Subject: </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          minLength="3"
          maxLength="64"
          placeholder="subject..."
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black focus:outline-none dark:border-none sm:text-3xl"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message..."
          required
          className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black focus:outline-none dark:border-none sm:text-3xl"
        ></textarea>

        <button className="activ:bg-teal-500 w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 dark:border-none">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactUs;
