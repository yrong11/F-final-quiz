import React from 'react';
import { Button, Form, Input, message, Spin } from "antd";
import { Link } from 'react-router-dom';
import　{addTrainer} from '../../utils/http/actions'
import './create.scss'

class CreateTrainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false
    }
  }

  handleSubmit = async (value) => {
    this.handleLoading()
    console.log(value)
    try {
      const response = await addTrainer(value);
      if (response.status == 201) {
        message.success("添加讲师成功！");
      } else {
        message.error("添加讲师失败！")
      }
    } catch (e) {
      message.error("服务器端连接失败！")
    }
    this.handleLoading()
  }

  handleLoading = () => {
    this.setState({
      isloading: !this.state.isloading
    })
  }

  render() {
    const layout = { labelCol: { span: 4 }, wrapperCol: { span: 18 } }

    return (
      <div className='add-trainee-container'>
        <Spin spinning={this.state.isloading}>
          <h4>添加讲师</h4>
          <Form
            {...layout}
            size='large'
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.handleSubmit}
          >
            <Form.Item
              className="from-item"
              label="姓名:"
              name="name"
              rules={[{ required: true, message: '此项为必填' }]}
            >
              <Input size='large' />
            </Form.Item>
            <Form.Item
              className='trainee-btn'
            >
              <Button type="primary" htmlType="submit" >提交</Button>
              <Link exact="true" to="/" ><Button >取消</Button></Link>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    );
  }

}

export default CreateTrainer;