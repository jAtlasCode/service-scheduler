import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Space,
  Typography,
  Card,
  Steps,
  Button,
  Collapse,
  Divider,
  Tooltip,
  Form,
  Input,
  Select,
} from "antd";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

interface Props {}

const ServiceSelector = () => {
  const [step, setStep] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);

  // const service

  return (
    <>
      {servicePanels.map((service) => (
        <Row justify="center" key={service.key} style={{ marginBottom: 16 }}>
          <Col span={6} style={{ textAlign: "left" }}>
            <Button type="primary">{service.header}</Button>
          </Col>
        </Row>
      ))}
    </>
  );
};

const PickerWidget: React.FC<Props> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  // useEffect(() => {}, []);

  const nextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1);
  };

  const backStep = () => {
    setCurrentStep((currentStep) => currentStep - 1);
  };

  return (
    <div className="container">
      <Row justify="center">
        <Col span={20}>
          <Card>
            <Row>
              <Col span={24}>
                <Steps current={currentStep}>
                  {steps.map((step) => (
                    <Step title={step.title} key={step.title} />
                  ))}
                </Steps>
              </Col>
              {/* <Divider /> */}
            </Row>

            <Row justify="center" style={{ marginTop: 24 }}>
              <Col span={24}>
                <Typography.Title level={2}>Select a Service</Typography.Title>
              </Col>
              <Col span={24}>
                <ServiceSelector />
              </Col>
            </Row>

            {/* <Row style={{ marginTop: 24 }}>
              <Col span={6}>
                <Collapse>
                  {servicePanels.map((service) => (
                    <Collapse.Panel
                      header={service.header}
                      key={service.key}
                      extra={service.extra}
                    ></Collapse.Panel>
                  ))}
                </Collapse>
              </Col>
              <Col span={10}>
                <ServiceSelector />
              </Col>
            </Row> */}

            <Row style={{ marginTop: 16, bottom: 0 }}>
              <Divider />
              <Col span={12}>
                {currentStep > 0 && (
                  <Button onClick={backStep} icon={<ArrowLeftOutlined />}>
                    Back
                  </Button>
                )}
              </Col>
              <Col span={12}>
                {currentStep < 2 && (
                  <Button
                    type="primary"
                    onClick={nextStep}
                    icon={<ArrowRightOutlined />}
                  >
                    Next
                  </Button>
                )}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const steps = [
  { title: "Select Services", description: "" },
  { title: "Pick Appointment Time", description: "" },
  { title: "Checkout", description: "" },
];

const servicePanels = [
  {
    key: "carpetClean",
    header: "Carpet Cleaning",
    extra: (
      <Tooltip title="Info about Carpet Cleaning">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
  {
    key: "tileGroutClean",
    header: "Tile & Grout Cleaning",
    extra: (
      <Tooltip title="Info about Tile & Grout Cleaning">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
  {
    key: "upholsteryClean",
    header: "Upholstery Cleaning",
    extra: (
      <Tooltip title="Info about Upholstery Cleaning">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
  {
    key: "rugCleaning",
    header: "Synthetic Area Rug Cleaning",
    extra: (
      <Tooltip title="Info about Area Rug Cleaning">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
  {
    key: "carpetRepair",
    header: "Carpet Repair",
    extra: (
      <Tooltip title="Info about Carpet repair">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
  {
    key: "carpetStretch",
    header: "Carpet Re-Stretching",
    extra: (
      <Tooltip title="Info about Carpet Re stretching">
        <InfoCircleOutlined />
      </Tooltip>
    ),
  },
];

export default PickerWidget;
