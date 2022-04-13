import React, { useEffect, useState } from 'react'

import { message } from 'antd'

import StudentsTable from '../../../../components/StudentsTable'
import AddForm from '../../../../components/AddForm'

import { API } from '../../../../utils'

import styles from './index.module.css'

const Students = () => {
  const dataX = [
    {
      title: '编号',
      dataIndex: 'id',
      width: '10%',
      align: 'center',
    },
    {
      title: '学生姓名',
      dataIndex: 'name',
      width: '10%',
      align: 'center',
      editable: true,
    },
    {
      title: '学生密码',
      dataIndex: 'password',
      width: '10%',
      align: 'center',
      editable: true,
      render:(_, record)=>{
        let tempStr=''
        for(let i=0;i<record.password.length;++i)tempStr+='*'
        return <span>{tempStr}</span>
      },
    },
    {
      title: '学生邮箱',
      dataIndex: 'email',
      width: '20%',
      align: 'center',
      editable: true,
    },
    {
      title: '学生生日',
      dataIndex: 'birthday',
      width: '20%',
      align: 'center',
      editable: true,
    },
    {
      title: '学生余额',
      dataIndex: 'balance',
      width: '10%',
      align: 'center',
      editable: true,
    },
  ]

  const [isAddVisible, setIsAddVisible] = useState(false)
  const [students, setStudents] = useState([])
  const [nowPage, setNowPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [keyword, setKeyword] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [lastReq,setLastReq]=useState({})

  const showAddForm = () => {
    setIsAddVisible(true)
  }

  const onCreate = async (student) => {
    student.birthday = student.birthday.format('YYYY-MM-DD')
    // console.log(student)
    const res = await API.post('/student_add', student)
    const { status, message: mes } = res.data
    if (status === 200) {
      getStudents(true)
      message.success({ content: mes, duration: 1 })
    } else {
      message.error({ content: mes, duration: 1 })
    }
    setIsAddVisible(false)
  }

  const onCancel = () => {
    setIsAddVisible(false)
  }

  const delet = async (id) => {
    // console.log(id)
    const res = await API.post('/student_delete', { id })
    const { status, message: mes } = res.data
    if (status === 200) {
      getStudents(true)
      message.success({ content: mes, duration: 1 })
    } else {
      message.error({ content: mes, duration: 1 })
    }
  }

  const save = async ({ id, name, password, email, birthday, balance }) => {
    // console.log({id,name,password,email,birthday,balance})
    const res = await API.post('/student_update', {
      id,
      name,
      password,
      email,
      birthday,
      balance,
    })
    const { status, message: mes } = res.data
    if (status === 200) {
      getStudents(true)
      message.success({ content: mes, duration: 1 })
    } else {
      message.error({ content: mes, duration: 1 })
    }
  }

  const getStudents = async (must=false) => {
    if(!must)if(lastReq.isSearch===isSearch&&lastReq.keyword===keyword&&lastReq.nowPage===nowPage)return null
    setLastReq({isSearch,keyword,nowPage})
    const url = isSearch ? '/student_find' : '/student_all'
    const entity = isSearch ? { keyword, nowPage } : { nowPage }
    
    const res = await API.post(url, entity)
    const { status, message: mes, body } = res.data
    if (status === 200) {
      for (let item of body.list) item.key = item.id
      setStudents(body.list)
      setTotal(body.total)
    } else {
      message.error({ content: mes, duration: 1 })
    }
  }

  const changePage = (page) => {
    if (page !== nowPage) {
      setNowPage(page)
      getStudents()
    }
  }

  const onSearchChange = (e) => {
    // console.log(e.target.value)
    setKeyword(e.target.value)
  }

  const onSearch = () => {
    // console.log(keyword,isSearch)
    if (keyword && !isSearch) setIsSearch(true)
    else if (!keyword && isSearch) setIsSearch(false)
    getStudents()
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <div className={styles.root}>
      <div className={styles.header}>学生信息管理</div>
      <div className={styles.content}>
        <div className={styles.tools}>
          <button onClick={showAddForm}>添加学生</button>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="请输入学生姓名"
              onChange={onSearchChange}
            />
            <button onClick={onSearch}>搜索</button>
          </div>
        </div>
        <AddForm
          visible={isAddVisible}
          onCreate={onCreate}
          onCancel={onCancel}
        ></AddForm>
        <StudentsTable
          dataX={dataX}
          data={students}
          total={total}
          delet={delet}
          save={save}
          changePage={changePage}
        ></StudentsTable>
      </div>
    </div>
  )
}

export default Students
