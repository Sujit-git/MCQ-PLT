import React from 'react'
import 'antd/dist/antd.css';
import { RightCircleTwoTone, LeftCircleTwoTone, PushpinTwoTone, SaveTwoTone, DoubleRightOutlined, FieldTimeOutlined } from '@ant-design/icons'
import './Left.css';




var deadline = new Date("dec 31, 2020 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var t = deadline - now;
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }
}, 1000);


const Left = () => {
    return (
        <div className="class">
            <div id="leftPart">
                <h1 id="heading">MCQ Platform</h1>
                <h2 id="timer1">Total Time Remaining <FieldTimeOutlined /></h2>
                <div id="timer">
                    <p className="main">
                        <span className="minutes" id="minute"></span>:
                        <span className="seconds" id="second"></span> min
                    </p>
                </div>
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
        </div>
    )
}

export default Left;