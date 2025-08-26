import React from "react";
import style from "./NewsDetail.module.css";

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
            <p>Vivamus a dignissim nulla ornare sit aliquam elementum blandit. Leo in sem pellentesque viverra malesuada viverra eget aliquam:</p>
        </div>
      </section>
    </main>
  );
};

export default NewsDetail;
