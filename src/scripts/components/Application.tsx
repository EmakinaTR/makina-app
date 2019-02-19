import * as React from 'react'
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navigation } from './layout'
import { Home } from './Home'
import { ProfileList } from './profile'
import { OrganizationList } from './organization'
import { JobOpeningList, JobCandidateList, JobAssessmentList } from './job'

export default function Application () {
  const [ drawerOpen, setDrawerOpen ] = React.useState(true)

  const toggleDrawer = function () {
    setDrawerOpen(!drawerOpen)
  }

  const mainMenuItems = [
    {
      path: '/',
      name: 'Home',
      icon: 'home'
    },
    {
      path: '/profiles',
      name: 'Profiles',
      icon: 'user'
    },
    {
      path: '/organizations',
      name: 'Organizations',
      icon: 'gold'
    },
    {
      name: 'Recruitment',
      icon: 'bars',
      children: [
        {
          path: '/jobopenings',
          name: 'Openings',
          icon: 'bars'
        },
        {
          path: '/jobcandidates',
          name: 'Candidates',
          icon: 'bars'
        },
        {
          path: '/jobassassments',
          name: 'Assessments',
          icon: 'bars'
        }
      ]
    }
  ]

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
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider
          trigger={null}
          collapsible
          collapsed={!drawerOpen}
        >
          <div className='app-logo'>
            <h2>{ drawerOpen ? 'Makina' : 'M' }</h2>
          </div>
          <Navigation items={mainMenuItems} />
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
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}>
            <Route exact path='/' component={Home} />
            <Route path='/profiles' component={ProfileList} />
            <Route path='/organizations' component={OrganizationList} />
            <Route path='/jobopenings' component={JobOpeningList} />
            <Route path='/jobcandidates' component={JobCandidateList} />
            <Route path='/jobassassments' component={JobAssessmentList} />
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  )
}
