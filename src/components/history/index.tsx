import styled from "styled-components";
import Danthe from "../../images/rodanthe.png";
import Joy from "../../images/joy.png";
import Sad from "../../images/sad.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledLabel = styled.label`
  display: block;
  padding: 8px 16px;
  border: 1px solid red;
  color: green;
  border-radius: 10px;
  cursor: pointer;
`;
const StyledRadio = styled.input`
  display: none;

  &:checked + ${StyledLabel} {
    background-color: green;
    color: red;
    border: none;
  }
`;

const HistorySection = styled.section`
  .titleBox {
    position: relative;
    display: flex;
    width: 100vw;
    justify-content: center;
    margin-top: 100px;
    align-items: center;
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
    .year {
      display: flex;
      margin-top: 20px;
      gap: 20px;
      justify-content: center;
      .each {
        padding: 10px 20px;
        border: 1px solid red;
        color: green;
        border-radius: 10px;
        cursor: pointer;
      }
    }
    .status {
      width: 800px;
      height: 300px;
      display: flex;
      flex-direction: column;
      gap: 30px;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      margin: 20px auto 0;
      color: grey;
      .image {
        width: 100px;
        display: block;
      }
    }
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
  const [year, setYear] = useState(0);
  return (
    <HistorySection>
      <div className="titleBox">
        <img src={Danthe} alt="단테" className="danthe" />
        <h1 className="title">눈이 왔나요?</h1>
      </div>
      <div className="contentBox">
        <div className="year">
          <div className="default">
            <StyledRadio
              onChange={() => setYear(2019)}
              name="sidebtn"
              id="default"
              type="radio"
              value="default"
            />
            <StyledLabel htmlFor="default">2019</StyledLabel>
          </div>
          <div className="edit_info">
            <StyledRadio
              onChange={() => setYear(2020)}
              name="sidebtn"
              id="info"
              type="radio"
              value="editInfo"
            />
            <StyledLabel htmlFor="info">2020</StyledLabel>
          </div>
          <div className="edit_pw">
            <StyledRadio
              onChange={() => setYear(2021)}
              name="sidebtn"
              id="pw"
              type="radio"
              value="editPw"
            />
            <StyledLabel htmlFor="pw">2021</StyledLabel>
          </div>
        </div>
        {year === 2019 ? (
          <div className="status">
            <img src={Sad} alt="sad" className="image" />
            <p>눈이 안왔어요..</p>
          </div>
        ) : year === 2020 ? (
          <div className="status">
            <img src={Sad} alt="sad" className="image" />
            <p>눈이 안왔어요..</p>
          </div>
        ) : year === 2021 ? (
          <div className="status">
            <img src={Joy} alt="joy" className="image" />
            <p>눈이 왔어요!!</p>
          </div>
        ) : (
          <div className="status">크리스마스에 눈이 왔었는지 확인해보세요!</div>
        )}
      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="back">돌아가기</div>
      </Link>
    </HistorySection>
  );
};

export default History;
