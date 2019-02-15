import * as React from 'react'
import { Button, Card, Icon, Input } from 'antd'
import { FormModal } from '../modal'
import { JobOpeningForm } from './JobOpeningForm'

const { Meta } = Card
const Search = Input.Search

export class JobOpeningList extends React.Component {
  state = {
    visible: false,
    dataSource: [
      {
        'title': '.Net Developer',
        'description': 'İzmir'
      },
      {
        'title': 'JAVA Developer',
        'description': 'İzmir'
      },
      {
        'title': 'React Developer',
        'description': 'İzmir'
      },
      {
        'title': 'Front-end Developer',
        'description': 'İzmir'
      }
    ]
  }

  add = () => {
    console.log('add clicked')
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  fetchPreviousOpenings = () => {
    console.log('previous clicked')
  }

  createCardList = () => {
    return this.state.dataSource.map(x => {
      return (
        <Card
          key={x.title}
          className='job-openings-card width-300'
          actions={[<Icon type='edit' />, <Icon type='delete' />, <Icon type='ellipsis' />]}
        >
          <Meta
            title={x.title}
            description={x.description}
          />
        </Card>
      )
    })
  }

  render () {
    return (
      <div>
        <h2>Job Openings</h2>
        <div>
          <Button type='primary' onClick={this.showModal}>Create</Button>
          <Button onClick={this.fetchPreviousOpenings}>List Previous Openings</Button>
          <Search
            className='width-300'
            placeholder='Job title'
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
        <div>
          {this.createCardList()}
        </div>
        <FormModal visible={this.state.visible}>
          <JobOpeningForm />
        </FormModal>
      </div>
    )
  }
}
