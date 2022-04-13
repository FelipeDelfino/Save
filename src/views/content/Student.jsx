import React, { useState } from "react";
import { List, Avatar, Button, Skeleton, Select, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import './Student.css'
import { ReactDOM, mountNode } from "react";
import { Card } from 'antd';
import CreateStudent from "../../components/layout/CreateStudent";
import { Modal } from 'antd';
import { Form, Input, Checkbox } from 'antd';



const { Option } = Select;
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

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
            <Button type="primary" onClick={showModal}>
                New Student
            </Button>
            <Modal title="Create New Student" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="username"
                        rules={[{ required: true, message: 'Please input your full Name!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="CPF"
                        name="cpf"
                        rules={[{ required: true, message: 'Please input your CPF!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option!"
                            allowClear
                        >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                        </Select>
                    </Form.Item >
                    <Form.Item
                        label="Date of Birth"
                        name="date of birth"
                        rules={[{ required: true, message: 'Please input your Date Birth!' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item 
                        label="School"
                        name="school"
                        rules={[{ required: true, message: 'Please input your School!' }]}>
                        
                        <Select>
                            <Select.Option value="school">School 1</Select.Option>
                        </Select>
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


class Student extends React.Component {



    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };



    componentDidMount() {
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    initLoading: false,
                    data: res.results,
                    list: res.results,
                });
            });
    }

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat(
                [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })),
            ),
        });
        fetch(fakeDataUrl)
            .then(res => res.json())
            .then(res => {
                const data = this.state.data.concat(res.results);
                this.setState(
                    {
                        data,
                        list: data,
                        loading: false,
                    },
                    () => {
                        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                        // In real scene, you can using public method of react-virtualized:
                        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                        window.dispatchEvent(new Event('resize'));
                    },
                );
            });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: 'https://ant.design',
                title: `ant design part ${i}`,
                avatar: 'https://joeschmoe.io/api/v1/random',
                description:
                    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content:
                    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
            });
        }
        return (
            <Card className="Cardmove" style={{  }}>
                <List
                    className="demo-loadmore-list"
                    loading={initLoading}
                    itemLayout="horizontal"
                    dataSource={list}
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    renderItem={item => (
                        <List.Item
                            actions={[<Button key="list-loadmore-edit">Edit</Button>, <Button danger key="list-loadmore-more">Delete</Button>]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.picture.large} />}
                                    title={<a href="">{item.name.last}</a>}
                                    description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam repellendus dolorem natus, harum fuga officiis, delectus placeat consectetur a illo, maiores ducimus accusamus quos distinctio id? Voluptates maiores natus hic. Ipsom "
                                />

                            </Skeleton>
                        </List.Item>
                    )}
                />
                <CS />
            </Card>
        );
    }
}








export default Student