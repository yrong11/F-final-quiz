import React, { Component } from 'react';
import ShowPeopleBasciInfo from '../basicComponent/showPeopleBriefInfo';
import { List } from 'antd';
import './group.scss'

class GroupInfo extends Component {
  render() {
    const { group } = this.props
    return <div className='group-info'>
      <input className="group-name-input" type='text' value={group.name} />
      <div className="group-people">
        <List
          grid={{ gutter: 16, column: 7 }}
          dataSource={group.trainees}
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
