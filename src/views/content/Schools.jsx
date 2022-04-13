import React, {useState} from "react";
import './Schools.css'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Form, Row} from "antd";
import { Modal, Select } from "antd";
import { Input, DatePicker } from "antd";




const { Option } = Select;
const { Meta } = Card;
const CS = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>
            <Button type="primary" onClick={showModal} style={{marginTop:'50px'}}>
                New School
            </Button>
            <Modal title="Create New School" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 7 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="username"
                        rules={[{ required: true, message: 'Please input full Name of School!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="CNPJ"
                        name="cnpj"
                        rules={[{ required: true, message: 'Please input CNPJ!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Foundation Date"
                        name="fundation date"
                        rules={[{ required: true, message: 'Please input Fundation Date!' }]}>
                        <DatePicker />
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};




const School = props => (

    <Card className='School'>
        <Row className="cards">
            <Col>
                <Card
                    className='CardSchool'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://media.baamboozle.com/uploads/images/119974/1622419859_44032_url.jpeg" />}
                >
                    <Meta title="School City 1" description="www.School.com" />
                </Card>
            </Col>
            <Col>
                <Card
                    className='CardSchool'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://media.baamboozle.com/uploads/images/119974/1622419859_44032_url.jpeg" />}
                >
                    <Meta title="School City 2" description="www.School.com" />
                </Card>
            </Col>
            <Col>
                <Card
                    className='CardSchool'
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="https://media.baamboozle.com/uploads/images/119974/1622419859_44032_url.jpeg" />}
                >
                    <Meta title="School City 3" description="www.School.com" />
                </Card>
            </Col>

        </Row>
        <Row className='mt-3'>
            
            <CS/>
        </Row>
    </Card>

)
export default School