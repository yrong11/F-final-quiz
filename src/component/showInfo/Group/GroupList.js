import React, { Component } from 'react';
import { message } from 'antd';
import { getGroupList, divideGroups, updateGroupName } from '../../../utils/http/actions'
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

  grouping = async () => {
    try {
      const response = await divideGroups()
      if (response.status !== 200) {
        message.error(response.data.message)
      } else {
        this.setState({
          groups: response.data
        })
      }
    } catch (e) {
      message.error('学员分组失败')
    }
  }

  handleUpdateGroupName = async (value, id) => {
    try {
      const response = await updateGroupName(value, id)
      if (response.status !== 200) {
        message.error(response.data.message)
      } else {
        message.success("修改组名成功")
        await this.getGroups()
      }
    } catch (e) {
      message.error('修改组名失败')
    }


  }

  render() {
    const data = this.state.groups
    return (
      <div className="group-list">
        <div className="group-header">
          <h2>分组列表</h2>
          <button type='button' onClick={this.grouping}>分组学员</button>
        </div>

        {data.map((group) =>
          <GroupInfo key={group.id} group={group} onChange={this.handleUpdateGroupName.bind(this)} />
        )}
      </div>
    );
  }
}

export default GroupList;
