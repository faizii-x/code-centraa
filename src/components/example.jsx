
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "../../public/images/Logo.png";
import { Link, useLocation } from "react-router-dom";
// import Modal from "./modal";

export default function Example({ open, setOpen }) {
  //   const [hello, setHello] = useState(false);

  //   const openModal = () => {
  //     setHello(true);
  //   };

  //   const closeModal = () => {
  //     setHello(false);
  //   };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 " />
        </Transition.Child>
        <div className="">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-xs pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-1 right-2  flex">
                      <button
                        type="button"
                        className="rounded-md text-white hover:text-white focus:outline-none focus:ring-1 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex  h-full flex-col overflow-y-scroll bg-[#393A3B] z-50 py-6 shadow-xl">
                    <div className="container grid grid-cols-1 p-3">
                      <Link to="/">
                        <img src={Logo} />
                      </Link>
                      <Link to="/">
                        <p className="hover:text-hover  text-white pt-5">
                          Home
                        </p>
                      </Link>

                      <div className="relative group ">
                        <Link to="/services/">
                          <div
                            id="multiLevelDropdownButton"
                            className="flex justify-start gap-1"
                          >
                            <h2 className="hover:text-hover  text-white pt-5">
                              Services
                            </h2>
                            <svg
                              className="w-2.5 h-2.5 mt-7 text-white cursor-pointer"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </div>
                        </Link>
                        <div
                          id="multi-dropdown"
                          className="absolute w-[260px] hidden bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 group-hover:block"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="multiLevelDropdownButton"
                          >
                            <li>
                              <a
                                href="/cost-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Cost Estimating Services
                              </a>
                            </li>
                            <li className="relative group">
                              <Link to="/construction-takeoff-services/">
                                <button
                                  id="doubleDropdownButton"
                                  type="button"
                                  className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Construction Takeoff Services
                                  <svg
                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <div
                                id="doubleDropdown"
                                className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="doubleDropdownButton"
                                >
                                  <li>
                                    <a
                                      href="/material-takeoff-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Material Takeoff Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/quantity-takeoff-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Quantity Takeoff Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                href="/cpm-scheduling/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                CPM Scheduling
                              </a>
                            </li>

                            <li>
                              <a
                                href="/planning/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Planning
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* .................................... */}

                      <div className="relative group">
                        <Link to="/our-trades/">
                          <div
                            id="multiLevelDropdownButton"
                            className="flex justify-start gap-1"
                          >
                            <h2 className="hover:text-hover  text-white pt-5">
                              Our Trades
                            </h2>
                            <svg
                              className="w-2.5 h-2.5 mt-7 text-white cursor-pointer"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 10 6"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                              />
                            </svg>
                          </div>
                        </Link>
                        <div
                          id="multi-dropdown"
                          className="absolute w-[260px] hidden bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 group-hover:block"
                        >
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="multiLevelDropdownButton"
                          >
                            <li>
                              <a
                                href="/general-requirements/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                General Requirements
                              </a>
                            </li>
                            <li className="relative group">
                              <Link to="/sitework-estimating-services/">
                                <button
                                  id="doubleDropdownButton"
                                  type="button"
                                  className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Sitework Estimating Services
                                  <svg
                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <div
                                id="doubleDropdown"
                                className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="doubleDropdownButton"
                                >
                                  <li>
                                    <a
                                      href="/landscaping-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Landscaping Estimating Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a
                                href="/concrete-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Concrete Estimating Services
                              </a>
                            </li>
                            <li className="relative group">
                              <Link to="/metals-estimating-services/">
                                <button
                                  id="doubleDropdownButton"
                                  type="button"
                                  className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Metals Estimating Services
                                  <svg
                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <div
                                id="doubleDropdown"
                                className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="doubleDropdownButton"
                                >
                                  <li>
                                    <a
                                      href="/rebar-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Rebar Estimating Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a
                                href="/drywall-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Drywall Estimating Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/hvac-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                HVAC Estimating Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/lumber-takeoff-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Lumber Takeoff Services
                              </a>
                            </li>
                            <li className="relative group">
                              <Link to="/mep-estimating-services/">
                                <button
                                  id="doubleDropdownButton"
                                  type="button"
                                  className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  MEP Estimating Services
                                  <svg
                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <div
                                id="doubleDropdown"
                                className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="doubleDropdownButton"
                                >
                                  <li>
                                    <a
                                      href="/mechanical-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Mechanical Estimating Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/electrical-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Electrical Estimating Services
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="/plumbing-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Plumbing Estimating Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="relative group">
                              <Link to="/thermal-moisture-protection-estimating-services/">
                                <button
                                  id="doubleDropdownButton"
                                  type="button"
                                  className="flex show-div items-center justify-between w-full px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                >
                                  Thermal & Moisture Protection
                                  <svg
                                    className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </button>
                              </Link>
                              <div
                                id="doubleDropdown"
                                className="absolute left-full top-0 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-[230px] dark:bg-gray-700 group-hover:block"
                              >
                                <ul
                                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                  aria-labelledby="doubleDropdownButton"
                                >
                                  <li>
                                    <a
                                      href="/roofing-estimating-services/"
                                      className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                                    >
                                      Roofing Estimating Services
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>

                            <li>
                              <a
                                href="/interior-exterior-finishes/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Interior & Exterior Finishes
                              </a>
                            </li>
                            <li>
                              <a
                                href="/commercial-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Commercial Estimating Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/residential-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Residential Estimating Services
                              </a>
                            </li>
                            <li>
                              <a
                                href="/industrial-estimating-services/"
                                className="block px-4 py-2 hover:bg-customBlue-light hover:text-white"
                              >
                                Industrial Estimating Services
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* ............................................. */}

                      <Link to="/about-us/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          About Us
                        </p>
                      </Link>
                      <Link to="/payment/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Payment
                        </p>
                      </Link>

                      <Link to="/estimating-fee/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Estimation fee
                        </p>
                      </Link>
                      <Link to="/contact-us/">
                        <p className="hover:text-hover font-montserrat text-white pt-5">
                          Contact
                        </p>
                      </Link>

                      <button
                        //    onClick={openModal}
                        className="mt-[18px] w-[149px] h-[42px] bg-white hover:bg-[#15A7AD] font-inter text-[16px] text-black rounded-[15px]"
                      >
                        Quick Estimate
                      </button>
                    </div>
                  </div>
                  {/* {hello && <Modal closeModal={closeModal} />} */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
