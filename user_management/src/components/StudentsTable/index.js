import React, { useState } from 'react'
import {
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
  Space,
  Select,
} from 'antd'

import './index.css'

const { Option } = Select

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  let inputNode = null
  switch (inputType) {
    case 'number':
      inputNode = <InputNumber />
      break
    case 'text':
      inputNode = <Input />
      break
    case 'select':
      inputNode = (
        <Select>
          <Option value="男">男</Option>
          <Option value="女">女</Option>
        </Select>
      )
  }
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `请输入 ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  )
}

const StudentsTable = ({ dataX, data, total, changePage, save, delet }) => {
  const [form] = Form.useForm()
  const [editingKey, setEditingKey] = useState('')

  const isEditing = (record) => record.key === editingKey

  const edit = (record) => {
    // console.log(record)

    form.setFieldsValue({
      ...record,
    })
    setEditingKey(record.key)
  }

  const cancel = () => {
    setEditingKey('')
  }

  const saveData = async (key) => {
    try {
      const row = await form.validateFields()
      const index = data.findIndex((item) => key === item.id)

      if (index > -1) {
        const item = data[index]
        save({ ...item, ...row })
        setEditingKey('')
      }
    } catch (errInfo) {
      console.log(errInfo)
    }
  }

  const deleteData = async (key) => {
    delet(key)
    setEditingKey('')
  }

  const columns = [
    ...dataX,
    {
      title: '操作',
      dataIndex: 'operation',
      width: '20%',
      align: 'center',
      render: (_, record) => {
        const editable = isEditing(record)
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => saveData(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Popconfirm
              title="确定要放弃修改吗?"
              cancelText="取消"
              okText="确定"
              onConfirm={cancel}
            >
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <Space size="middle">
            <Typography.Link
              disabled={editingKey !== ''}
              onClick={() => edit(record)}
            >
              编辑
            </Typography.Link>
            <Typography.Link
              style={{ color: 'red' }}
              disabled={editingKey !== ''}
              onClick={() => deleteData(record.key)}
            >
              删除
            </Typography.Link>
          </Space>
        )
      },
    },
  ]
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col
    }

    let inputType = ''
    switch (col.dataIndex) {
      case 'age':
        inputType = 'number'
        break
      case 'gender':
        inputType = 'select'
        break
      default:
        inputType = 'text'
        break
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    }
  })
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: (page, pageSize) => {
            cancel()
            changePage(page)
          },
          pageSize: 8,
          total: total,
          showSizeChanger: false,
        }}
      />
    </Form>
  )
}

export default StudentsTable
