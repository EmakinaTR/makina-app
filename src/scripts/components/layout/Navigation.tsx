import * as React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'

export interface NavigationItem {
  path?: string,
  name: string,
  icon?: string,
  children?: NavigationItem[]
}

export interface NavigationProps {
  items: NavigationItem[]
}

export const Navigation: React.FunctionComponent<NavigationProps> = (props: NavigationProps) => {
  const renderItem = (item: NavigationItem) => {
    if (item.children) {
      return (
        <Menu.SubMenu
          key={item.name}
          title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}
        >
          { item.children.map(child => renderItem(child)) }
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={item.path}>
        <Link to={item.path!}>
          <Icon type={item.icon} />
          <span>{item.name}</span>
        </Link>
      </Menu.Item>
    )
  }

  return (
    <Menu theme='dark' mode='inline' defaultSelectedKeys={[]}>
      {
        props.items.map(item => renderItem(item))
      }
    </Menu>
  )
}
