import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineLoading } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import supabase from "../utils/supabaseClient";
import { validate } from "email-validator";
import Head from "next/head";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailAlert, setEmailAlert] = useState("");
  const notifyEmailSuccess = () =>
    toast.success("Thank you for subscribing!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyEmailWarn = () =>
    toast.warn("Please enter a valid email!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const notifyEmailError = () =>
    toast.error(emailAlert, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const registerUser = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("contact.ishaanbedi.in")
      .insert([{ email: email }]);
    if (error) {
      setEmailAlert(error.message);
      notifyEmailError();
      setLoading(false);
    } else {
      notifyEmailSuccess();
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-xl font-bold text-[#151515] dark:text-[#E6E6E6]">
            Stay in the loop.
          </h2>

          <p className="text-[#151515] dark:text-[#E6E6E6]/70 sm:mt-4 lg:md:sm:text-lg text-sm">
            Get to know about my new posts and projects.
            <br />
            No spam, ever!
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="richard@piedpiper.com"
                className="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-gray-300 dark:border-gray-700 dark:bg-[#232323] dark:text-white"
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.preventDefault();
                  }
                }}
                value={email}
              />
            </div>
            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center rounded-sm bg-[#F05454] hover:bg-[#F05454]/90 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-gray-300 sm:mt-0 sm:w-auto"
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                if (email === "") {
                  notifyEmailWarn();
                  setLoading(false);
                } else if (!validate(email)) {
                  notifyEmailWarn();
                  setLoading(false);
                } else {
                  registerUser();
                }
              }}
            >
              <span className="text-xl font-medium">
                {loading ? (
                  <AiOutlineLoading className="animate-spin" />
                ) : (
                  <AiOutlineArrowRight />
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default SubscribeForm;
