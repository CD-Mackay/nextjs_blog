import ContactForm from "../components/contact/contactForm";
import { Fragment } from "react";
import Head from "next/head";


export default function Contact() {
  return (
    <Fragment>
      <Head>
        <meta name="description" content="this is where you send us messages" />
      </Head>
          <ContactForm /> 

    </Fragment>
  )
};