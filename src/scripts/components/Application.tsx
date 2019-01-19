import * as React from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'

export default function Application () {
  const [ drawerOpen, setDrawerOpen ] = React.useState(true)

  const toggleDrawer = function () {
    setDrawerOpen(!drawerOpen)
  }

  const avatarMenu = (
    <Menu>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='#'>Edit Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a target='_blank' rel='noopener noreferrer' href='#'>Sign out</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider
        trigger={null}
        collapsible
        collapsed={!drawerOpen}
      >
        <div className='app-logo'>
          <h2>{ drawerOpen ? 'Makina' : 'M' }</h2>
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          <Menu.Item key='1'>
            <Icon type='user' />
            <span>Profiles</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='video-camera' />
            <span>Job Openings</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='upload' />
            <span>Candidates</span>
          </Menu.Item>
          <Menu.SubMenu
            key='sub1'
            title={<span><Icon type='user' /><span>Assessments</span></span>}
          >
            <Menu.Item key='3'>Sections</Menu.Item>
            <Menu.Item key='4'>Questions</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ padding: 0 }}>
          <div className='row between-xs'>
            <div className='col-xs-2'>
              <div className='box'>
                <Icon
                  className='app-drawer-trigger'
                  type={drawerOpen ? 'menu-fold' : 'menu-unfold'}
                  onClick={toggleDrawer}
                />
              </div>
            </div>
            <div className='col-xs-2'>
              <div className='box' />
            </div>
            <div className='col-xs-2'>
              <div className='row end-xs'>
                <div className='col-cs-12'>
                  <Dropdown overlay={avatarMenu} placement='bottomRight'>
                    <div style={{ marginRight: '1em' }}>
                      <Avatar icon='user' />
                      <span className='light-text' style={{ margin: '0.5em' }}>Jane Doe</span>
                    </div>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </Layout.Header>
        <Layout.Content style={{
          margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
        }}
        >
            Content
        </Layout.Content>
      </Layout>
    </Layout>
  )
}
