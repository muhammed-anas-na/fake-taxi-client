import { Button } from "@material-tailwind/react";
import Header from "./Header"
import { Link } from "react-router-dom"

export default function Contactus() {
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
                      <form method="post" className="border p-4 md:p-16">
                        <div className="flex flex-col gap-3">
                            <input type="text" className="shadow-xl p-2 md:w-[50vh] lg:[w-70vh]" placeholder="Email" name="email"/>
                            <input type="text" className="shadow-xl p-2" placeholder="Message" name="message"/>
                            <Button variant="gradient" color="blue">Submit</Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="block w-full mt-12 lg:mt-0">
                  <img
                    alt="hero"
                    className="object-cover object-center w-full mx-auto drop-shadow-xl lg:ml-auto rounded-2xl hidden lg:block"
                    src="/hero-image.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
