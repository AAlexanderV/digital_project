import "../styles/FeedbackForm.scss";
import ArrowSvg from "./ArrowSvg";
import contactUsImg from "../images/form/contact_us.png";
import { useState } from "react";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => setName(e.target.value);
  const phoneHandler = (e) => {
    const char = e.nativeEvent.data;
    if (
      Number.isInteger(Number(char)) ||
      char === "-" ||
      char === "(" ||
      char === ")" ||
      char === "+" ||
      char === "-"
    ) {
      setPhone(e.target.value);
    }
  };
  const emailHandler = (e) => setEmail(e.target.value);
  const servicesHandler = (e) => setServices(e.target.value);
  const messageHandler = (e) => setMessage(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log("Data from the client: ", formJson);
  }

  return (
    <form
      className="FeedbackForm"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="heading">
        <h1>Связаться с нами</h1>
      </div>

      <div className="main_form_container">
        <div className="inputs_container">
          {/* NAME */}
          <div className="input_box">
            <input
              id="name"
              value={name}
              name="name"
              type="text"
              placeholder=" "
              onChange={nameHandler}
            />
            <label htmlFor="name">Имя</label>
          </div>

          {/* PHONE */}
          <div className="input_box">
            <input
              id="phone"
              value={phone}
              name="phone"
              type="tel"
              minLength="10"
              placeholder=" "
              onChange={phoneHandler}
              required
            />
            <label
              htmlFor="phone"
              className="required"
            >
              Номер телефона
            </label>
          </div>

          {/* EMAIL */}
          <div className="input_box">
            <input
              id="email"
              value={email}
              name="email"
              type="email"
              placeholder=" "
              onChange={emailHandler}
              required
            />
            <label
              htmlFor="email"
              className="required"
            >
              E-mail
            </label>
          </div>

          {/* SERVICES */}
          <div className="input_box">
            <input
              id="services"
              value={services}
              name="services"
              type="text"
              placeholder=" "
              onChange={servicesHandler}
            />
            <label htmlFor="services">Интересующий товар/услуга</label>
          </div>

          {/* MESSAGE */}
          <div className={"input_box message" + (message && " filled")}>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={messageHandler}
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="required"
            >
              Сообщение
            </label>
          </div>
        </div>

        <div className="image_form">
          <img
            src={contactUsImg}
            alt="contact us"
          />
        </div>
      </div>

      <div className="policy_confirmation">
        <p>Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</p>
      </div>

      <div className="submit_button_container">
        <button type="submit">
          <span>ОТПРАВИТЬ</span> <ArrowSvg color="#fff" />
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
