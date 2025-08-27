import React from "react";
import style from "./NewsDetail.module.css";
import BlogCard from "../../components/BlogCard/BlogCard";

const NewsDetail = () => {
  return (
    <main>
      <section className={style.newsDetailContainer}>
        <h2>Clean Water for All</h2>
        <img src="https://pixy.org/download/54116/" alt="" />

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

        <button>Donate now</button>

        <div className={style.addsContainer}>
            <h2>Run Ads / Causes section</h2>
        </div>
      </section>


      <section className={style.blogsContainer}>

        <div>
          <h2>latest news and blog</h2>
          <button>
            <span>more news</span>
          </button>
        </div>

        <div className={style.blogCardContainer}>
          <BlogCard title={"where to give now"}/>
          <BlogCard title={"popular charities"}/>
          <BlogCard title={"childcare crisis"}/>
        </div>

        <button>more causes</button>

      </section>
      
    </main>
  );
};

export default NewsDetail;
