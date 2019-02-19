import * as React from 'react'
import { Button, Divider, Table, Input } from 'antd'
import JobAssessmentService from '../../../services/JobAssessmentService'

/*
 * TODO
 * - Assigned who?
 * - Review status
 */

const Search = Input.Search

export class JobAssessmentList extends React.Component {
  state = {
    visible: false,
    dataSource: JobAssessmentService.getBy(0, 5),
    columns: [{
      title: 'Title',
      dataIndex: 'title',
      key: 'job_assessment_title'
    }, {
      title: 'Content',
      dataIndex: 'content',
      key: 'job_assessment_content'
    }, {
      title: 'Action',
      key: 'action',
      render: () => (
        <span>
          <a href='javascript:;' onClick={this.assign}>Assign</a>
          <Divider type='vertical' />
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

  assign = () => {
    console.log('assign clicked')
  }

  edit = () => {
    console.log('edit clicked')
  }

  delete = () => {
    console.log('delete clicked')
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  createHeader = () => {
    return (
      <div className='table-operations'>
        <Button type='primary' onClick={this.showModal}>Create</Button>
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
        <h2>Assessments</h2>
        {this.createHeader()}
        <div>
          <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={{ pageSize: 5 }} />
        </div>
      </div>
    )
  }
}
