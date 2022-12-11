import { Link } from "react-router-dom";
import styled from "styled-components";
import Danthe from "../../images/rodanthe.png";
import Snowman from "../../images/snowman.png";
import Tree from "../../images/tree.png";
import axios from "axios";
import { useEffect, useState } from "react";
const MainSection = styled.section`
  .sky {
    width: 100vw;
    height: 70vh;
    position: relative;
    .titleBox {
      position: relative;
      display: flex;
      width: 100vw;
      justify-content: center;
      align-items: center;
      .title {
        text-align: center;
        margin-top: 100px;
        font-size: 36px;
      }
      .danthe {
        width: 80px;
        height: 80px;
        margin-top: 100px;
      }
    }
    .btnGroup {
      width: 302.54px;
      margin: 100px auto 60px;
      display: flex;
      gap: 30px;
      .historyBtn,
      .predictBtn {
        color: green;
        padding: 18px 20px;
        border-radius: 5px;
        border: 1px solid red;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          background-color: green;
          color: red;
          transition: 0.2s;
        }
      }
    }
    .weather {
      display: flex;
      gap: 20px;
      width: 100vw;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      .des {
        font-size: 24px;
      }
      .data {
        font-size: 20px;
        color: #408a8e;
      }
    }
    .date {
      display: flex;
      gap: 20px;
      width: 100vw;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
      .des {
        font-size: 24px;
      }
      .data {
        font-size: 20px;
        color: #408a8e;
      }
    }
    .dDay {
      display: flex;
      gap: 20px;
      width: 100vw;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;
      .des {
        font-size: 24px;
        color: green;
      }
      .data {
        font-size: 20px;
        color: red;
      }
    }
  }
  .land {
    width: 100vw;
    height: 30vh;
    background-color: #bf9a8e;
    position: relative;
    .tree {
      position: absolute;
      top: -60vh;
      left: 100px;
      width: 400px;
      height: 600px;
    }
    .snowman {
      top: -30vh;
      right: 10px;
      position: absolute;
      width: 300px;
      height: 300px;
    }
  }
`;

const Main = () => {
  const date = new Date();
  const [curr, setCurr] = useState<any>();
  const getCurr = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_OPEN_WEATHER}`
      );
      setCurr(res.data.weather[0].description);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getCurr();
  }, []);
  return (
    <MainSection>
      <div className="sky">
        <div className="titleBox">
          <img src={Danthe} alt="단테" className="danthe" />
          <h1 className="title">크리스마스에 눈이 올까요?</h1>
        </div>
        <div className="btnGroup">
          <Link to="/history" style={{ textDecoration: "none" }}>
            <div className="historyBtn">눈이 왔나요?</div>
          </Link>
          <Link to="/predict" style={{ textDecoration: "none" }}>
            <div className="predictBtn">눈이 올까요?</div>
          </Link>
        </div>
        <div className="weather">
          <p className="des">현재날씨 :</p>
          <p className="data">{curr}</p>
        </div>
        <div className="date">
          <p className="des">오늘날짜 :</p>
          <div className="data">
            {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
          </div>
        </div>
        <div className="dDay">
          <div className="des">크리스마스</div>
          <div className="data">D - {25 - date.getDate()}</div>
        </div>
      </div>
      <div className="land">
        <img src={Tree} alt="트리" className="tree" />
        <img src={Snowman} alt="눈사람" className="snowman" />
      </div>
    </MainSection>
  );
};

export default Main;
