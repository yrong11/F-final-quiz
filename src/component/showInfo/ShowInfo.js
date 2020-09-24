import React, { Component } from 'react';
import TraineeList from './Trainee/TraineeList'
import GroupList from './Group/GroupList'
import TrainerList from './Trainer/TrainerList'

class ShowInfo extends Component {
  render() {
    return (
      <div className="show-info">
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default ShowInfo;
