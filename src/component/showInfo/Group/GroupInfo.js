import React, { Component } from 'react';
import ShowPeopleBasciInfo from '../basicComponent/showPeopleBriefInfo';
import { List } from 'antd';
import './group.scss'
import TrainerInfo from '../basicComponent/TrainerInfo';

class GroupInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      group: this.props.group
    }
  }

  handleKeyUp = (e) => {
    e.preventDefault()
    console.log(this.state.group)
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.props.onChange(e.target.value, this.state.group.id)
    }

  }

  handleChange = (e) => {
    e.preventDefault()
    this.state.group.name = e.target.value
    this.setState({
      group: this.state.group
    })
  }

  render() {
    return <div className='group-info'>
      <div className="group-info-header">
        <input className="group-name-input" type='text' value={this.state.group.name}
          onKeyUp={this.handleKeyUp} onChange={this.handleChange}
        />
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={this.state.group.trainers}
          renderItem={itm => (
            <List.Item>
              <TrainerInfo
                key={itm.id}
                item={itm}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="group-people">
        <List
          grid={{ gutter: 16, column: 7 }}
          dataSource={this.state.group.trainees}
          renderItem={itm => (
            <List.Item>
              <ShowPeopleBasciInfo
                key={itm.id}
                item={itm}
              />
            </List.Item>
          )}
        />
      </div>

    </div>
  }
}

export default GroupInfo;
