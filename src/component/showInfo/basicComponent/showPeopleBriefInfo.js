import React, { Component } from 'react';
import { message, List, Popover, Button } from 'antd';
import './peopleBriefInfo.scss'

class ShowPeopleBasciInfo extends Component {
  render() {
    const { item } = this.props
    const content = (
      <div className="popver-content">
        <p>name:{item.id}</p>
        <p>email:{item.email}</p>
        <p>office:{item.office}</p>
        <p>zoomId:{item.zoomId}</p>
        <p>github:{item.github}</p>
        <p>id:{item.id}</p>
      </div>
    )
    return item.id !== -1 ? <Popover content={content}>
      <p className="people-info" >{`${item.id}.${item.name}`}</p>
    </Popover> :
      <button className="add-people-input">+添加学员</button>
  }
}

export default ShowPeopleBasciInfo;
