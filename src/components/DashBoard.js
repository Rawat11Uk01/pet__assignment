import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdNotifications, IoIosAddCircle } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { AiTwotoneDelete } from "react-icons/ai";
import image from "../assests/image/pet.jpg";
import Chart from "../assests/image/Chart.png";
import income from "../assests/image/income.jpg";
import chat2 from "../assests/image/chart2.jpg";
import chart3 from "../assests/image/chart3.jpg";
import reports from "../assests/image/Report.jpg";
import AddClientDialogue from "../utills/AddClientDialogue";
const DahBoard = () => {
  const [show, setShow] = useState(false);
  function clickHandler() {
    setShow(true);
  }
  let headingArr = ["ID", "Kind", "Owner", "City", "Date", "Status"];
  const [tableData, setTabledata] = useState([
    {
      id: "RT836",
      img: "",
      owner: "kashish",
      city: "Noida",
      Date: "15/01/2022",
      status: "In Work",
    },
    {
      id: "RT894",
      img: "",
      owner: "kashish",
      city: "Noida",
      Date: "15/01/2022",
      status: "In Work",
    },
    {
      id: "RT895",
      img: "",
      owner: "kashish",
      city: "Noida",
      Date: "15/01/2022",
      status: "In Work",
    },
    {
      id: "RT896",
      img: "",
      owner: "kashish",
      city: "Noida",
      Date: "15/01/2022",
      status: "In Work",
    },
    {
      id: "RT897",
      img: "",
      owner: "kashish",
      city: "Noida",
      Date: "15/01/2022",
      status: "In Work",
    },
  
  ]);
  const deleteHandler = (id) => {
    let temp = tableData.filter((a) => a.id !== id);
    setTabledata(temp);
  };
  return (
    <div className="width80">
      <header className="dash__header flex justify__between align__center">
        <div class="search-box">
          <input
            class="search-input"
            type="text"
            placeholder="Search something.."
          />
          <button class="search-btn">
            <BiSearchAlt />
          </button>
        </div>
        <ul className="flex gap__20px">
          <li className="gray__typography500 fs16">You have 12 new alerts</li>
          <li>
            <IoMdNotifications className="fs20" />
          </li>
          <li>
            <RxAvatar className="fs20" />
          </li>
        </ul>
      </header>
      {/*  */}
      <section className="mt20">
        <div className="flex justify__between align__center">
          <div className="flex__column gap__10px">
            {" "}
            <h1 className="heading__primary600">Welcome back, USER 👋</h1>
            <h2 className="gray__typography500">
              Your Clinic is working in the mode: Normal
            </h2>
          </div>
          <button className="btn__secondary fs14" onClick={()=>clickHandler()}>Add Patient</button>
          <AddClientDialogue setTabledata={setTabledata} tableData={tableData} onClose={() => setShow(false)} show={show} />
        </div>
      </section>
      {/*  */}
      <section className="mt20 grid grid_colums_3 gap__20px">
        {[1, 2, 3].map((a) => (
          <div className="dash__card flex align__center gap__5px">
            <div className="flex justify__between align__center">
              <img src={image} alt="pet" style={{ width: "80px" }} />
              <div>
                <h4 className="heading__small fs14">Total Clients</h4>
                <h4 className="mt20 heading__small">8434</h4>
              </div>
            </div>

            <div className="flex align__center gap__10px">
              <div>
                <img src={Chart} alt="chart" style={{width:'100px'}} />
              </div>
              <div>
                <h4 className="heading__small fs14">Today</h4>
                <h4 className="mt20 heading__small">32</h4>
              </div>
            </div>
          </div>
        ))}
      </section>
      {/*  */}
      <section className="mt20 grid grid_colums_2 gap__20px">
        <div>
          <div
            className="flex justify__between align__center"
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h1 className="heading__medium500">Latest Patients</h1>
            <IoIosAddCircle className="fs32 green__color cursor__pointer" onClick={()=>clickHandler()}/>
          </div>
          <div className="grid grid_colums_7 mt10">
            {headingArr.map((a, i) => (
              <h1
                key={i}
                style={{ textAlign: "center" }}
                className="gray__typography500"
              >
                {a}
              </h1>
            ))}
          </div>
          <div
            style={{
              maxHeight: "430px",
              overflowY: "scroll",
              scrollBehavior: "smooth",
            }}
          >
            {tableData.map((a, i) => (
              <div
                key={a?.id}
                className="grid grid_colums_7 align__center mt10"
                style={{
                  border: "1px solid #ddd",
                  padding: "10px 0",
                  borderRadius: "10px",
                }}
              >
                <h1 style={{ textAlign: "center" }}>{a?.id}</h1>
                <div className="flex justify__center">
                  <img src={image} alt="pet" style={{ width: "80px" }} />
                </div>
                <h1 style={{ textAlign: "center" }}>{a?.owner}</h1>
                <h1 style={{ textAlign: "center" }}>{a?.city}</h1>
                <h1 style={{ textAlign: "center" }}>15/01/2022</h1>
                <h1 style={{ textAlign: "center" }}>In Work</h1>
                <div className="flex justify__center">
                  {" "}
                  <AiTwotoneDelete
                    className="fs16 danger__color cursor__pointer"
                    onClick={() => deleteHandler(a?.id)}
                  />
                </div>
              </div>
            ))}
          </div>
          {/*  */}

          <div className="mt20 grid grid_colums_2__1fr gap__20px">
            {[1, 2].map((a) => (
              <div className="dash__card flex align__center justify__between gap__5px">
                <div>
                  <img src={income} alt="income" style={{ width: "100px" }} />
                </div>
                <div>
                  <h1 className="gray__typography500">Income This Week</h1>
                  <h1 className="mt20 heading__medium500">₹ 1246</h1>
                </div>
                <div>
                  <img src={chat2} alt="chat2" style={{ width: "100px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
        <div>
          <div className="dash__card">
            <div>
              <h1 className="gray__typography500">Total Animals Today</h1>
              <h1 className="mt10 heading__medium500">38</h1>
            </div>
            <img src={chart3} alt="chart3" />
          </div>
          {/*  */}
          <div className="dash__card flex align__center mt20 justify__between">
            <h1 className="heading__medium500">Reports</h1>
            <img src={reports} alt="report" style={{ width: "80px" }} />
          </div>
          {/*  */}
          <div className="dash__card mt20 flex justify__between ">
            <div style={{  lineHeight: "30px" }}>
              {" "}
              <p className="heading__small">
                Payment for a batch of vaccines for puppies
              </p>
              <p className="gray__typography500 fs12">
               4 minute ago
              </p>
            </div>
            <div style={{ width: "100px" }}>
              {" "}
              <img src={reports} alt="report" style={{ width: "80px" }} />
            </div>
          </div>
          {/*  */}
          <div className="dash__card mt20 flex justify__between ">
            <div style={{ lineHeight: "30px" }}>
              {" "}
              <p className="heading__small">
               A new order for grooming cosmetics has been placed
              </p>
              <p className="gray__typography500 fs12">
               4 minute ago
              </p>
            </div>
            <div style={{ width: '100px' }}>
              {" "}
              <img src={reports} alt="report" style={{ width: "80px" }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DahBoard;
