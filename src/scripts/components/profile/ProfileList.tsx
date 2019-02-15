import * as React from 'react'
import ProfileService from '../../services/ProfileService'
import { Divider, Table, Popconfirm, Button } from 'antd'

export class ProfileList extends React.Component {
  state = {
    dataSource: [],
    columns: [],
    pageSize: 10
  }

  componentDidMount () {
    const columns = [{
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    }, {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a: any, b: any) => a.firstName!.localeCompare(b.firstName!),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a: any, b: any) => a.lastName!.localeCompare(b.lastName!),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Birthdate',
      dataIndex: 'birthDate',
      key: 'birthDate',
      render (value: Date) {
        return value.toLocaleDateString()
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Place',
      dataIndex: 'place.name',
      key: 'place.name',
      sorter: (a: any, b: any) => a.place!.name!.localeCompare(b.place!.name!),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Place Type',
      dataIndex: 'place.type',
      key: 'place.type'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (
        <span>
          <a href='javascript:;' onClick={this.handleEdit}>Edit</a>
          <Divider type='vertical' />
          <Popconfirm title='Are you sure to delete?' onConfirm={() => this.handleDelete(record.id)}>
            <a href='javascript:;'>Delete</a>
          </Popconfirm>
        </span>
      )
    }]

    this.setState({
      dataSource: ProfileService.getAll(),
      columns
    })
  }

  handleNewProfile = () => {
    console.log('handleNewProfile')
  }

  handleEdit = () => {
    console.log('handleEdit')
  }

  handleDelete = (id: number) => {
    ProfileService.deleteById(id)
    this.setState({
      dataSource: ProfileService.getAll()
    })
  }

  render () {
    const { columns, pageSize, dataSource } = this.state
    return (
      <div>
        <h2>Profiles</h2>
        <div className='table-operations'>
          <Button onClick={this.handleNewProfile}>New Profile</Button>
        </div>
        <Table columns={columns} dataSource={dataSource} pagination={{ pageSize }} />
      </div >
    )
  }
}

export default ProfileList
