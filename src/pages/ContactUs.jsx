import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import contact from "../assets/images/contact.json";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import Navbar from "../components/Common/Navbar";
import axios from "axios";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loadinng, setLoading] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const maxLength = 300;
  const onSubmit = async (data) => {
    setLoading(true);
    // console.log(data);
    try {
      const email = data.email;
      const fullName = data.fullName;
      const phoneNumber = data.phoneNumber;
      const Message = data.Message;
      await axios.post(
        import.meta.env.VITE_BACKEND_URL || "http://localhost:3000/api/contact",
        { fullName, email, phoneNumber, Message }
      );
      reset();
      toast.success("Sent Successfully!");
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-bgGradient text-white font-Outfit flex flex-col min-h-screen h-full px-12 xl:flex-row justify-around items-center sm:px-32 py-24 xl:px-32 ">
        <Toaster position="top-right" reverseOrder={false} />
        {/* Top text box */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-4 sm:text-left xl:w-1/2">
          <span className="bg-buttonGradient rounded-2xl px-4 py-1  w-max md:text-xl">
            CONTACT US
          </span>
          <h1 className="font-NordMedium text-2xl sm:text-4xl md:text-5xl">
            let's get in touch.
          </h1>
          <span className="flex text-sm text-center flex-col sm:text-xl sm:text-left sm:gap-2 sm:flex-row md:text-2xl">
            Or just reach out manually to{" "}
            <span className="text-[#9654F4] underline">shaids@gmail.com</span>
          </span>
          <Lottie
            animationData={contact}
            className="hidden xl:block size-3/4"
            loop={true}
          />
        </div>
        {/* Form */}
        <div className="flex flex-col   w-full xl:w-1/3">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {/* Full Name Field */}
            <span className="flex flex-col gap-2">
              Full name
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 ${
                  errors.fullName ? "error" : ""
                }`}
              >
                <AccountCircleOutlinedIcon />
                <input
                  type="text"
                  className="bg-transparent outline-none w-full"
                  placeholder="Enter your full name..."
                  {...register("fullName", { required: true })}
                />
              </span>
              {errors.fullName && (
                <p role="alert" className="text-red-600">
                  Name is required!!!
                </p>
              )}
            </span>

            {/* Email Field */}
            <span className="flex flex-col gap-2 ">
              Email
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 ${
                  errors.email ? "error" : ""
                }`}
              >
                <EmailOutlinedIcon />
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="bg-transparent outline-none w-full"
                  {...register("email", { required: true })}
                />
              </span>
              {errors.email && (
                <p role="alert" className="text-red-600">
                  Email is required!!!
                </p>
              )}
            </span>

            {/* Phone Number Field */}
            <span className="flex flex-col gap-2">
              Phone Number
              <span
                className={`custom-input flex p-2 gap-2 md:py-3 ${
                  errors.phoneNumber ? "error" : ""
                }`}
              >
                <CallOutlinedIcon />
                <input
                  type="number"
                  placeholder="+91"
                  className="bg-transparent outline-none w-full appearance-none"
                  {...register("phoneNumber", {
                    required: true,
                    maxLength: 10,
                    minLength: 10,
                    pattern: /^[0-9]+$/,
                  })}
                />
              </span>
              {errors.phoneNumber?.type === "required" && (
                <p role="alert" className="text-red-600">
                  Phone Number is required!!!
                </p>
              )}
              {(errors.phoneNumber?.type === "minLength" ||
                errors.phoneNumber?.type === "maxLength") && (
                <p role="alert" className="text-red-600">
                  Phone Number must be 10 digits!!!
                </p>
              )}
            </span>

            {/* Message Field */}
            <span className="flex flex-col gap-2">
              Message
              <span
                className={`custom-input flex flex-col p-2 gap-2 md:py-3 ${
                  errors.Message ? "error" : ""
                }`}
              >
                <textarea
                  id="message"
                  rows="5"
                  maxLength={maxLength}
                  placeholder="Enter your message here..."
                  className="bg-transparent outline-none w-full resize-none"
                  {...register("Message", {
                    required: true,
                    maxLength: maxLength,
                  })}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                />
                {/* Dynamic Bottom Placeholder */}
                <span className="text-sm text-gray-400 self-end">
                  {messageLength}/{maxLength}
                </span>
              </span>
              {errors.Message && (
                <p role="alert" className="text-red-600">
                  Message is required!!!
                </p>
              )}
            </span>

            <input
              type="submit"
              className=" bg-buttonGradient w-max px-4 py-1 rounded-lg self-end"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
