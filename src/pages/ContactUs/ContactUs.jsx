import React from "react";
import style from "./ContactUs.module.css";
import {
  ClockIcon,
  CrossIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterXIcon,
} from "../../icons";

const ContactUs = () => {
  const charityItem = [
    {
      title: "Is there a minimum/maximum amount I can donate?",
    },
    {
      title: "Can I give to more than one charity?",
    },
    {
      title: "When will my charity receive my donation?",
    },
    {
      title: "Will my chosen charity receive all my donation?",
    },
  ];

  return (
    <main className={style.contactUsContainer}>

      <section className={style.reachOutContainer}>
        <div>
          <div>
            <div>
              <h2>Share love, donate hope.</h2>
              <p>
                Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est
                eros facilisi aenean ni
              </p>
            </div>

            <div>
              <div>
                <div>
                  <PhoneIcon />
                </div>
                <p>+ 863-267-3634</p>
              </div>

              <div>
                <div>
                  <EmailIcon />
                </div>
                <p>blimp@email.net</p>
              </div>

              <div>
                <div>
                  <ClockIcon />
                </div>
                <p>Mon-Fri: 8:00am - 6:00pm</p>
              </div>
            </div>

            <div>
              <div>
                <FacebookIcon />
              </div>
              <div>
                <TwitterXIcon />
              </div>
              <div>
                <InstagramIcon />
              </div>
            </div>
          </div>

          <form>
            <h2>Reach out to us !</h2>
            <div className={style.inputContainerOne}>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input type="text" placeholder="First Name" />
              </div>

              <div>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <div className={style.inputContainerOne}>
              <div>
                <label htmlFor="email">Email Address</label>
                <input type="text" placeholder="Email Address" />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
            </div>

            <div className={style.inputContainerTwo}>
              <label htmlFor="subject">Subject</label>
              <input type="text" placeholder="Subject" />
            </div>

            <div className={style.inputContainerTwotextArea}>
              <label htmlFor="message">Message</label>
              <textarea name="" id="" value="" placeholder="Message" />
            </div>

            <button>send message</button>
          </form>
        </div>
      </section>

      <section className={style.contactBannerImage}>
        <div>
          <img
            src="https://www.palestinechronicle.com/wp-content/uploads/2023/06/IMG_3503-scaled.jpg"
            alt=""
          />
        </div>
      </section>

      <section className={style.questionContainer}>
        <div>
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>Connect with the forum:</p>
            <input type="text" placeholder="Ask away..." />
          </div>

          <div>
            <div>
              <div>
                <h2>What charities can I give to?</h2>
                <p>
                  Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique.
                  Sit congue non vitae odio sit erat in. Felis eu ultrices a sed
                  massa. Commodo fringilla sed tempor risus laoreet ultricies ip
                </p>
              </div>
              <button>
                <span>
                  <CrossIcon />
                </span>
              </button>
            </div>

            {charityItem.map((item, index) => {
              return (
                <div key={index} className={style.charityItem}>
                  <h2>{item.title}</h2>
                  <button>+</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
