import React from "react";
import style from "./FeatureDetail.module.css";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterXIcon,
  WhatsappIcon,
} from "../../icons";

import FirstMedal from "../../assets/medal1st.png";
import SecondMedal from "../../assets/medal2nd.png";
import ThirdMedal from "../../assets/medal3rd.png";
import BlogCard from "../../components/BlogCard/BlogCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const FeatureDetail = () => {

  const navigate = useNavigate()

  return (
    <main>
      <section className={style.featureDetailContainer}>
        <div>
          <h2>Reduce Homelessness</h2>
          <img src="https://pixy.org/download/54116/" alt="" />

          <div className={style.donationContainer}>
            <p>
              Published by: <b>Arghya Ghosh</b>
            </p>

            <ProgressBar />

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

              <button onClick={() => {
                navigate("/checkout")
              }}>Donate</button>
            </div>
          </div>

          <div>
            <h2>Lectus augue libero etiam</h2>
            <p>
              Arcu ultricies malesuada lectus nulla est nunc integer pellentesque
              magna. Egestas malesuada faucibus arcu nunc elit leo quis interdum.
              Ac vel in commodo accumsan mollis cras massa posuere eget.
              Condimentum posuere velit cras velit tortor ridiculus sit. Lectus
              augue libero etiam sed nisl
            </p>
          </div>

          <div>
            <h2>Vivamus a dignissim nulla</h2>
            <p>
              Urna velit pharetra pellentesque magna eget. Ut egestas est id
              netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
              Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
              ornare sit aliquam elementum blandit. Leo in sem pellentesque
              viverra malesuada viverra eget aliquam. Diam mi dolor adipiscing
              pellentesque nec at. Ut nisi faucibus ultrices etiam tortor vitae
              eros. Nec laoreet felis egestas ultrices a quis turpis sit. Eget
              semper commodo pellentesque eget orci tincidunt commodo facilisi
              ultricies. Nec mi in augue dolor sit convallis habitant ut accumsan.
              Ultrices neque diam id aliquam lobortis est faucibus sed. Dolor nibh
              arcu ornare mi donec suspendisse nisl nullam.
            </p>
          </div>

          <div>
            <h2>Pharetra malesuada velit</h2>
            <p>
              Urna velit pharetra pellentesque magna eget. Ut egestas est id
              netus. Facilisis mollis morbi ultrices ac tellus vitae pulvinar.
              Egestas sagittis nec et arcu enim ac. Vivamus a dignissim nulla
              ornare sit aliquam elementum blandit. Leo in sem pellentesque
              viverra malesuada viverra eget aliquam.
            </p>
          </div>

          <div>
            <p>
              Vivamus a dignissim nulla ornare sit aliquam elementum blandit. Leo
              in sem pellentesque viverra malesuada viverra eget aliquam:
            </p>
          </div>

          <ul>
            <li>
              <b>Nunc tortor et a ornare et placerat.</b> Tellus in ultricies
              risus accumsan turpis id nam. Maecenas proin sodales diam vel mauris
              facilisis arcu semper. Mi accumsan gravida dignissim turpis
              sollicitudin. At auctor sed facilisi massa amet. Est morbi aliquam
              sed orci.
            </li>

            <li>
              <b>Pulvinar aliquam sed egestas tempus aliquet sollicitudin.</b>{" "}
              Lectus et rhoncus venenatis interdum lectus nam. Amet curabitur
              cursus pulvinar nisl id morbi adipiscing. Nunc eget arcu enim ac
              pellentesque integer bibendum augue. Ut amet tortor auctor
              hendrerit. Massa at amet nisl mauris vulputate.
            </li>

            <li>
              <b>Accumsan quis vel habitasse arcu nisi sed.</b> Pharetra malesuada
              velit iaculis urna eu. Luctus lobortis lacus metus nec ullamcorper.
              Arcu nisl odio elit nunc. Arcu amet imperdiet cras volutpat.
              Facilisis euismod bibendum urna eu feugiat. Et morbi mauris ultrices
              massa tellus purus suspendisse nec. Magnis tempor aliquam elementum
              imperdiet posuere. Quis arcu ultricies id quisque leo pulvinar augue
              sit.
            </li>

            <li>
              <b>
                Arcu ultricies malesuada lectus nulla est nunc integer
                pellentesque magna.
              </b>{" "}
              Egestas malesuada faucibus arcu nunc elit leo quis interdum. Ac vel
              in commodo accumsan mollis cras massa posuere eget. Condimentum
              posuere velit cras velit tortor ridiculus sit. Lectus augue libero
              etiam sed nisl.
            </li>
          </ul>

          <div className={style.addGalleryContainer}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
              alt=""
            />
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/855/347/small_2x/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg"
              alt=""
            />
          </div>

          <div className={style.addsContainer}>
            <h2>Run Ads / Causes section</h2>
          </div>

          <div className={style.supporterContainer}>
            <h2>Supporters(10574)</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div key={item} className={style.supporterItem}>
                    <div>
                      {item === 1 ? (
                        <img src={FirstMedal} alt="" />
                      ) : item === 2 ? (
                        <img src={SecondMedal} alt="" />
                      ) : item === 3 ? (
                        <img src={ThirdMedal} alt="" />
                      ) : (
                        <span></span>
                      )}

                      <div>
                        <h2>AB</h2>
                      </div>
                    </div>

                    <div>
                      <h3>Avigyan Biswas</h3>
                      {item === 1 ? (
                        <p>Top Contributor</p>
                      ) : item === 2 ? (
                        <p>Top Contributor</p>
                      ) : item === 3 ? (
                        <p>Top Contributor</p>
                      ) : (
                        <span />
                      )}
                    </div>

                    <div>
                      <h3>$ 100</h3>
                      <p>1 day ago</p>
                    </div>

                  </div>
                );
              })}

              <div className={style.supporterPaginationContainer}>
                <button style={{ backgroundColor: "#000" }}></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={style.blogsContainer}>

        <div>
          <div>
            <h2>latest news and blog</h2>
            <button onClick={() => {
              navigate("/news-blog")
            }}>
              <span>more news</span>
            </button>
          </div>

          <div className={style.blogCardContainer}>
            <BlogCard title={"where to give now"} />
            <BlogCard title={"popular charities"} />
            <BlogCard title={"childcare crisis"} />
          </div>

          <button>more causes</button>
        </div>
      </section>
    </main>
  );
};

export default FeatureDetail;

