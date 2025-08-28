import React from "react";
import style from "./CheckOutPage.module.css";
import {
  CreditCardIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  WhatsappIcon,
} from "../../icons";

const CheckOutPage = () => {
  return (
    <main>
      <section className={style.checkoutSectionContainer}>
        <h2>Reduce Homelessness</h2>

        <div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdnu3tuqGZxqxqvmLhwEEPSCTrXCJOW0J4Q&s"
              alt=""
            />

            <div className={style.donationContainer}>
              <p>
                Published by: <b>Arghya Ghosh</b>
              </p>

              <div>
                <div>
                  <p>$180,050 USD raised</p>
                  <p>$200K goal - 3.9K donations</p>
                </div>

                <div className={style.circularProgressbar}>
                  <div>
                    <p>100%</p>
                  </div>
                </div>
              </div>

              <div className={style.linkContainer}>
                <div>
                  <button>
                    <InstagramIcon />
                  </button>
                  <button>
                    <FacebookIcon />
                  </button>
                  <button>
                    <TwitterXIcon />
                  </button>
                  <button>
                    <WhatsappIcon />
                  </button>
                </div>
              </div>
            </div>

            <div action="" className={style.donationForm}>
              <div>
                <h2>Donation amount</h2>
                <div>
                  <div>
                    <p>$ 10</p>
                  </div>
                  <div>
                    <p>$ 25</p>
                  </div>
                  <div>
                    <p>$ 50</p>
                  </div>
                  <div>
                    <p>$ 100</p>
                  </div>
                  <div>
                    <p>$ 500</p>
                  </div>
                </div>

                <div>
                  <p>$</p>
                </div>
              </div>

              <div>
                <div>
                  <p>Paid by Donor:</p>
                  <p>$ 200</p>
                </div>

                <div>
                  <p>Payment processing fees:</p>
                  <p>$ 4.29</p>
                </div>

                <div>
                  <p>Blimp.com platform fee:(4.9%)</p>
                  <p>$ 9.80</p>
                </div>

                <div>
                  <p>Campaign receives:</p>
                  <p>$ 185.91</p>
                </div>
              </div>

              <div>
                <h2>Select Payment Method</h2>

                <div>
                  <div>
                    <input type="radio" />
                    <p>Credit Card</p>
                  </div>

                  <div>
                    <input type="radio" />
                    <p>UPI</p>
                  </div>
                </div>

                <div>
                  <p>Credit Card Number</p>
                  <div>
                    <span>
                      <CreditCardIcon />
                    </span>
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className={style.personalFormContainer}>
                <h2>Personal Information</h2>

                <div>
                  <div>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>

                  <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input type="text" placeholder="email" />
                </div>

                <div>
                  <h2>
                    Donation Total: <span>$200</span>
                  </h2>
                  <button>Donate now</button>
                </div>
              </div>
            </div>

            <div className={style.liveContainer}>
              <h2>*Brief real time update about the cause*</h2>
              <p>
                Urna velit pharetra pellentesque magna eget. Ut egestas est id
                netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
                Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
                ornare sit aliquam elementum blandit. Leo in sem pellentesque
                viverra malesuada viverra eget aliquam.
              </p>

              <p>Live</p>

              <img
                src="https://redclaycreative.com/wp-content/uploads/blurry-image-scaled.jpg"
                alt=""
              />

              <p>
                Vivamus a dignissim nulla ornare sit aliquam elementum blandit.
                Leo in sem pellentesque viverra malesuada viverra eget aliquam:
              </p>

              <ul>
                <li>
                  <b>Nunc tortor et a ornare et placerat.</b> Tellus in
                  ultricies risus accumsan turpis id nam. Maecenas proin sodales
                  diam vel mauris facilisis arcu semper. Mi accumsan gravida
                  dignissim turpis sollicitudin. At auctor sed facilisi massa
                  amet. Est morbi aliquam sed orci.
                </li>

                <li>
                  <b>
                    Pulvinar aliquam sed egestas tempus aliquet sollicitudin.
                  </b>{" "}
                  Lectus et rhoncus venenatis interdum lectus nam. Amet
                  curabitur cursus pulvinar nisl id morbi adipiscing. Nunc eget
                  arcu enim ac pellentesque integer bibendum augue. Ut amet
                  tortor auctor hendrerit. Massa at amet nisl mauris vulputate.
                </li>

                <li>
                  <b>Accumsan quis vel habitasse arcu nisi sed.</b> Pharetra
                  malesuada velit iaculis urna eu. Luctus lobortis lacus metus
                  nec ullamcorper. Arcu nisl odio elit nunc. Arcu amet imperdiet
                  cras volutpat. Facilisis euismod bibendum urna eu feugiat. Et
                  morbi mauris ultrices massa tellus purus suspendisse nec.
                  Magnis tempor aliquam elementum imperdiet posuere. Quis arcu
                  ultricies id quisque leo pulvinar augue sit.
                </li>

                <li>
                  <b>
                    Arcu ultricies malesuada lectus nulla est nunc integer
                    pellentesque magna.
                  </b>{" "}
                  Egestas malesuada faucibus arcu nunc elit leo quis interdum.
                  Ac vel in commodo accumsan mollis cras massa posuere eget.
                  Condimentum posuere velit cras velit tortor ridiculus sit.
                  Lectus augue libero etiam sed nisl.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h2>Subscribe to our newsletter</h2>
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </div>

            <div>
              <h2>Urgent Causes</h2>

              {[0, 1, 2, 3].map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSew3VgziU9t5k9kWQHj74v2nPCXkIr9Ke8F1rm-XX7kiI6VR69T2y5zeMlfII12Blc-hQ&usqp=CAU"
                      alt=""
                    />
                    <div>
                      <h2>End Hunger</h2>
                      <p>
                        Ut id velit tempor eu amet nunc. Vestibulum iaculis cras
                        sed odio. A dolor vitae ultrices{" "}
                      </p>
                      <button>view details</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckOutPage;
