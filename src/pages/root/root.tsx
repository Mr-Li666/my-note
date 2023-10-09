import {
  AppstoreOutlined,
  DatabaseOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('数据结构', 'dataStructure', <DatabaseOutlined />, [
    getItem('栈', '/stack'),
    getItem('队列', '/quene'),
    getItem('单向链表', '/singlyLink'),
    getItem('双向链表', '/bidirectionLink'),
    getItem('二叉搜索树', '/binarySearchTree'),
  ]),
  getItem('算法', 'algorithm', <AppstoreOutlined />, [
    getItem('算法复杂度', '/complexity'),

    getItem('排序算法', 'sort-algorithm', null, [
      getItem('冒泡排序', '/bubbleSort'),
      getItem('插入排序', '/insertSort'),
      getItem('选择排序', '/chooseSort'),
      getItem('快速排序', '/quickSort'),
    ]),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['dataStructure', 'algorithm'];
const dataStructures = [
  '/stack',
  '/quene',
  '/singlyLink',
  '/bidirectionLink',
  '/binarySearchTree',
];
const algorithms = ['/bubbleSort', '/insertSort', '/chooseSort', '/quickSort'];

export function Root() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const Location = useLocation();

  const [openKeys, setOpenKeys] = useState(['dataStructure']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick = (e) => {
    // console.log(e.key);
    navigate(e.key);
  };

  return (
    <div className="Root flex h-[100vh]">
      <Layout>
        <Header
          style={{ display: 'flex', alignItems: 'center', background: colorBgContainer }}
        >
          <div className="demo-logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
          /> */}
        </Header>
        <Layout>
          <Sider style={{ background: colorBgContainer }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[Location.pathname]}
              defaultOpenKeys={[
                dataStructures.includes(Location.pathname)
                  ? 'dataStructure'
                  : 'algorithm',
              ]}
              // style={{ width: 256 }}
              items={items}
              onClick={onClick}
            />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                // background: colorBgContainer,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
      {/* <div id="sidebar">
        <Menu
          mode="inline"
          defaultSelectedKeys={[Location.pathname]}
          defaultOpenKeys={[
            dataStructures.includes(Location.pathname) ? 'dataStructure' : 'algorithm',
          ]}
          style={{ width: 256 }}
          items={items}
          onClick={onClick}
        />
      </div>
      <div id="detail">
        <Outlet />
      </div> */}
    </div>
  );
}
