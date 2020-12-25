
import './App.css';
import logo from './pasclogo.png';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { RightCircleTwoTone, LeftCircleTwoTone, PushpinTwoTone, SaveTwoTone, DoubleRightOutlined, CaretRightOutlined, FieldTimeOutlined } from '@ant-design/icons'
import { Button } from 'antd';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="App">

      <header>
        <nav id="header-nav" className="navbar navbar-default row">
          <div className="container">
            <div className="left-name">
              Pulzion'20
            </div>

            <div className="pasclogo">
              <p>
                <img id="pasclogo1" src={logo} alt="pasclogo" />
              </p>
            </div>
          </div>
        </nav>
      </header>


      <div id="leftPart">
        <h1 id="heading">MCQ Platform</h1>
        <p id="timer">
          {/* <Timer /> */}
        </p>
        <div id="question">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius sit amet mattis vulputate enim. Duis ut diam quam nulla porttitor massa. Massa eget egestas purus viverra accumsan in. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.
        </div>


        <div id="options">

          <button id="option1"><DoubleRightOutlined /> Option 1</button>
          <button id="option2"><DoubleRightOutlined /> Option 2</button>
          <button id="option3"><DoubleRightOutlined /> Option 3</button>
          <button id="option4"><DoubleRightOutlined /> Option 4</button>

        </div>

        <div id="submit_op">
          <button id="prev_que"><LeftCircleTwoTone />  Previous Question</button>
          <button id="next_que"> <RightCircleTwoTone />   Next Question</button>
          <button id="pin_que"> <PushpinTwoTone /> Pin Question</button>
          <button id="savennext"> <SaveTwoTone /> Save and Next</button>
        </div>
      </div>


      <div className="Right">
        <div>
          <div>
            <h1 style={{float:'left', marginTop:'20px', borderBottom:'double'}}>Questions <CaretRightOutlined /></h1>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="Option">

          <div>
            <button className="button button2 ">1</button>
            <button className="button button3">2</button>
            <button className="button button3">3</button>
            <button className="button button3">4</button>
            <button className="button button3">5</button>
          </div>

          <div>
            <button className="button button2">6</button>
            <button className="button button3">7</button>
            <button className="button button3">8</button>
            <button className="button button3">9</button>
            <button className="button button3">10</button>
          </div>

          <div>
            <button className="button button2">11</button>
            <button className="button button3">12</button>
            <button className="button button3">13</button>
            <button className="button button3">14</button>
            <button className="button button3">15</button>
          </div>

          <div>
            <button className="button button2">16</button>
            <button className="button button2">17</button>
            <button className="button button3">18</button>
            <button className="button button3">19</button>
            <button className="button button3">20</button>
          </div>

        </div>

        <div>
          <h2 id="timeleft" style={{borderBottom:'double'}}>	TIME LEFT <FieldTimeOutlined />	</h2>
  

        </div>

        <div id="clockdiv">

          <div>
            <span className="minutes" id="minute"></span>
            <div className="smalltext">Minutes</div>
          </div>
          <div>
            <span className="seconds" id="second"></span>
            <div className="smalltext">Seconds</div>
          </div>

        </div>
      </div>

      <footer>
        <div className="footer">
          <p className="bottom">
            Pulzion'20
        </p>
        </div>
      </footer>




    </div>

  );
}

var deadline = new Date("dec 31, 2020 15:37:25").getTime(); 

var x = setInterval(function() { 

var now = new Date().getTime(); 
var t = deadline - now; 
var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
var seconds = Math.floor((t % (1000 * 60)) / 1000); 
///document.getElementById("day").innerHTML =days ; 
//document.getElementById("hour").innerHTML =hours; 
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds; 
if (t < 0) { 
		clearInterval(x); 
		document.getElementById("demo").innerHTML = "TIME UP"; 
		document.getElementById("minute").innerHTML ='0' ; 
		document.getElementById("second").innerHTML = '0'; } 
}, 1000); 


export default App;
