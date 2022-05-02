import classes from "./contactForm.module.css";
import { useState, useEffect } from "react";
import Notification from "../ui/notification";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  async function sendContactData(contactDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contactDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Somethign went wrong");
    }
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContactData({
        message: enteredMessage,
        name: enteredName,
        email: enteredEmail,
      });
      setRequestStatus("success");
    } catch (error) {
      setRequestError(error.message);

      setRequestStatus("error");
    }
  }

  let notification;
  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "sending message",
      message: "Your message is being sent",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "success!",
      message: "message sent succesfuly!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "error",
      message: requestError,
    };
  };

  useEffect(() => {
    if (requestStatus === "pending" || requestStatus === "error") {
     const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000)

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  return (
    <section className={classes.contact}>
      <h1>How Can I Help you?</h1>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
