import React, { Component } from 'react';
import { message } from 'antd';
import {getGroupList} from '../../../utils/http/actions'
import GroupInfo from './GroupInfo'
import './group.scss'

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    }
  }

  componentDidMount() {
    this.getGroups()
  }

  getGroups = async () => {
    try {
      const response = await getGroupList()
      if (response.status !== 200) {
        message.error(response.data.message)
      }
      this.setState({
        groups: response.data
      })
    } catch (e) {
      message.error('获取学员分组列表失败')
    }
  }

  render() {
    const data = this.state.groups
    console.log(data)
    return (
      <div className="group-list">
        <div className="group-header">
          <h2>分组列表</h2>
          <button type='button'>分组学员</button>
        </div>
        
        {data.map((group) =>
        <GroupInfo key={group.id} group={group} />
        )}
      </div>
    );
  }
}

export default GroupList;
