import styled from "styled-components";
import Danthe from "../../images/rodanthe.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PredictSection = styled.section`
  .titleBox {
    position: relative;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    .title {
      text-align: center;
      font-size: 36px;
    }
    .danthe {
      width: 80px;
      height: 80px;
    }
  }
  .contentBox {
    margin: 50px auto;
    width: 417px;
    display: flex;
    font-size: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
  }
  .back {
    width: 200px;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    color: #ccc;
    &:hover {
      background-color: #ccc;
      color: white;
    }
  }
`;

const History = () => {
  const [historyList, setHistoryList] = useState<any>([]);
  const getHistory = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Seoul&appid=${process.env.REACT_APP_OPEN_WEATHER}`
      );
      console.log(res.data);
      setHistoryList(res.data.list);
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
        {historyList.map((item: any, index: number) => (
          <div className="content">
            {item.dt_txt} - {item.weather[0].description}
          </div>
        ))}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="back">돌아가기</div>
      </Link>
    </PredictSection>
  );
};

export default History;
