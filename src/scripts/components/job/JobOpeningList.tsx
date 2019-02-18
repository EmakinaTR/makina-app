import React from 'react'
import { Button, Card, Icon, Input, Radio } from 'antd'
import { FormModal } from '../modal'
import { JobOpeningForm } from './JobOpeningForm'
import { JobOpeningMeta } from './JobOpeningMeta'
import { JobOpeningService } from '../../services'
import { JobOpeningState } from '../../models'

const Search = Input.Search

export class JobOpeningList extends React.Component {
  state = {
    visible: false,
    dataSource: JobOpeningService.getAll()
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  fetchPreviousOpenings = () => {
    console.log('fetchPreviousOpenings clicked')
  }

  createCardList = () => {
    return this.state.dataSource.map((x: any) => {
      return (
        <Card
          key={x.id}
          className='job-openings-card width-300'
          actions={[<Icon type='edit' />, <Icon type='delete' />, <Icon type='ellipsis' />]}
        >
          <JobOpeningMeta
            title={x.title}
            experience={x.experience}
            state={x.state}
            content={x.content}
            expiresAt={x.expiresAt} />
        </Card>
      )
    })
  }

  createStateRadioList = () => {
    let keys = Object.keys(JobOpeningState).filter((key: any) => isNaN(key))
    return keys.map(key => {
      return (
        <Radio.Button value={key} key={key}>{key}</Radio.Button>
      )
    })
  }

  createStateRadioGroup = () => {
    return (
      <Radio.Group defaultValue='a' buttonStyle='solid'>
        {this.createStateRadioList()}
      </Radio.Group>
    )
  }

  createHeader = () => {
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>Create</Button>
        <Button onClick={this.fetchPreviousOpenings}>List Previous Openings</Button>
        <Search
          className='width-300 margin-r-8'
          placeholder='Job title'
          onSearch={value => console.log(value)}
          enterButton
        />
        {this.createStateRadioGroup()}
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Job Openings</h2>
        {this.createHeader()}
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
