import React from 'react';
import { Line, registerables } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

//const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice = [];
    const coinTimestamp = [];
    console.log(coinHistory)

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push((new Date(coinHistory?.data?.history[i].timestamp * 1000)).toLocaleDateString());
    }

    const state = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: coinPrice
            }
        ]
    }

    const options = {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    };


    return (
        <>
            <Row className="chart-header">
                <Typography level={2} className="chart-title">{coinName} Price Chart </Typography>
                <Col className="price-container">
                    <Typography level={5} className="price-change">Change: {coinHistory?.data?.change}%</Typography>
                    <Typography level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Typography>
                </Col>
            </Row>
            <Line
                data={state}
                options={options}
            />

        </>
    );
};

export default LineChart;
