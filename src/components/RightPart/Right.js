import React from 'react';
import 'antd/dist/antd.css';
import { CaretRightOutlined } from '@ant-design/icons'
import './Right.css';


const Right = () => {
    return (
        <div>
            <div className="Right">
                <div>
                    <div>
                        <h1 style={{ float: 'left', marginTop: '20px', borderBottom: 'double', color:'black'}}>Questions <CaretRightOutlined /></h1>
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
            </div>
        </div>
    )
}

export default Right;