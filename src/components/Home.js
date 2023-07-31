import React from "react";

import { AiFillPhone, AiFillFilePdf, AiFillStar } from "react-icons/ai";
import { LiaNotesMedicalSolid } from "react-icons/lia";



const Home = () => {

  let cardData = [
    {
      img: "https://cdcssl.ibsrv.net/ibimg/smb/350x222_80/webmgr/18/o/v/aspen/featuredservice_1.jpg.webp",
      title: "Dental",
      price:'₹2000'
    },
    {
      img: "https://cdcssl.ibsrv.net/ibimg/smb/350x222_80/webmgr/18/o/v/aspen/featuredservice_2.jpg.webp",
      title: "Surgery",
      price:'₹5000'
    },
    {
      img: "https://cdcssl.ibsrv.net/ibimg/smb/350x222_80/webmgr/18/o/v/aspen/featuredservice_3.jpg.webp",
      title: "Vaccines",
      price:'₹7000'
    },
    {
      img: "	https://cdcssl.ibsrv.net/ibimg/smb/350x222_80/webmgr/18/o/v/aspen/featuredservice_4.jpg.webp",
      title: "Grooming",
      price:'₹1000'
    },
    {
      img: "	https://cdcssl.ibsrv.net/ibimg/smb/350x222_80/webmgr/18/o/v/aspen/featuredservice_5.jpg.webp",
      title: "Wellness care",
      price:'₹2000'
    },
  ];
  return (
    <>
      {" "}
      <div className="home__container relative">
        <img
          src="https://cdcssl.ibsrv.net/ibimg/smb/1920x950_80/webmgr/18/o/v/aspen/slider_1_aspen_vet_general.jpg.webp"
          alt="hero__img"
        />
        <div className="flex__column align__center gap__10px home__text__container">
          <h1 className="white__typography900 fs48 textAlign__center">
            Pet Care is Our Passion
          </h1>
          <h3 className="white__typography900 fs36 textAlign__center">
            We prioritize your pet's health and wellness
          </h3>
          <div>
            <button className="home__btn">BOOK APPOINTMENT</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="visit__section flex__column align__center gap__20px">
        <h1 className="white__typography900 fs36 textAlign__center">
          Schedule Your Next Visit
        </h1>
        <div>
          <button className="home__btn">BOOK APPOINTMENT</button>
        </div>
      </div>
      {/*  */}
      <div className="contact__section">
        <div className="flex__column align__center gap__10px contact__item">
          <AiFillPhone className="fs36 blue__color" />
          <h1 className="heading__medium500 blue__color">Contact Us</h1>
          <p className="gray__typography500 textAlign__center fs16">
            Call or send an email today! Our staff will respond as soon as
            possible
          </p>
        </div>
        <div className="flex__column align__center gap__10px contact__item">
          <AiFillFilePdf className="fs36 blue__color" />
          <h1 className="heading__medium500 blue__color">Online Forms</h1>
          <p className="gray__typography500 textAlign__center fs16">
            Our patient forms are available online and can be completed in the
            privacy of your own home or office.
          </p>
        </div>
        <div className="flex__column align__center gap__10px contact__item">
          <LiaNotesMedicalSolid className="fs36 blue__color" />
          <h1 className="heading__medium500 blue__color">
            Wellness Care & Checkups
          </h1>
          <p className="gray__typography500 textAlign__center fs16">
            We strive to provide complete care for our patients. Learn more
            about all the services we provide.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="docInfo__section grid grid_colums_2__1fr">
        <div className="flex__column align__center justify__center gap__40px">
          <h1 className="white__typography900 fs32 textAlign__center">
            Welcome to Anderson Veterinary Clinic
          </h1>
          <p className="white__typography500 fs16 textAlign__center">
            Anderson Veterinary Clinic is a full-service animal hospital and
            welcomes both emergency treatment cases as well as pet patients in
            need of routine medical, surgical, and dental care. Dr. Natasha
            Anderson has years of experience treating serious conditions and
            offering regular pet wellness care. Beyond first-rate pet care, we
            make our clinic comfortable, kid-friendly, and calm, so your pet can
            relax in the waiting room and look forward to meeting our San Diego
            veterinarian.
          </p>
          <div>
            <button className="home__btn">MEET THE DOCTOR</button>
          </div>
        </div>
        <div>
          <img
            src="https://cdcssl.ibsrv.net/ibimg/smb/920x658_80/webmgr/18/o/v/aspen/staff_1.jpg.webp"
            alt="doc__image"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      {/*  */}
      <div className="services__section">
        <h1 className="textAlign__center heading__primary600">Our Services</h1>
        <div className=" grid grid_colums_5 gap__20px mt20">
          {cardData?.map((data, i) => (
            <div className="sevice__cards" key={i}>
              <div>
                <img
                  src={data?.img}
                  style={{ width: "100%" }}
                  alt="data?.title"
                />
              </div>
              <div> <h1 style={{ padding: "2rem" }}>
                {data?.title}
              </h1>
              <h1  style={{ padding: "1rem 2rem" }}>
                Price : {data?.price}
              </h1></div>
             
            </div>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="rating__section flex__column align__center justify__center gap__20px">
        <div className="google__rating flex justify__between align__center">
          <div>
            <div>
              {" "}
              <img
                src="https://blog.hubspot.com/hubfs/image8-2.jpg"
                alt="googlr__logo"
                style={{ width: "100px", borderRadius: "8px" }}
              />{" "}
            </div>
            <div
              className="flex align__center gap__10px"
              style={{ marginTop: ".5rem" }}
            >
              <h1>4</h1>
              {[1, 2, 3, 4]?.map((a, i) => (
                <AiFillStar
                  key={i}
                  className="fs18"
                  style={{ color: "gold" }}
                />
              ))}

              <h1 className="gray__typography500">739 reviews</h1>
            </div>
          </div>
          <div>
            <button className="review__btn">Write a review</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="services__section grid grid_colums_4 justify__center align__center">
        <h1 className="heading__medium500 textAlign__center">
          Visit Some of Our Preferred Partners
        </h1>
        <div>
          <img
            src="https://cdcssl.ibsrv.net/ibimg/smb/135x135_80/webmgr/18/o/v/_SHARED/Health_Logo2.png.webp"
            alt="partner__img"
            style={{width:'150px'}}
          />
        </div>
        <div>
          <img
            src="https://cdcssl.ibsrv.net/ibimg/smb/135x135_80/webmgr/18/o/v/_SHARED/Health_Logo3.png.webp"
            alt="partner__img"
            style={{width:'150px'}}
          />
        </div>
        <div>
          <img
            src="https://cdcssl.ibsrv.net/ibimg/smb/135x135_80/webmgr/18/o/v/_SHARED/Health_Logo5.png.webp"
            alt="partner__img"
            style={{width:'150px'}}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

