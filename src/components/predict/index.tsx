import styled from "styled-components";
import Danthe from "../../images/rodanthe.png";
import { useEffect, useState } from "react";
import axios from "axios";

const PredictSection = styled.section`
  .titleBox {
    position: relative;
    display: flex;
    height: 80px;
    width: 100vw;
    justify-content: center;
    align-items: center;
    .title {
      text-align: center;
      font-size: 36px;
      margin-top: 150px;
    }
    .danthe {
      width: 80px;
      height: 80px;
      margin-top: 150px;
    }
  }
  .contentBox {
  }
`;

const History = () => {
  const [historyList, setHistoryList] = useState<any>([]);
  const getHistory = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=50d1c2c8ee17f4a988ca51eece0ea637`
      );
      console.log(res.data);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getHistory();
  }, []);
  return (
    <PredictSection>
      <div className="titleBox">
        <img src={Danthe} alt="단테" className="danthe" />
        <h1 className="title">눈이 올까요?</h1>
      </div>
      <div className="contentBox">
        <div className="year"></div>
      </div>
    </PredictSection>
  );
};

export default History;
