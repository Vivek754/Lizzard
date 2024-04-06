import React from "react";

function Contact() {
  return (
    <>
      <section className="flex bg-white/30 backdrop-blur-md p-10 justify-center gap-10 text-white">
        <aside className=" text-center basis-1/2 px-10">
          <h1 className="mb-5 text-[4rem]">Send Message</h1>
          <form className="grid gap-5" action="mailto:lizzard@gmail.com">
            <input
              type="text"
              className="py-2 px-5 outline-none text-lg bg-transparent border backdrop-blur-sm placeholder-white"
              placeholder="Full Name"
            />
            <input
              type="phone"
              className="py-2 px-5 outline-none text-lg bg-transparent border backdrop-blur-sm placeholder-white"
              placeholder="Mobile No."
            />
            <input
              type="email"
              className="py-2 px-5 outline-none text-lg bg-transparent border backdrop-blur-sm placeholder-white"
              placeholder="Email"
            />
            <textarea
              name=""
              id=""
              cols="50"
              rows="5"
              placeholder="Message here"
              className="p-5 text-lg resize-none outline-none bg-transparent border backdrop-blur-sm placeholder-white"
            />
            <button
              type="submit"
              className="py-4 outline-2 outline hover:bg-black hover:outline-offset-4 duration-150"
            >
              Send Message
            </button>
          </form>
        </aside>
        <aside className="text-center basis-1/2 px-10">
          <h1 className="text-[4rem]">Contact Us</h1>
          <div className="mt-5 flex justify-between">
          <button className="py-3 px-5 text-2xl rounded-2xl bg-[#25D366] backdrop-blur-md">
            Call us : +91-0123456789
          </button>
          <button className="w-64 bg-[#25D366] rounded-2xl">
            <img
              src="src\assets\WhatsAppButtonGreenLarge.png"
              className="w-full object-contain"
              alt="WhatsApp Button"
            />
          </button>
          </div>
          <span className="flex justify-center"><iframe className="rounded-xl my-5"
            src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1712381345471!5m2!1sen!2sin!6m8!1m7!1s6Aygi1vT0IlVgRkMD-TOLw!2m2!1d27.14292489948929!2d77.96466746677208!3f2.8633804449782954!4f1.2766656530784957!5f0.7820865974627469"
            width="600"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe></span>
          <p className="text-xl text-start">Address: Nagla Bhagat, Dhanauli, Jagner Road, Agra, Uttar Pradesh, India - 282001</p>
        </aside>
      </section>
    </>
  );
}

export default Contact;
