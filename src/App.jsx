import moment from "moment";
import "./App.css";
import ImageProfiles from "./components/ImageProfiles";
import Title from "./components/Title";
import TitleLeft from "./components/TitleLeft";
import  axios  from 'axios';
import { useState,useEffect } from "react";


const enpoint = 'https://sheetdb.io/api/v1/xdvclflgmuyby';

function App() {
  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfiles images="/src/assets/profile.jpg" />

          <Title title="ammarin somrang">
            <p>it support </p>
          </Title>

          <Title title="Contract">
            <p>{moment("2003/4/19").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? "none" : "block" }}>
              tel: 0988963938
            </p>
            <button onClick={() => setHide(!hide)}>
              {hide ? "เเสดงเบอร์โทร" : "ซ่อนเบอร์โทร"}
            </button>
            <p>Email: ammarinsomrang@gmail.com</p>
            <p style={{ display: hide ? "none" : "block" }}>
                172/50 หมู่4 ซอยหมอบาง ต.ในคลองบางปลากด อ.พระสมุทรเจดีย์ จ.สมุทรปราการ
            </p>
            <button onClick={() => setHide(!hide)}>
              {hide ? "เเสดงที่อยู่" : "ซ่อนที่อยู่"}
            </button>
          </Title>

          <Title  title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ </p>
            <p>มหาลัยราชภัฏ สวนสุนันทา</p>
          </Title>
        </div>


        <div className="rightPort">
          <TitleLeft titleleft="Profile">
            <p style={{width: '800px'}}>
              ปัจจุบันศึกษาช้ันปีที่ จากมหาวิทยาลัยราชภัฏสวนสุนันทา
              คณะเทคโนโลยีสารสนเทศ
              ผมสนใจเกี่ยวกับการอาชีพ it support เพราะผมอยากทำอาชีพที่สามารถช่วยเหลือตำแหน่งอื่นได้
              การทำงานในตำแหน่ง IT Support นั้นมีความสำคัญอย่างมากในองค์กร เพราะคุณจะเป็นผู้ช่วยเหลือ
              และแก้ไขปัญหาด้านไอทีต่างๆ ไม่ว่าจะเป็นปัญหาเกี่ยวกับฮาร์ดแวร์, ซอฟต์แวร์ หรือเครือข่าย 
              ทำให้ระบบทำงานได้ปกติและต่อเนื่อง นอกจากนี้ยังต้องอัปเดตข้อมูลข่าวสารและความเคลื่อนไหวทางเทคโนโลยีอยู่เสมอ 
              พื่อให้สามารถวิเคราะห์และแก้ไขปัญหาได้อย่างรวดเร็วและทันเหตุการณ์
            </p>
          </TitleLeft>


          <TitleLeft titleleft="skill">
          <p className="titles-slikk">Communication:</p>
            <ul>
              <li>English</li>
              <li>Thai</li>
              
            </ul>

            <p className="titles-slikk">Computer Skills</p>
              <ul>
                <li>Capcut</li>
                <li>Adobe Premiere Pro</li>
                <li>MS Powerpoint</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>

              <p className="titles-slikk">Soft Skills</p>
              <ul>
                <li>Fast Learner</li>
                <li>Team worker</li>
                <li>Adaptibility</li>
              </ul>
            
          </TitleLeft>
        </div>
      </div>



      <div >
        <h2>ข้อมูลคนในห้อง</h2>
          {data.map((record) => 
          <div key={record.number}>
          {record.number} {record.name}
                    
           </div>
           )}
      </div>
    </>
  );
}

export default App;
