import * as React from 'react'
import { Button, Divider, Table } from 'antd'
import { OrganizationService } from '../../services'

export class OrganizationList extends React.Component {
  state = {
    dataSource: OrganizationService.getAll(),
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Place',
      dataIndex: 'place.name',
      key: 'place'
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    }, {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone'
    }, {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <a href='javascript:;' onClick={this.edit}>Edit</a>
          <Divider type='vertical' />
          <a href='javascript:;' onClick={this.delete}>Delete</a>
        </span>
      )
    }]
  }
  add = () => {
    console.log('add clicked')
  }
  edit = () => {
    console.log('edit clicked')
  }
  delete = () => {
    console.log('delete clicked')
  }
  render () {
    return (
      <div>
        <h2>Organizations</h2>
        <div>
          <div className='table-operations'>
            <Button onClick={this.add}>Add</Button>
          </div>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    )
  }
}
