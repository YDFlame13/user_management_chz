import React, { useEffect } from 'react'
import {
  useNavigate,
  useLocation,
  useSearchParams,
  Outlet,
} from 'react-router-dom'

import { Layout, Menu } from 'antd'

import homeimg from '../../assets/images/home/home.png'
import studentimg from '../../assets/images/home/student.png'

import styles from './index.module.css'

const { Header, Content, Footer, Sider } = Layout

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log(location)
  // console.log(searchParams.get("theme"))
  const theme = searchParams.get('theme')

  useEffect(() => {
    return () => {}
  })
  return (
    <Layout className={styles.root}>
      <Header className={[styles.header, styles['header' + theme]].join(' ')}>
        <img src={studentimg} alt="student" />
        <p>Web技术课程演示系统</p>
        <img src={homeimg} alt="home" />
      </Header>
      <Content>
        <Layout className={styles.content}>
          <Sider
            className={styles['sider' + theme]}
            breakpoint="md"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              // console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type)
            }}
          >
            <div />
            <Menu
              mode="inline"
              defaultSelectedKeys={[location.pathname + location.search]}
              className={styles['menu' + theme]}
              onOpenChange={(a, b) => {
                console.log(1)
              }}
            >
              <Menu.Item
                key={`/home?theme=${theme}`}
                onClick={() => {
                  navigate(`/home?theme=${theme}`)
                }}
              >
                首页
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => {
                  navigate(`${location.pathname}?theme=Blue`)
                }}
              >
                深蓝
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  navigate(`${location.pathname}?theme=Yellow`)
                }}
              >
                橘黄
              </Menu.Item>
              <Menu.Item
                key={`/home/students?theme=${theme}`}
                onClick={() => {
                  navigate(`/home/students?theme=${theme}`)
                }}
              >
                用户管理
              </Menu.Item>
              <Menu.Item key="5">文章管理</Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => {
                  navigate('/forgetpassword')
                }}
              >
                修改密码
              </Menu.Item>
            </Menu>
          </Sider>
          <Outlet></Outlet>
        </Layout>
      </Content>
      <Footer className={[styles.footer, styles['footer' + theme]].join(' ')}>
        武汉理工大学 ©2022 Created by ChenHaizhen
      </Footer>
    </Layout>
  )
}

export default Home
