import React, { useState } from "react";
import styles from "./StartCampaign.module.css";
import { DownArrow } from "../../icons";

const StartCampaign = () => {
  const [stepper, setStepper] = useState([
    {
      id: 1,
      name: "Category",
    },
    {
      id: 2,
      name: "Country",
    },
    {
      id: 3,
      name: "Goal",
    },
    {
      id: 4,
      name: "Title",
    },
    {
      id: 5,
      name: "Image",
    },
    {
      id: 6,
      name: "You",
    },
    {
      id: 7,
      name: "Story",
    },
    {
      id: 8,
      name: "Payment",
    },
  ]);

  const [selectCountry, setSelectCountry] = useState(false);
  const [selectedStep, setSelectedStep] = useState(1);

  return (
    <section className={styles.startCampaignContainer}>
      <div>
        <div
          className={styles.mobileStepperCircle}
        >

          <div>
            <p>{selectedStep}</p>
          </div>
        </div>

        <div>
          <h2>
            {selectedStep === 1 && "What Cause area are you raising funds for?"}

            {selectedStep === 2 && "What country are you based in?"}

            {selectedStep === 3 && "How much are you aiming to raise?"}

            {selectedStep === 4 && "What would you like to name your campaign?"}

            {selectedStep === 5 &&
              "Select banner images to represent your campaign"}

            {selectedStep === 6 && "Tell us about yourself"}

            {selectedStep === 7 && "What’s the purpose of your fundraiser?"}

            {selectedStep === 8 &&
              "Congratulations! Your campaign has been successfully created."}
          </h2>
          <p>
            {selectedStep === 1 &&
              "Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a. Vitae et fusce purus consectetur."}

            {selectedStep === 2 &&
              "Donations can be received globally, but to accept them, you'll need a bank account and valid ID from one of the eligible countries."}

            {selectedStep === 3 &&
              "Your campaign goal will be set in the local currency of the country you select. You can update your target at any time."}

            {selectedStep === 4 &&
              "No worries—you can always change this later."}

            {selectedStep === 5 &&
              "No worries—you'll be able to upload more images and videos later. Just ensure your image is a .jpg or .png file and smaller than 5MB."}

            {selectedStep === 6 &&
              "Libero dictum ut purus ut vel sit egestas. Ut ac mattis senectus ac suspendisse vitae vel nulla eleifend. Est eros facilisi aenean nisl a. Vitae et fusce purus consectetur."}

            {selectedStep === 7 &&
              "Share the story behind your campaign. Include details like the background of the issue, who you are, what you're working on, and why it matters to you. Let donors know how the funds will be used.Aim for about 500 words (roughly 2,500 characters) for the most effective description. And don't worry—you can update it anytime."}

            {selectedStep === 8 &&
              "No worries if it's not perfect yet—you can keep editing it before you launch."}
          </p>
        </div>

        <div className={styles.largeStepperCircle}>
          {stepper.map((item, index) => {
            return (
              <div
                key={item.id}
                className={styles.stepperItem}
                style={{
                  width: stepper.length - 1 === index ? "6.2rem" : "14%",
                }}
              >
                <div>
                  {" "}
                  <div className={styles.circleWrapper}>
                    <button
                      onClick={() => {
                        setSelectedStep(item.id);
                      }}
                      className={styles.circle}
                      style={{
                        backgroundColor:
                          selectedStep === item.id ? "#8fd600" : "#0A84FF",
                      }}
                    >
                      <p>{item.id}</p>
                    </button>
                    <p className={styles.label}>{item.name}</p>
                  </div>
                  <div className={styles.line} />
                </div>
              </div>
            );
          })}
        </div>

        {selectedStep === 1 && (
          <div className={styles.stepperCategoryContainer}>
            <div>
              <div onClick={() => setSelectCountry((prev) => !prev)}>
                <input type="text" placeholder="Select Country" readOnly />
                <div>
                  <DownArrow />
                </div>
              </div>

              <button onClick={() => setSelectedStep(2)}>
                Save and Continue
              </button>

              {selectCountry && (
                <div className={styles.dropdownContainer}>dfbdfb</div>
              )}
            </div>

            <div>
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>
          </div>
        )}

        {selectedStep === 2 && (
          <div className={styles.stepperCountryContainer}>
            <div>
              <div onClick={() => setSelectCountry((prev) => !prev)}>
                <input type="text" placeholder="Select Country" readOnly />
                <div>
                  <DownArrow />
                </div>
              </div>

              <button onClick={() => setSelectedStep(3)}>
                Save and Continue
              </button>

              {selectCountry && (
                <div className={styles.dropdownContainer}>dfbdfb</div>
              )}
            </div>
          </div>
        )}

        {selectedStep === 3 && (
          <div className={styles.stepperGoalContainer}>
            <div>
              <div onClick={() => setSelectCountry((prev) => !prev)}>
                <input type="text" placeholder="$ 0.00" readOnly />
                <div>
                  <DownArrow />
                </div>
              </div>

              <button onClick={() => setSelectedStep(4)}>
                Save and Continue
              </button>

              {selectCountry && (
                <div className={styles.dropdownContainer}>dfbdfb</div>
              )}
            </div>
          </div>
        )}

        {selectedStep === 4 && (
          <div className={styles.stepperTitleContainer}>
            <div>
              <input type="text" placeholder="Name your campaign" value={""} />

              <button onClick={() => setSelectedStep(5)}>
                Save and Continue
              </button>

              {selectCountry && (
                <div className={styles.dropdownContainer}>dfbdfb</div>
              )}
            </div>
          </div>
        )}

        {selectedStep === 5 && (
          <div className={styles.stepperImageContainer}>
            <div>
              <div>
                <p>Drag or click to select file</p>
              </div>
              <p>
                ** Choose up to 5 Image (1200px X 560px is perfect, max image
                size 1MB, max total size 5MB).
              </p>
            </div>
            <div>
              <button>Upload file</button>
              <button onClick={() => setSelectedStep(6)}>
                Save and Continue
              </button>
            </div>
          </div>
        )}

        {selectedStep === 6 && (
          <div className={styles.stepperYouContainer}>
            <button>Not You ? Logout</button>

            <div>
              <div>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <input type="text" placeholder="Email" />

              <div>
                <div>
                  <input type="radio" />
                  <p>Individual</p>
                </div>

                <div>
                  <input type="radio" />
                  <p>Organization</p>
                </div>

                <div>
                  <button>Upload File</button>
                  <p>**Passport / National ID (for individuals)</p>
                  <p>**NGO/ONG Registration Certificate (for organizations)</p>
                </div>
              </div>
            </div>

            <button onClick={() => setSelectedStep(7)}>
              Save and Continue
            </button>
          </div>
        )}

        {selectedStep === 7 && (
          <div className={styles.stepperStoryContainer}>
            <input type="text" placeholder="Name of the concerned person" />

            <div>
              <div>
                <div>
                  <p>Heading</p>
                </div>
                <div>
                  <div>
                    <p>B</p>
                  </div>
                  <div>
                    <p>/</p>
                  </div>
                  <div>
                    <p>U</p>
                  </div>
                </div>
              </div>
              <div>
                <p>Type here {">"}</p>
              </div>
            </div>

            <div>
              <p>Upload Supporting Documents</p>

              <div>
                <div>
                  <p>Drag or click to select file</p>
                </div>
                <button>Upload Document</button>
              </div>

              <p>
                ** Choose up to 5 Image (512px X 512px is perfect, max image
                size 1MB, max total size 5MB).
              </p>
            </div>

            <button onClick={() => setSelectedStep(8)}>
              Save and Continue
            </button>
          </div>
        )}

        {selectedStep === 8 && (
          <div className={styles.stepperPaymentContainer}>
            <button>Setup Payment</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default StartCampaign;
