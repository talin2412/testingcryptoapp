import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar, Card } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
//import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery();
    const exchangesList = data?.data?.exchanges;

    if (isFetching) return "Loading....";
    console.log(data)
    return (
        <>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {exchangesList.map((exchange) => (
                    <Col span={24}>
                        <Card>
                            <Row key={exchange.id}>
                                <Col span={6}>
                                    <Text><strong>{exchange.rank}.</strong></Text>
                                    <Avatar className="exchange-image" src={exchange.iconUrl} />
                                    <Text><strong>{exchange.name}</strong></Text>
                                </Col>
                                <Col span={6}>${millify(exchange['24hVolume'])}</Col>
                                <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                                <Col span={6}>{millify(exchange.marketShare)}%</Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Exchanges;