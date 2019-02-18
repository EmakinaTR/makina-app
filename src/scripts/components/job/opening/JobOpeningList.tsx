import * as React from 'react'
import { Button, Card, Icon, Input, Select } from 'antd'
import { FormModal } from '../../modal'
import { JobOpeningForm } from './JobOpeningForm'
import { JobOpeningMeta } from './JobOpeningMeta'
import { JobOpeningService } from '../../../services'
import { JobOpeningState } from '../../../models'

const Search = Input.Search
const Option = Select.Option

export class JobOpeningList extends React.Component {
  state = {
    visible: false,
    dataSource: JobOpeningService.getBy(0, 5)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  fetchPreviousOpenings = () => {
    console.log('fetchPreviousOpenings clicked')
  }

  handleChange = () => {
    console.log('handleChange')
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

  createJobOpeningStateOptions = () => {
    let keys = Object.keys(JobOpeningState).filter((key: any) => isNaN(key))
    keys.unshift('All States')
    return keys.map(key => {
      return (
        <Option value={key}>{key}</Option>
      )
    })
  }

  createJobOpeningStateSelect = () => {
    return (
      <Select
        defaultValue='All States'
        className='width-200 margin-r-8'
        onChange={this.handleChange}>
        {this.createJobOpeningStateOptions()}
      </Select>
    )
  }

  createHeader = () => {
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>Create</Button>
        {this.createJobOpeningStateSelect()}
        <Search
          className='width-300 margin-r-8'
          placeholder='Search any keyword'
          onSearch={value => console.log(value)}
          enterButton
        />
        <Button onClick={this.fetchPreviousOpenings} className='margin-r-8'>List Previous Openings</Button>
      </div>
    )
  }

  render () {
    return (
      <div>
        <h2>Openings</h2>
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
