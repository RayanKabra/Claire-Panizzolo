import React from "react";
import { useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMinus } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const Cta = ({ styles }) => {
  const form = useRef();

  //Input fields validations
  const [enteredFirstname, setEnteredFirstname] = useState("");
  const [enteredFirstnameIsValid, setEnteredFirstnameIsValid] = useState(false);
  const [enteredFirstnameTouched, setEnteredFirstnameTouched] = useState(false);

  const firstnameInputIsInvalid =
    !enteredFirstnameIsValid && enteredFirstnameTouched;

  const [enteredLastname, setEnteredLastname] = useState("");
  const [enteredLastnameIsValid, setEnteredLastnameIsValid] = useState(false);
  const [enteredLastnameTouched, setEnteredLastnameTouched] = useState(false);

  const lastnameInputIsInvalid =
    !enteredLastnameIsValid && enteredLastnameTouched;

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  //Email format validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  };
  // const validateEmail = (email) => {
  //   const regex =
  //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return regex.test(String(email).toLowerCase());
  // };

  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredMessageIsValid, setEnteredMessageIsValid] = useState(false);
  const [enteredMessageTouched, setEnteredMessageTouched] = useState(false);

  const messageInputIsInvalid = !enteredMessageIsValid && enteredMessageTouched;

  // Handlers
  const changeFirstnameHandler = (e) => {
    setEnteredFirstname(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnteredFirstnameIsValid(true);
    }
  };

  const firstnameInputBlurHandler = () => {
    setEnteredFirstnameTouched(true);

    if (enteredFirstname.trim() === "") {
      setEnteredFirstnameIsValid(false);
      return;
    } else {
      setEnteredFirstnameIsValid(true);
    }
  };
  const changeLastnameHandler = (e) => {
    setEnteredLastname(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnteredLastnameIsValid(true);
    }
  };

  const lastnameInputBlurHandler = () => {
    setEnteredLastnameTouched(true);

    if (enteredLastname.trim() === "") {
      setEnteredLastnameIsValid(false);
      return;
    } else {
      setEnteredLastnameIsValid(true);
    }
  };

  const changeEmailHandler = (e) => {
    setEnteredEmail(e.target.value);

    if (validateEmail(e.target.value.trim() !== "")) {
      setEnteredEmailIsValid(true);
    }
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true);

    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    } else {
      setEnteredEmailIsValid(true);
    }
  };

  const changeMessageHandler = (e) => {
    setEnteredMessage(e.target.value);

    if (e.target.value.trim() !== "") {
      setEnteredMessageIsValid(true);
    }
  };

  const messageInputBlurHandler = () => {
    setEnteredMessageTouched(true);

    if (enteredMessage.trim() === "") {
      setEnteredMessageIsValid(false);
      return;
    } else {
      setEnteredMessageIsValid(true);
    }
  };

  //Sending email function
  const sendEmail = (e) => {
    e.preventDefault();

    setEnteredFirstnameTouched(true);
    setEnteredLastnameTouched(true);
    setEnteredEmailTouched(true);
    setEnteredMessageTouched(true);

    if (enteredFirstname.trim() === "") {
      setEnteredFirstnameIsValid(false);
      return;
    }
    if (enteredLastname.trim() === "") {
      setEnteredLastnameIsValid(false);
      return;
    }
    if (enteredEmail.trim().length === "") {
      setEnteredEmailIsValid(false);
      return;
    }
    if (enteredMessage.trim() === "") {
      setEnteredMessageIsValid(false);
      return;
    }

    emailjs
      .sendForm(
        "service_2mcl77w", //enlever les tags de commentaires autour du 'w' pour réactiver le service de messagerie
        "template_1e0ahks",
        form.current,
        "6fMdef0jkbkZUIGHK"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Message envoyé !");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Erreur d'envoi");
        }
      );
    setEnteredFirstname("");
    setEnteredLastname("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  return (
    <div className="CTA-container" style={styles}>
      <div className="CTA-title">
        <h2>Un renseignement,</h2>
        <h2>un devis ?</h2>
      </div>
      <div className="CTA-bg">
        {/* <div className="CTA-horizontal-line">
          <FontAwesomeIcon icon={faMinus} />
        </div> */}

        <form ref={form} onSubmit={sendEmail}>
          <div className="input-box">
            <div className="input-field field">
              <input
                type="text"
                placeholder="Prénom"
                id="firstname"
                className="item"
                autoComplete="off"
                value={enteredFirstname}
                name="user_firstname"
                onChange={changeFirstnameHandler}
                onBlur={firstnameInputBlurHandler}
              />
              {firstnameInputIsInvalid && (
                <div className="error-text">Champ Obligatoire</div>
              )}
            </div>
            <div className="input-field field">
              <input
                type="text"
                placeholder="Nom"
                id="lastname"
                className="item"
                autoComplete="off"
                name="user_lastname"
                value={enteredLastname}
                onChange={changeLastnameHandler}
                onBlur={lastnameInputBlurHandler}
              />
              {lastnameInputIsInvalid && (
                <div className="error-text">Champ Obligatoire</div>
              )}
            </div>
          </div>

          <div className="input-box">
            <div className="input-field field">
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="item"
                autoComplete="off"
                value={enteredEmail}
                name="email"
                onChange={changeEmailHandler}
                onBlur={emailInputBlurHandler}
              />
              {emailInputIsInvalid && (
                <div className="error-text">Champ Obligatoire</div>
              )}
            </div>
            <div className="input-field field">
              <input
                type="text"
                placeholder="Numéro de téléphone"
                id="phone"
                className="item"
                autoComplete="off"
                name="user_number"
              />
            </div>
          </div>

          <div className="textarea-field field">
            <textarea
              name="message"
              value={enteredMessage}
              id="message"
              cols="30"
              rows="10"
              placeholder="Votre message"
              className="item"
              autoComplete="off"
              onChange={changeMessageHandler}
              onBlur={messageInputBlurHandler}
            ></textarea>
            {messageInputIsInvalid && (
              <div className="error-text">Champ Obligatoire</div>
            )}
          </div>

          <button type="submit" value="Send">
            Envoyer
          </button>
          <Toaster position="top-right" />
        </form>
      </div>
    </div>
  );
};

export default Cta;
