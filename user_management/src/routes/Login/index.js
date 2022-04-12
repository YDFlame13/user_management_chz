import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { withFormik, Form, Field, ErrorMessage } from 'formik'

import qqimg from '../../assets/images/login/QQ.png'
import wximg from '../../assets/images/login/wx.png'
import alimg from '../../assets/images/login/al.png'

import styles from './index.module.css'

let navigate={}

let Login = ({handleSubmit}) => {
  navigate=useNavigate()
  return (
    <Form className={styles.root}>
      <div className={styles.header}>
        <p>登陆</p>
      </div>
      <div className={styles.content}>
        <ul className={styles.leftContent}>
          <li className={styles.qq}>
            <img src={qqimg} alt="qq" />
            <p>QQ登录</p>
          </li>
          <li className={styles.wechat}>
            <img src={wximg} alt="wx" />
            <p>微信登录</p>
          </li>
          <li className={styles.alipay}>
            <img src={alimg} alt="al" />
            <p>支付宝登录</p>
          </li>
        </ul>
        <div className={styles.midContent}>
          <p>or</p>
        </div>
        <nav>
          <p>或 手动登录</p>
        </nav>
        <ul className={styles.rightContent}>
          <li>
            <Field name="username" placeholder="用户名"></Field>
            <ErrorMessage name="username" component="div"></ErrorMessage>
          </li>
          <li>
            <Field name="password" placeholder="密码" type="password"></Field>
            <ErrorMessage name="password" component="div"></ErrorMessage>
          </li>
          <li>
            <p onClick={handleSubmit}>登录</p>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>
        <p onClick={()=>{navigate("/regist")}}>注册</p>
        <p>忘记密码？</p>
      </div>
    </Form>
  )
}

Login = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validate: ({ username, password }) => {
    // console.log(props)
    // console.log(username,password)
    let error = {}
    if (!username) {
      error.username = '用户名不能为空'
    }
    if (!password) {
      error.password = '密码不能为空'
    }
    // if (username && password) setIsAble(true)
    // else setIsAble(false)

    return error
  },
  // 表单的提交事件
  handleSubmit: async ({ username, password }) => {
    console.log(username, password)
    navigate("/home")
  },
})(Login)

export default Login
