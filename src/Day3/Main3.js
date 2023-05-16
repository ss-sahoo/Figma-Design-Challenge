import React,{useRef} from 'react';
import emailjs from "@emailjs/browser";
import './Main3.css'

function Main3() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5h9rnvs",
        "template_3jtolyk",
        form.current,
        "-loHT-CoLKTXi4R2g"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  return (
    <div className="container">
      <div className="man">
        <div className="contain">
          <h5>HOW TO</h5>
          <p>
            Learn smart gadget and internet tips and tricks with our
            entertaining and ingenious how-tos.
          </p>
          <div className="input_mail">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="email"
                placeholder="Enter your email address"
                name="create_website"
              />
              <button>Sign me up!</button>
            </form>
          </div>
          <h6>
            By signing up, you agree to our Terms of Use and acknowledge the
            data practices in our <a href="#">Privacy Policy</a>. You may
            unsubscribe at any time.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Main3
