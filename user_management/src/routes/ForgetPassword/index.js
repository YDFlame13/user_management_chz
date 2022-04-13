import React from 'react'
import { useNavigate } from 'react-router-dom'

import { withFormik, Form, Field, ErrorMessage } from 'formik'
import {message} from 'antd'

import { API,setToken } from '../../utils'

import styles from './index.module.css'

let navigate={}

let ForgetPassword = () => {
  navigate=useNavigate()
  return (
    <div className={styles.root}>
      <Form className={styles.form}>
        <div className={styles.header}>
          <p>修改密码</p>
        </div>
        <ul className={styles.content}>
          <li>
            <Field name="username" placeholder="用户名"></Field>
            <ErrorMessage name="username" component="div"></ErrorMessage>
          </li>
          <li>
            <Field name="password" placeholder="密码" type="password"></Field>
            <ErrorMessage name="password" component="div"></ErrorMessage>
          </li>
          <li>
            <Field
              name="confirmPassword"
              placeholder="确认密码"
              type="password"
            ></Field>
            <ErrorMessage name="confirmPassword" component="div"></ErrorMessage>
          </li>
          <li className={styles.submit}>
            <input type="submit" value="确认" />
          </li>
        </ul>
        <p className={styles.footer} onClick={()=>{navigate("/login")}}>返回登录界面</p>
      </Form>
    </div>
  )
}

ForgetPassword = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
    confirmPassword: '',
  }),
  validate: ({ username, password, confirmPassword }) => {
    let error = {}
    if (!username) {
      error.username = '用户名不能为空'
    }
    if (!password) {
      error.password = '密码不能为空'
    }
    if (confirmPassword !== password) {
      error.confirmPassword = '两次输入密码不一致'
    }
    // if (username && password) setIsAble(true)
    // else setIsAble(false)

    return error
  },
  // 表单的提交事件
  handleSubmit: async ({ username, password }) => {
    // console.log(username, password)
    const res = await API.post('/update', {
      username,
      password
    })
    const {status,message:mes}=res.data
    if(status===200){
      navigate('/login')
    }else{
      message.error({content:mes,duration:2})
    }
  },
})(ForgetPassword)

export default ForgetPassword
