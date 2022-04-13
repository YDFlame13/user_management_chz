import React from 'react'
import ReactDOM from 'react-dom/client'

import { ConfigProvider } from 'antd'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import 'moment/locale/zh-cn'
import zhCN from 'antd/lib/locale/zh_CN'
//引入antd样式
import 'antd/dist/antd.css'

import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
