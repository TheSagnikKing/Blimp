import React from "react";
import style from "./Hero.module.css";
import crowdImageOne from "../../assets/crowdImageOne.jpg";
import { FilterIcon } from "../../icons";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import RegionMapContainer from "../../components/RegionMap/RegionMap";
import NewsCard from "../../components/NewsCard/NewsCard";
import BiographImage from "../../assets/biograph.jpg";
import FocusCard from "../../components/FocusCard/FocusCard";

const Hero = () => {
  return (
    <>
      <main className={style.heroContainer}>
        <div>
          <div className={style.heroContent}>
            <p>Gaza</p>
            <h1>
              <span>GIVING</span> IS THE GREATEST ACT OF GRACE
            </h1>
            <button>Support a campaign</button>
          </div>
        </div>

      </main>

      <section className={style.impactContainer}>
        <div>
          <img src={crowdImageOne} alt="" />
          <div>
            <h2>From Good Intentions to Great Impact</h2>
            <p>
              Having a great idea or a noble cause is just the beginning. At
              Blimp, we help you turn your passion into real-world results. Our
              fundraising platform empowers you to rally support, raise funds, and
              bring your vision to life—because good intentions deserve the chance
              to make a real impact. Let's make it happen, together
            </p>

            <div>
              <div>
                <div>1</div>
                <p>Choose your cause</p>
              </div>

              <div>
                <div>3</div>
                <p>Donate the amount you like</p>
              </div>

              <div>
                <div>2</div>
                <p>Register on our website</p>
              </div>

              <div>
                <div>4</div>
                <p>Stay tuned about the cause</p>
              </div>
            </div>
          </div>

          <button>View Details</button>
        </div>
      </section>

      <FocusCard />

      <section className={style.featureContainer}>
        <div>
          <div>
            <h2>Featured</h2>
            <button>
              <span>Filter</span>
              <FilterIcon size={"2.4rem"} />
            </button>
          </div>

          <div className={style.featureCardContainer}>
            <FeatureCard
              image={
                "https://www.comece.eu/wp-content/uploads/sites/2/2025/02/shutterstock-gaza-people.jpg"
              }
            />
            <FeatureCard
              image={
                "https://i.cbc.ca/1.6994453.1697145406!/fileImage/httpImage/image.JPG_gen/derivatives/original_1180/israel-palestinians.JPG?im="
              }
            />
            <FeatureCard
              image={
                "https://www.reuters.com/resizer/v2/VGZR7BVP5NNYRNU6KTYUN7LFK4.jpg?auth=a1c51cb319e7e544d21b79be4a3a3f88af20222c3f0adfac49944492916ed741"
              }
            />
            <FeatureCard
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlqCpFCo7SOUmjdSidBJeTXz6eF5MaZA8vOA9RxcVjOPSq44mD7pRZ7Vms7FaaqH22V0&usqp=CAU"
              }
            />
            <FeatureCard
              image={
                "https://mondoweiss.net/wp-content/uploads/2024/12/051224_Khan_Yunis_OSH_1_002-1024x683.jpg"
              }
            />
            <FeatureCard
              image={
                "https://www.palestinechronicle.com/wp-content/uploads/2024/09/GazaWar_Day334_PC.png"
              }
            />
          </div>

          <button>more causes</button>
        </div>
      </section>

      <RegionMapContainer />

      <section className={style.newsContainer}>
        <div>
          <img
            src={
              "https://www.aljazeera.com/wp-content/uploads/2023/10/2023-10-09T044716Z_1634135774_RC2PO3AAEA8A_RTRMADP_3_ISRAEL-PALESTINIANS-1696828113.jpg?resize=770%2C513&quality=80"
            }
            alt=""
          />
          <div>
            <h2>News</h2>
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />
            <NewsCard title="Stroke care gains in Puerto Rico falter after Hurricane Maria..." />

            <button>view more</button>
          </div>
        </div>
      </section>

      <section className={style.biographContainer}>
        <div>
          <div>
            <h2>Changing Lives, Together</h2>
            <p>
              "Thanks to this platform and everyone who gave, we turned hope into
              reality. It truly showed me how powerful we are when we come
              together."
            </p>

            <div>
              <p>George Henry</p>
              <p>Donor</p>
            </div>
          </div>

          <img src={BiographImage} alt="" />
        </div>
      </section>
    </>
  );
};

export default Hero;
