import { Modal, Form, Input, DatePicker } from 'antd'

import moment from 'moment'

import './index.css'

function AddForm({ visible, onCreate, onCancel }) {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title="添加学生"
      okText="添加"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields()
            onCreate(values)
          })
          .catch((info) => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form
        form={form}
        name="add"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        initialValues={{
          name: '',
          password: '',
          email: '',
          birthday: '',
          balance: '0.00',
        }}
        autoComplete="off"
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input placeholder="请输入姓名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '密码不能为空' }]}
        >
          <Input type="password" placeholder="请输入密码"></Input>
        </Form.Item>
        <Form.Item
          label="邮箱"
          name="email"
          rules={[
            { required: true, message: '邮箱不能为空' },
            { type: 'email', message: '邮箱格式错误' },
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </Form.Item>
        <Form.Item
          label="出生日期"
          name="birthday"
          rules={[{ required: true, message: '出生日期不能为空' }]}
        >
          <DatePicker
            initialValues={moment('2005-01-01', 'YYYY-MM-DD')}
            format='YYYY-MM-DD'
          />
        </Form.Item>
        <Form.Item
          label="余额"
          name="balance"
          rules={[
            { required: true, message: '余额不能为空' },
            { pattern:/^[0-9]+\.[0-9]{2}$/, message: '小数点后保留两位' },
          ]}
        >
          <Input placeholder="请输入余额"></Input>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddForm
