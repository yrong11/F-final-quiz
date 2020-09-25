import React, { Component } from 'react';
import { message, List} from 'antd';
import {getTrainerList} from '../../../utils/http/actions'
import TrainerInfo from '../basicComponent/TrainerInfo'

// TODO Trainer与Trainee list内容重复度高，思考可否抽取复用？
class TrainerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    }
  }

  componentDidMount() {
    this.getTrainers()
  }

  getTrainers = async () => {
    try {
      const response = await getTrainerList()
      if (response.status !== 200) {
        message.error(response.data.message)
      }
      const traineesData = response.data
      console.log(traineesData)
      traineesData.push({ 'id': -1, "name": "+添加讲师" })
      this.setState({
        trainees: traineesData
      })
    } catch (e) {
      message.error('error')
    }
  }

  // TODO 方法名称不对，且要去掉空方法
  addTrainee = () => {

  }


  render() {
    return <div className="trainee-list">
      <h2>讲师列表</h2>
      <List
        grid={{ gutter: 16, column: 8 }}
        dataSource={this.state.trainees}
        renderItem={item => (
          <List.Item>
            <TrainerInfo item={item}/>
          </List.Item>
        )}
      />
    </div>
  }
}

export default TrainerList;
