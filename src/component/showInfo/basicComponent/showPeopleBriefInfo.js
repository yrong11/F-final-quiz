import React, { Component } from 'react';
import { Popover } from 'antd';
import { Link } from 'react-router-dom';
import './peopleBriefInfo.scss'

// TODO 可以改写成函数时组件
class ShowPeopleBasciInfo extends Component {
  render() {
    // TODO 冗余的变量 addTrainee
    const { item, addTrainee } = this.props
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
      <Link exact="true" to='/create'><button className="add-people-input">+添加学员</button></Link>
  }
}

export default ShowPeopleBasciInfo;
