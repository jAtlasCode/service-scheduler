import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import "../../styles/layout.css";
import PickerWidget from "../Picker/Index";

const { Header, Content, Footer } = Layout;

interface Props {}

const AppLayout: React.FC<Props> = () => {
  const [state, setState] = useState(undefined);
  useEffect(() => {}, []);

  return (
    <Layout className="layout">
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: "1", label: "Nav Item 1" },
            { key: "2", label: "Nav Item 2" },
            { key: "3", label: "Nav Item 3" },
          ]}
        />
      </Header>
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
