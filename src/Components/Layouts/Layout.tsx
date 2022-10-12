import React, { useState, useEffect } from "react";
import { Col, Layout, Menu, Row } from "antd";
import type { MenuProps } from "antd";
import "../../styles/layout.css";
import PickerWidget from "../Picker/Index";
import {
  AppstoreOutlined,
  BackwardOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import PCR_logo from "../../images/PCR_vbrand.png";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "mail",
    icon: <HomeOutlined />,
  },
  {
    label: "Contact",
    key: "contact",
    icon: <PhoneOutlined />,
  },
  {
    label: "Help",
    key: "SubMenu",
    icon: <CustomerServiceOutlined />,
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];

interface Props {}

const LayoutHeader: React.FC<any> = ({ logo, siteUrl }) => {
  // todo: navigate to home page of company website
  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        height: "66px !important",
      }}
    >
      <Row justify="start" align="middle" style={{ width: "100%" }}>
        <Col span={1.5} style={{ textAlign: "left" }}>
          <span className="brandContainer">
            <img
              src={logo}
              alt="companyBrandImage"
              width={80}
              height={32}
              style={{ margin: "8px 24px 16px 0" }}
            />
          </span>
        </Col>
        <Col span={16}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
          />
        </Col>
      </Row>
    </Header>
  );
};

const AppLayout: React.FC<Props> = () => {
  const [state, setState] = useState(undefined);
  // useEffect(() => {}, []);

  return (
    <Layout className="layout">
      <LayoutHeader logo={PCR_logo} />
      <Content
        className="layout-content"
        // style={{ padding: "0 50px", marginTop: 64 }}
      >
        <PickerWidget />
      </Content>
      <Footer className="layout-footer">Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
