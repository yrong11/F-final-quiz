import React, { Component } from 'react';
import {Popover } from 'antd';
import { Link } from 'react-router-dom';
import './peopleBriefInfo.scss'

class TrainerInfo extends Component {
  render() {
    const { item } = this.props
    const content = (
      <div className="popver-content">
        <p>name:{item.id}</p>
        <p>id:{item.id}</p>
      </div>
    )
    return item.id !== -1 ? <Popover content={content}>
      <p className="people-info" >{`${item.id}.${item.name}`}</p>
    </Popover> :
      <Link exact="true" to='/trainer/create'><button className="add-people-input">{item.name}</button></Link>
  }
}

export default TrainerInfo;
