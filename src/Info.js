import React from 'react'
import {Card, Image, Col,} from 'antd';


function Info (props) {
    return ( 
        
        <Col span={8}><Card title={props.infos.title} bordered={true}>
        <Image               height={180} style={{}}
        src={props.infos.image_url} /> <br></br><a href="url">Learn more</a>
 </Card></Col>

    )
}

export default Info;
