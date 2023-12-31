import rocketlaunch from "../assets/rocketlaunch.png";
import rocketride from "../assets/rocketride.png";
import rocketman from "../assets/rocketman.png";

function Rockets() {
  return (
    <section
      id="rockets"
      className="tallscreen:section-min-height widescreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-gray-800 sm:w-5/6">
          <img
            loading="lazy"
            src={rocketman}
            alt=""
            className="w-1/2 sm:w-5/6"
          />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Explorer
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Affordable Exploration
          </p>
        </li>
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-gray-800 sm:w-5/6">
          <img
            loading="lazy"
            src={rocketride}
            alt=""
            className="w-1/2 sm:w-5/6"
          />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Adventurer
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Best Selling Rocker!
          </p>
        </li>
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-gray-800 sm:w-5/6">
          <img
            loading="lazy"
            src={rocketlaunch}
            alt=""
            className="w-1/2 sm:w-5/6"
          />
          <h3 className="text-center text-3xl text-slate-900 dark:text-white">
            Infinity
          </h3>
          <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$$
          </p>
          <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Rockets;
