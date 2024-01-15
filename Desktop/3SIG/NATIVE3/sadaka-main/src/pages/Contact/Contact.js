import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);


  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      setSuccessMsg(
        `Thank you dear ${clientName}, Your messages has been received successfully. Futher details will sent to you by your email at ${email}.`
      );
    }
  };
  

  return (
    <div className="max-w-container mx-auto px-4 flex flex-wrap gap-8">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />
      {successMsg ? (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      ) : (
        <div className="flex-1">
        <form className="pb-20">
          <h1 className="font-titleFont font-semibold text-3xl">
            Remplir le formulaire
          </h1>
          <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Nom Complet
              </p>
              <input
                onChange={handleName}
                value={clientName}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="text"
                placeholder="Enter your name here"
              />
              {errClientName && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errClientName}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                type="email"
                placeholder="Enter your name here"
              />
              {errEmail && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errEmail}
                </p>
              )}
            </div>
            <div>
              <p className="text-base font-titleFont font-semibold px-2">
                Messages
              </p>
              <textarea
                onChange={handleMessages}
                value={messages}
                cols="30"
                rows="3"
                className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                type="text"
                placeholder="Enter your name here"
              ></textarea>
              {errMessages && (
                <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                  <span className="text-sm italic font-bold">!</span>
                  {errMessages}
                </p>
              )}
            </div>
            <button
              onClick={handlePost}
              className="w-44 bg-[#9D2143] text-white hover:bg-black h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
            >
              Poster
            </button>
          </div>
        </form>
        </div>
      )}
      <div className="flex-1">
  <div className="pb-10">
    <h1 className="max-w-[600px] text-base text-lightText mb-2 text-align-last">
      <span className="text-primeColor font-semibold text-lg">SADAKA</span>{" "}
      Il s'agit d'une initiative d'entreprenariat social qui vise à mettre à la disposition du grand public une plateforme mobile et web conviviale pour déclarer les dons, trouver des opportunités de dons, et ainsi contribuer à réduire le gaspillage tout en améliorant la vie des membres de la communauté.
    </h1><br/>
    <p className="max-w-sm mt-5 text-lightText mb-2 text-align-last">
    Vous avez quelque chose à dire ? 
    Nous sommes là pour vous aider. 
    Remplissez le formulaire ou envoyez un e-mail ou appelez le téléphone.
          </p>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-lightText mb-2 text-align-last">
              <MapPinIcon className="w-4 h-4" />
              <span>Km 7 Rte d'El Jadida, Casablanca</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-lightText mb-2 text-align-last">
              <EnvelopeIcon className="w-4 h-4" />
              <span>sadaka-don@gmail.com</span>
            </div>
            <div className="flex items-center mt-2 space-x-2 text-lightText mb-2 text-align-last">
              <PhoneIcon className="w-4 h-4" />
              <span>0500000000</span>
            </div><br/>
          </div>
    <Link to="/shop">
      <button className="w-52 h-10 bg-[#9D2143] text-white hover:bg-black duration-300">
        Voir les annonces
      </button>
    </Link>
  </div>
</div>


    </div>
  );
};

export default Contact;
