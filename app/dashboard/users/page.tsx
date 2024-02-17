'use client'

import { Avatar, Button, Space, Table, TableProps, Tag } from 'antd'

interface DataType {
  key: string
  name: string
  avatarUrl: string
  email: string
  role: string
}

const columns: TableProps<DataType>['columns'] = [
  {
    className: 'w-8',
    title: 'Avatar',
    dataIndex: 'avatarUrl',
    key: 'avatarUrl',
    render: (url) => (
      <Avatar size={50} icon={<img src={url} alt="avatar" width={50} />} />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
    dataIndex: 'role',
    render: (role) => <Tag color="green">{role}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle">
        <Button>修改</Button>
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
]

const data: DataType[] = [
  {
    key: '1',
    name: 'Suiji',
    avatarUrl: 'https://picsum.photos/200?aaa',
    email: 'test@example.com',
    role: 'admin',
  },
  {
    key: '2',
    name: 'admin',
    avatarUrl: 'https://picsum.photos/200?bbb',
    email: 'test@example.com',
    role: 'admin',
  },
  {
    key: '3',
    name: 'wuji',
    avatarUrl: 'https://picsum.photos/200?ccc',
    email: 'test@example.com',
    role: 'guest',
  },
]

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    )
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
}

const Users: React.FC = () => {
  return (
    <div className="w-full relative">
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        className="w-full"
        columns={columns}
        dataSource={data}
      />
      <div className="absolute right-4 top-4">aaa</div>
    </div>
  )
}

export default Users
