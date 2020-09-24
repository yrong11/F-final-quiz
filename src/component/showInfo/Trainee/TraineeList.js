import React, { Component } from 'react';
import { message, List } from 'antd';
import { getTraineeList } from '../../../utils/http/actions'
import ShowPeopleBasciInfo from '../basicComponent/showPeopleBriefInfo';
class TraineeList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      trainees: [],
    }
  }

  componentDidMount() {
    this.getTrainees()
  }

  addTrainee = async(trainee) => {

  }

  getTrainees = async () => {
    try {
      const response = await getTraineeList()
      if (response.status !== 200) {
        message.error(response.data.message)
      }
      const traineesData = response.data
      console.log(traineesData)
      traineesData.push({ 'id': -1, "name": "+添加学员" })
      this.setState({
        trainees: traineesData
      })
    } catch (e) {
      message.error('error')
    }
  }

  addTrainee = () => {

  }


  render() {
    return <div className="trainee-list">
      <h2>学员列表</h2>
      <List
        grid={{ gutter: 16, column: 8 }}
        dataSource={this.state.trainees}
        renderItem={item => (
          <List.Item>
            <ShowPeopleBasciInfo item={item} addTrainee={this.addTrainee.bind(this)}/>
          </List.Item>
        )}
      />
    </div>
  }
}

export default TraineeList;
