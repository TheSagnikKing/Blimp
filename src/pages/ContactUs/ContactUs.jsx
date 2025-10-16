import React, { useEffect, useState } from "react";
import style from "./ContactUs.module.css";
import {
  AddIcon,
  ClockIcon,
  CrossIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterXIcon,
} from "../../icons";
import api from "../../api/api";
import Skeleton from "@mui/material/Skeleton";
import toast from "react-hot-toast";
import { toastStyle } from "../../utils/toastStyles";
import { ClipLoader } from "react-spinners";

const ContactUs = () => {

  const [faqList, setFaqList] = useState({
    loading: false,
    error: null,
    data: {},
  });

  useEffect(() => {
    const fetchFaqList = async () => {
      setFaqList((prev) => ({ ...prev, loading: true, error: null }));
      try {
        const { data } = await api.post("/get-faq-list", { "language": "en" });
        if (data.code === 200) {
          setFaqList({ loading: false, error: null, data });
        } else if (data.code === 400) {
          setFaqList({ loading: false, error: data.message, data: {} });
        }
      } catch (error) {
        setFaqList({ loading: false, error: error.message, data: {} });
      }
    };

    fetchFaqList()

  }, [])

  const [selectedFaqItem, setSelectedFaqItem] = useState({
    question: "",
    answer: "",
    id: ""
  })

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [subject, setSubject] = useState("")
  const [description, setDescription] = useState("")

  const [sendMessageLoader, setSendMessageLoader] = useState(false)

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      const contactData = {
        first_name: firstname,
        last_name: lastname,
        email,
        phoneNumber: phonenumber,
        subject,
        description,
      };

      if (!firstname.trim()) return toast.error("Please enter your first name.", { duration: 3000, style: toastStyle });
      if (!lastname.trim()) return toast.error("Please enter your last name.", { duration: 3000, style: toastStyle });
      if (!email.trim()) return toast.error("Please enter your email address.", { duration: 3000, style: toastStyle });
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) return toast.error("Please enter a valid email address.", { duration: 3000, style: toastStyle });
      if (!phonenumber.trim()) return toast.error("Please enter your phone number.", { duration: 3000, style: toastStyle });
      const phoneRegex = /^[0-9]{7,15}$/;
      if (!phoneRegex.test(phonenumber)) return toast.error("Please enter a valid phone number (digits only).", { duration: 3000, style: toastStyle });
      if (!subject.trim()) return toast.error("Please enter a subject.", { duration: 3000, style: toastStyle });
      if (!description.trim() || description.trim().length < 10)
        return toast.error("Please enter a valid message (at least 10 characters).", { duration: 3000, style: toastStyle });

      setSendMessageLoader(true);

      const { data } = await api.post("/contact-us", contactData);

      if (data.code === 200) {
        toast.success("Message sent successfully", { duration: 3000, style: toastStyle });

        setFirstname("")
        setLastname("")
        setEmail("")
        setPhonenumber("")
        setSubject("")
        setDescription("")

      } else {
        toast.error("Error while sending", { duration: 3000, style: toastStyle });
      }

    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again.", { duration: 3000, style: toastStyle });
    } finally {
      // ✅ Always turn off loader, no matter what
      setSendMessageLoader(false);
    }
  };



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
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>

            <div className={style.inputContainerOne}>
              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>

            <div className={style.inputContainerTwo}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className={style.inputContainerTwotextArea}>
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id=""
                placeholder="Message"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <button onClick={sendMessage}>{sendMessageLoader ? <ClipLoader
              size={"1.8rem"}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : "Send Message"}</button>
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

            {
              faqList?.loading ? (
                [0, 1, 2, 3].map((item) => {
                  return (
                    <Skeleton
                      key={item}
                      variant="rectangular"
                      height={"8rem"}
                      sx={{
                        width: {
                          xs: "100%", // mobile
                          sm: "100%", // tablet
                          md: "100%",  // desktop
                        },
                        marginBottom: "2rem"
                      }}
                    />
                  )
                })
              ) : (
                faqList?.data?.data?.map((item) => (
                  <React.Fragment key={item.id}>
                    {selectedFaqItem.id === item.id ? (
                      <button
                        className={style.openFaqItem}
                        onClick={() => setSelectedFaqItem("")}
                      >
                        <div>
                          <h2>{selectedFaqItem?.question}</h2>
                          <p>{selectedFaqItem?.answer}</p>
                        </div>
                        <div><CrossIcon size={"1.8rem"} color="#fff" /></div>
                      </button>
                    ) : (
                      <button
                        className={style.closeFaqItem}
                        onClick={() =>
                          setSelectedFaqItem({
                            question: item?.question,
                            answer: item?.answer,
                            id: item?.id,
                          })
                        }
                      >
                        <h2>{item?.question}</h2>
                        <div><AddIcon size={"1.8rem"} /></div>
                      </button>
                    )}
                  </React.Fragment>
                ))
              )
            }



          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
