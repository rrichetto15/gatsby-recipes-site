import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, sint ducimus consequuntur laborum tempore labore!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
              cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              cum dolores totam iste enim animi.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block" type="submit">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
