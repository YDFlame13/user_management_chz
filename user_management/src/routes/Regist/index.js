import React from 'react'
import { useNavigate } from 'react-router-dom'

import { withFormik, Form, Field, ErrorMessage } from 'formik'
import {message} from 'antd'

import { API,setToken } from '../../utils'

import styles from './index.module.css'

let navigate = {}

let Regist = ({ handleSubmit }) => {
  navigate = useNavigate()

  return (
    <div className={styles.root}>
      <Form className={styles.form}>
        <div className={styles.header}>
          <p>注册</p>
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
            <Field name="email" placeholder="邮箱" type="email"></Field>
            <ErrorMessage name="email" component="div"></ErrorMessage>
          </li>
          <li>
            <Field name="birthday" type="date"></Field>
            <ErrorMessage name="birthday" component="div"></ErrorMessage>
          </li>
          <li className={styles.submit}>
            <input type="submit" value="注册" onClick={handleSubmit} />
          </li>
        </ul>
        <p
          className={styles.footer}
          onClick={() => {
            navigate('/login')
          }}
        >
          返回登录界面
        </p>
      </Form>
    </div>
  )
}

const EDG_EMAIL = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

Regist = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
    email: '',
    birthday: '',
  }),
  validate: ({ username, password, email, birthday }) => {
    let error = {}
    if (!username) {
      error.username = '用户名不能为空'
    }
    if (!password) {
      error.password = '密码不能为空'
    }
    if (!EDG_EMAIL.test(email)) {
      error.email = '邮箱格式错误'
    }
    if (!birthday) {
      error.birthday = '出生日期不能为空'
    }
    // if (username && password) setIsAble(true)
    // else setIsAble(false)

    return error
  },
  // 表单的提交事件
  handleSubmit: async ({ username, password, email, birthday }) => {
    // console.log(username, password,email,birthday)
    const res = await API.post('/register', {
      username,
      password,
      email,
      birthday,
    })
    const {status,message:mes,body}=res.data
    if(status===200){
      setToken(body.token)
      navigate('/home?theme=Blue')
    }else{
      message.error({content:mes,duration:2})
    }
  },
})(Regist)

export default Regist
