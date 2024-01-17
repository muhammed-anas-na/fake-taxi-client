import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-hero h-svh">
        <Header />
        <section className="relative flex items-center w-full">
          <div className="relative items-center w-full px-5 py-24 mx-auto max-w-7xl md:px-12">
            <div className="relative flex-col items-start align-middle">
              <div className="grid grid-cols-1 gap-6 lg:gap-24 lg:grid-cols-2">
                <div className="relative gap-12 m-auto lg:inline-flex">
                  <div className="max-w-xl text-center lg:text-left">
                    <div className="items-start">
                      <p className="text-3xl font-light md:text-6xl text-slate-900 text-left">
                        <span className="text-blue-950 font-bold">Easy</span>{" "}
                        and{" "}
                        <span className="text-blue-950 font-bold">Fast </span>
                        way to move
                      </p>
                      <p className="mt-4 text-lg tracking-tight text-slate-500 lg:text-xl text-left">
                        Organize your LinkedIn connections the way you want. No
                        ads, no distractions.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 mt-10 lg:flex-row">
                      <Link to={'/searchcab'}>
                      <button
                        className="bg-blue-500 rounded-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 focus:shadow-outline focus:outline-none"
                        aria-label="Sign up"
                        title="Sign up"
                      >
                        BOOK A CAB
                      </button>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-3 mt-12 lg:flex-row divide-slate-400 lg:divide-x-2">
                      <div>
                        <div className="flex items-center justify-center gap-3 lg:justify-start">
                          <div className="flex gap-1">
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                            <svg
                              className="w-4 h-4 text-yellow-400 icon icon-tabler fill-yellow-400 icon-tabler-star"
                              fill="currentColor"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 0h24v24H0z"
                                fill="none"
                                stroke="none"
                              ></path>
                              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                            </svg>
                          </div>
                          <span className="text-slate-500">
                            Chrome store rating
                          </span>
                        </div>
                      </div>
                      <div className="lg:pl-3">
                        <span>
                          <strong className="text-indigo-500">6000+</strong>
                          <span className="ml-3 text-slate-500">
                            Satisfied users
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block w-full mt-12 lg:mt-0">
                  <img
                    alt="hero"
                    className="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl"
                    src="/hero-image.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
