import React from 'react';
import "antd/dist/antd.css"
import "./Blog.css";
import Info from "./Info.js";
import { Layout, Menu, Breadcrumb, Image, Divider, Row, Col, Card } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, PlayCircleOutlined, SmileOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;

const infos = [
  {
      title:"Baby Octopus",
      image_url:"https://www.discoveranimals.co.uk/wp-content/uploads/Pumpkin-Sea-Life-Brighton-10-2.jpg"
  },
  {
      title:"Sea Slug",
      image_url:"https://www.uwphotographyguide.com/sites/default/files/DC2000-macrotest-1%281%29.jpg"
  },
  {
      title:"Sunny Fish",
      image_url:"https://www.uwphotographyguide.com/sites/default/files/SeaLifeIndo_Yudi_macro-2.jpg"
  }
]

function Blog (){
    return(
      <Layout>
      <Header className="header">      
   
      </Header>
      
      <Layout>

        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
                  <div className="logo" />
        <div class="Bloglogo">
                    <img src="https://image.freepik.com/free-vector/awesome-colorful-fish-logo-template-beauty-fish-logo-abstract-fish-logo-modern-fish-logo_144543-274.jpg" 
                        height={200}/>
                    </div>    
            <SubMenu key="sub1" icon={<UserOutlined />} title="Who Are We">
              <Menu.Item key="1">How It All Started</Menu.Item>
              <Menu.Item key="2">Meet the Team</Menu.Item>
              <Menu.Item key="3">Completed Projects</Menu.Item>
              <Menu.Item key="4">Future Projects</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="What We Do">
              <Menu.Item key="5">Fish Conservation Programs</Menu.Item>
              <Menu.Item key="6">Educating Fishers</Menu.Item>
              <Menu.Item key="7">The FineFish School</Menu.Item>
              <Menu.Item key="8">The Results so Far</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="Contact Us">
              <Menu.Item key="9">Business Inquiries</Menu.Item>
              <Menu.Item key="10">Community Pages</Menu.Item>
              <Menu.Item key="11">Come Visit the HQ!</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <h1> THE COLORFUL FISH SANCTUARIUM </h1>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <h2>Fish are our friends!, so we must keep the seas clean in order to preserve sealife. </h2>
              <h2>Please support our environmental conservation activities in order to preserve sealife for future generations. </h2>
              <br></br>
              <iframe width="900" height="506" src="https://www.youtube.com/embed/cC9r0jHF-Fw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
                        
    <Row>
      <Col span={24}>Images of these beautiful, beautiful animals</Col>
    </Row>

    <Row>{infos.map(info => {
                            return (
                                <Info infos={infos} />
                            )
                        })}
    </Row>

    <Row>
      <br></br>    <br></br>    <br></br>
      <Col span={10}> Turtles are amazing!

      </Col>
      <Col span={14}>.<SmileOutlined />
      <Image
             width={600}
             src=" https://www.tastecafeatchesilbeach.co.uk/public/images/sealife%20centre.png"
            />
      </Col>
    </Row>                  
                            <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider plain>Text</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </>,
           <Image
             width={300}
             src=" https://www.talk-business.co.uk/wp-content/uploads/2017/02/shutterstock_220546063.jpg"
            />
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <Image
            width={200}
            src="https://burntwood.com/wp-content/uploads/2015/09/Why-Catch-Release-Is-The-Solid-Fishing-Practice.jpg"
            />

   
          </Content>
        </Layout>
      </Layout>
    </Layout>




);
}


export default Blog;
