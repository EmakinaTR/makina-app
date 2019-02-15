import * as React from 'react'
import { Modal } from 'antd'

export class FormModal extends React.Component<any, any> {
  constructor (props: any) {
    super(props)
    this.state = {
      visible: props.visible
    }
  }

  componentWillReceiveProps (nextProps: any) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({ visible: nextProps.visible })
    }
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    return (
      <Modal
        title='Create New Job Opening'
        visible={this.state.visible}
        onOk={this.handleOk}
        okText='Create'
        onCancel={this.handleCancel}
        cancelText='Discard'
      >
        {this.props.children}
      </Modal>
    )
  }
}
