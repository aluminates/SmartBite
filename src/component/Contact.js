import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tj91l9w",
        "template_p2e7qk8",
        form.current,
        "B3BibiKdnE25z77QR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("Thank you for contacting us! We will reach out shortly.");
  };

  return (
    <section id="contact" className="md:mt-10 lg:my-8 lg:mx-10 about-scroll">
      <h5 className="text-2xl font-bold text-slate-400 mx-auto w-fit"> Contact Us for Issues! </h5>
 
      <div className="flex lg:mx-[20%] my-5 md:my-8 gap-7 justify-between flex-col md:flex-row">

        <div className="flex flex-col gap-2 w-full md:w-fit">

          <article className="bg-green-100 border-2 border-green-400 hover:shadow-md flex flex-col items-center w-full md:w-64 p-7 lg:p-5 text-lg rounded-md">
            <MdOutlineEmail className="contact__option-icon" />
            <h4 className="font-bold">Email</h4>
            <h5 className="font-medium text-base">contact@smartbite.com</h5>
            <a href="mailto:contact@smartbite.com" target="_blank" className="text-sm hover:text-green-700 font-medium">
              Contact us for support.
            </a>
          </article>

          <article className="bg-green-100 border-2 border-green-400 hover:shadow-md flex flex-col items-center w-full md:w-64 p-5 py-10 lg:py-8 rounded-md text-lg">
            <BsWhatsapp className="contact__option-icon" />
            <h4 className="font-bold">WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=8869847890"
              target="_blank"
              className="text-sm hover:text-green-700 font-medium"
            >
              Send us a message if you're facing any issues!
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex gap-2 flex-col w-full">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name here."
            required
            className="border-green-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none"
          />
          <input type="text" name="email" placeholder="Your Email" required className="border-green-400 border-2 p-3 rounded-md focus:outline-none hover:shadow-md"/>
          <textarea
            className="p-3 border-green-400 border-2 rounded-md focus:outline-none hover:shadow-md"
            name="message"
            rows="6"
            placeholder="Enter your issue here."
            required

          ></textarea>
          <button type="submit" className="p-3 rounded-md font-medium hover:shadow-md hover:font-bold  bg-green-200 border-2 border-green-400">
            Report Issue
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
