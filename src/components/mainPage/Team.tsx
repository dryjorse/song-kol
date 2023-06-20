import React from "react";
// @ts-ignore
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../assets/images/main-page/team1.jpg";
import team2 from "../../assets/images/main-page/team2.jpg";
import team3 from "../../assets/images/main-page/team3.jpg";
import quotationMark from "../../assets/images/main-page/quotation-mark.svg";
import leftArrow from "../../assets/images/main-page/left-arrow.svg";
import rightArrow from "../../assets/images/main-page/right-arrow.svg";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const team = [
  {
    name: "Тажиев Руслан",
    type: "Основатель",
    mainDescr: "Лучший папа, лучший муж, лучший брат, лучший лидер",
    descr:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: team1,
  },
  {
    name: "Ermek",
    type: "Пеший гид, дизайнер 2 года",
    mainDescr: "Она росла среди туристов",
    descr:
      "С детства Эркай(так все её называют) свои летние каникулы проводила в юрточном лагере для туристов. Туристы научили её говорить на английском",
    image: team2,
  },
  {
    name: "Айзада",
    type: "Менеджер",
    mainDescr: "Она совмещает в себе несколько людей",
    descr:
      "Айзада не только менджер Сон-Кол Тревел, но и мама, блогер, спортсменка ...",
    image: team3,
  },
];

const Team: React.FC = () => {
  const sliderBreakPoints = {
    0: {
      coverflowEffect: {
        stretch: -200,
        depth: 1000,
      },
    },
    1300: {
      coverflowEffect: {
        stretch: 6,
        depth: 450,
      },
    },
  };

  return (
    <div className="py-80">
      <h2 className="mb-40 title-2 text-center">Our Team</h2>
      <div className="container flex items-center">
        <button className="team-slider-arrow left dt:hidden">
          <img src={leftArrow} alt="left-arrow" />
        </button>
        <Swiper
          className="max-w-[1060px] w-full team-swiper"
          grabCursor
          slidesPerView={2}
          modules={[EffectCoverflow, Navigation, Pagination]}
          loop
          pagination={{ clickable: true }}
          spaceBetween={30}
          centeredSlides
          navigation={{
            prevEl: ".team-slider-arrow.left",
            nextEl: ".team-slider-arrow.right",
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={sliderBreakPoints}
        >
          {[...team, ...team].map((person) => (
            <SwiperSlide>
              <div
                className="
                    pb-[21px] px-[24px] mx-auto w-[405px] h-[516px] flex flex-col justify-end bg-no-repeat bg-center bg-cover rounded-[8px] text-white 
                    dt:w-[490px] dt:h-[586px]
                "
                style={{ backgroundImage: `url(${person.image})` }}
              >
                <h3 className="text-[24px] leading-[28px] font-medium">
                  {person.name}
                </h3>
                <span className="block mt-[4px] mb-[7px] text-[rgba(190,_190,_190,_1)]">
                  {person.type}
                </span>
                <span className="flex items-center gap-[7px] text-[rgba(255,_184,_0,_1)]">
                  <img src={quotationMark} alt="quotation-mark" />
                  <span>{person.mainDescr}</span>
                </span>
                <p className="mt-[12px]">{person.descr}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="team-slider-arrow right dt:hidden">
          <img src={rightArrow} alt="right-arrow" />
        </button>
      </div>
    </div>
  );
};

export default Team;
