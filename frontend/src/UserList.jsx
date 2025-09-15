import React, { useEffect, useState } from "react";
import { getUsers, createUser, deleteUser } from "../src/api/userApi";
import { UserAddOutlined, UserDeleteOutlined } from "@ant-design/icons";
import { Space, Table, Button } from "antd";

function UserList() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  // load danh sách user
  useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "UpdatedAt",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Action",
      key: "action",
      render: (data) => (
        <Space size="middle">
          <Button
            className=""
            color="cyan"
            variant="outlined"
            onClick={() => handleDelete(data.key)}
          >
            <UserAddOutlined />
            Add User
          </Button>
          <Button className="" color="danger" variant="outlined">
            <UserDeleteOutlined />
            Deleted User
          </Button>
        </Space>
      ),
    },
  ];

  const data = users.map((item) => ({
    key: item.id,
    name: item.name,
    email: item.email,
    password: item.password,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  // thêm user
  //   const handleAddUser = async () => {
  //     if (!name) return;
  //     await createUser({ name, email: `${name}@gmail.com` });
  //     const res = await getUsers();
  //     setUsers(res.data);
  //     setName("");
  //   };

  // xoá user
  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="w-full justify-center">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default UserList;
