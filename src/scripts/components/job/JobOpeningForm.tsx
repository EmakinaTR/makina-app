import * as React from 'react'
import { Form, Select, Input, Button } from 'antd'

const { Option } = Select

export class JobOpeningForm extends React.Component {
  handleSubmit = () => {}

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          label='Title'
          required
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='City'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
          <Select
            placeholder='Select office city'
          >
            <Option value='1'>İzmir</Option>
            <Option value='2'>İstanbul</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <Button type='primary' htmlType='submit'>
            Create
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
