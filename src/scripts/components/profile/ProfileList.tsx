import React, { useState } from 'react'
import ProfileService from '../../services/ProfileService'
import { Divider, Table, Popconfirm, Button } from 'antd'
// eslint-disable-next-line no-unused-vars
import { ColumnProps } from 'antd/lib/table'
// eslint-disable-next-line no-unused-vars
import { Profile } from '../../models/Profile'

export const ProfileList: React.FunctionComponent<any> = (props: any) => {
  const [pageSize] = useState(10)
  const [dataSource, setDataSource] = useState(ProfileService.getAll())
  const columnsData: ColumnProps<Profile>[] = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.id - b.id
    }, {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName!.localeCompare(b.firstName!),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName!.localeCompare(b.lastName!),
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
      render: (text: any, record: any) => {
        return (
          <span >
            <a onClick={() => handleEdit(record.id)}>Edit</a>
            <Divider type='vertical' />
            <Popconfirm title='Are you sure to delete?' onConfirm={() => handleDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
          </span >
        )
      }
    }
  ]
  const [columns] = useState(columnsData)

  const handleDelete = (id: number) => {
    console.log('handleDelete')
    ProfileService.deleteById(id)
    setDataSource(ProfileService.getAll())
  }

  const handleEdit = (record: any) => {
    console.log('handleEdit')
  }

  const handleNewProfile = () => {
    console.log('handleNewProfile')
  }

  const datas = { pageSize, columns, dataSource }
  return (
    <div>
      <div className='table-operations'>
        <Button onClick={handleNewProfile}>New Profile</Button>
      </div>
      <Table<Profile> {...datas} rowKey='id' />
    </div>
  )
}
