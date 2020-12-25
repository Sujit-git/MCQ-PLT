import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Statistic, Row, Col } from "antd";

const Timer = () => {

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log("finished!");
}

    ReactDOM.render(
        <Row gutter={16}>
          <Col span={12}>
            <Countdown
              title="Million Seconds"
              value={deadline}
              format="HH:mm:ss:SSS"
            />
          </Col>
        </Row>,
        document.getElementById("container")
      );

}

export default Timer;


