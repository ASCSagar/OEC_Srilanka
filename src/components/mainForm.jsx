import { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
const initialState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  enquiry: "",
  message: "",
};
export const MainForm = (props) => {
  const [{ name, email, phone, city, enquiry, message }, setState] =
    useState(initialState);
  const [recaptcha, setRecaptcha] = useState(false);
  const captchaRef = useRef();
  const [isError, setIsError] = useState("");
  const [isResponse, setIsResponse] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  // const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    setIsResponse(true);
    e.preventDefault();
    console.log(name, email, phone, city, enquiry);
    if (
      name?.length < 1 ||
      email?.length < 1 ||
      phone?.length < 1 ||
      city?.length < 1 ||
      enquiry?.length < 1
    ) {
      e.preventDefault();
      setIsResponse(false);
      setIsError("Please fill the required field");
    } else if (!recaptcha) {
      setIsResponse(false);
      setIsError("You must confirm you are not a robot");
    } else {
      setIsError("");
      console.log(name, email, phone, city, enquiry, message);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("city", city);
      formData.append("enquiry", enquiry);
      formData.append("message", message);
      const requestOptions = {
        method: "POST",
        body: formData,
      };
      fetch("con.php", requestOptions)
        .then((res) => {
          console.log(res);

          if (!res.ok) {
            throw new Error("Some Problem Occured Please try again!");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          if (data.status === 1) {
            setIsError("");
            setState({ ...initialState });
            fetch(
              "https://script.google.com/macros/s/AKfycbxivp--rsMbpYEkwkleANN3BgnX_pAN3crUGW7e2Sa9dtCFnryt4hriPhDoRePDLNih/exec",
              { method: "POST", body: formData }
            ).then((res) => {
              window.location = "thankyou.php";
            });
          }
        })
        .catch((err) => {
          setIsResponse(false);
          setIsError(err);
        });
      return true;
    }
  };
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title text-center pb-20">
              <h3 className="title">Get Free Counseling</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="center">
            <div className="col-lg-12">
              <div
                className="contact-form form-style-one mt-35 wow fadeIn"
                data-wow-duration="1.5s"
                data-wow-delay="0.5s"
              >
                <form
                  id="my_captcha_form"
                  action="contact.php"
                  method="post"
                  name="google-sheet"
                  onSubmit={handleSubmit}
                >
                  <div className="form-input mt-15">
                    <label>Name</label>
                    <div className="input-items default">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={name}
                        required=""
                        onChange={handleChange}
                      />
                      <i className="fa fa-user"></i>
                    </div>
                  </div>
                  <div className="form-input mt-15">
                    <label>Email</label>
                    <div className="input-items default">
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        required=""
                        onChange={handleChange}
                      />
                      <i className="fa fa-envelope-o"></i>
                    </div>
                  </div>
                  <div className="form-input mt-15">
                    <label>Phone</label>
                    <div className="input-items default">
                      <input
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        name="phone"
                        required=""
                        onChange={handleChange}
                      />
                      <i className="fa fa-mobile"></i>
                    </div>
                  </div>
                  <div className="form-input mt-15">
                    <label>City</label>
                    <div className="input-items default">
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={city}
                        required=""
                        onChange={handleChange}
                      />
                      <i className="fa fa-map-marker"></i>
                    </div>
                  </div>
                  <div className="form-input mt-15">
                    <label>Enquiry For </label>
                    <div className="input-items default">
                      <select
                        name="enquiry"
                        value={enquiry}
                        className="enquiry"
                        onChange={handleChange}
                        required=""
                      >
                        <option value="">Select Enquiry For</option>
                        <option value="bachelors">Bachelors (UG)</option>
                        <option value="masters">Masters (PG)</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-input mt-15 mb-30">
                    <label>Message</label>
                    <div className="input-items default">
                      <textarea
                        placeholder="Please mention your Course and Year of Intake"
                        name="message"
                        value={message}
                        required=""
                        onChange={handleChange}
                      ></textarea>
                      <i className="fa fa-pencil-square-o"></i>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {isError?.length ? (
                      <p style={{ color: "red" }}>{isError}</p>
                    ) : (
                      " "
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-input mt-15 text-center">
                        <ReCAPTCHA
                          ref={captchaRef}
                          style={{ display: "inline-block" }}
                          sitekey="6LefzV4lAAAAAIDmo4O3v6iIV5yyt911bMdMAI4S"
                          onChange={(val) => {
                            if (val) setRecaptcha(true);
                            else setRecaptcha(false);
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-input rounded-buttons mt-20 text-center">
                        <button
                          type="submit"
                          className="main-btn rounded-three"
                          name="submit"
                          value="Submit"
                          disabled={isResponse}
                        >
                          {isResponse ? "Submitting" : "Submit"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
