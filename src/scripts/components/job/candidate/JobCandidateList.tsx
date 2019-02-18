import * as React from 'react'
import { Button, Divider, Table, Select, Input } from 'antd'
import { JobCandidateService } from '../../../services'

// @semih: "başvuru tarihine göre sıralanmış, status'e ya da position'a göre gruplanmış / gruplanabilir bir liste güzel olur"

const Option = Select.Option
const Search = Input.Search

export class JobCandidateList extends React.Component {
  state = {
    visible: false,
    dataSource: JobCandidateService.getAll(),
    columns: [{
      title: 'Candidate',
      dataIndex: 'profile.firstName',
      key: 'job_candidate_name'
    }, {
      title: 'Opening',
      dataIndex: 'jobOpening.title',
      key: 'job_opening_title'
    }, {
      title: 'State',
      dataIndex: 'state',
      key: 'job_application_state'
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

  handleChange = () => {
    console.log('handleChange')
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  createJobOpeningOptions = () => {
    let keys = ['All Openings', '.Net Developer', 'JAVA Developer', 'Financal Controller']
    return keys.map(key => {
      return (
        <Option value={key}>{key}</Option>
      )
    })
  }

  createJobOpeningSelect = () => {
    return (
      <Select
        defaultValue='All Openings'
        className='width-200 margin-r-8'
        onChange={this.handleChange}>
        {this.createJobOpeningOptions()}
      </Select>
    )
  }

  createHeader = () => {
    return (
      <div className='table-operations'>
        <Button type='primary' onClick={this.showModal}>Create</Button>
        {this.createJobOpeningSelect()}
        <Search
          className='width-300 margin-r-8'
          placeholder='Search any keyword'
          onSearch={value => console.log(value)}
          enterButton
        />
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Candidates</h2>
        {this.createHeader()}
        <div>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    )
  }
}
