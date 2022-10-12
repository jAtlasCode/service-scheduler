import { Form, Input, Modal } from "antd";
import { useState, useEffect } from "react";

interface Props {}

const ZipcodeModal: React.FC<Props> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  return (
    <Modal
      title="Please enter your Zip Code"
      open={open}
      centered
      onCancel={() => setOpen(false)}
    >
      <Form form={form} name="zipcodeForm" layout="vertical">
        <Form.Item label="zipcode">
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ZipcodeModal;
