import React, { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import getData from '../services/cryptoNewsApi'

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const count = simplified ? 6 : 12
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery(newsCategory)
    const { data } = useGetCryptosQuery(100)
    useEffect(() => {
        console.log(cryptoNews)
    }, [cryptoNews])

    if (!cryptoNews?.articles) return 'Loading...'

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch className='select-news' placeholder="Select a Crypto Category" optionFilterProp='children' onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews.articles.slice(0, count).map((news, i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.link} target="_blank" rel="noreferrer">
                            <div className='news-image-container'>
                                <Title className='news-title' level={4}>{news.title}</Title>
                                <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={news?.media || "https://image.pitchbook.com/DlMZgQFSsTWGWgfPpCuX5hrhWt01574516088653_200x200"} alt="news" />
                            </div>
                            <p>{news.summary.length > 300 ? `${news.summary.substring(0, 300)}...` : news.summary}</p>
                            <div className="provider-container">
                                <div>
                                    <Text className="provider-name">{news?.author}</Text>
                                </div>
                                <Text>{moment(news.published_date).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
