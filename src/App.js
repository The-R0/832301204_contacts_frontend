import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [editingId, setEditingId] = useState(null);

  // 获取所有联系人
  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('获取联系人失败:', error);
    }
  };

  // 初始化时获取联系人
  useEffect(() => {
    fetchContacts();
  }, []);

  // 处理表单输入变化
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 添加或更新联系人
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // 更新联系人
        await axios.put(`http://localhost:5001/api/contacts/${editingId}`, formData);
        setEditingId(null);
      } else {
        // 添加新联系人
        await axios.post('http://localhost:5001/api/contacts', formData);
      }
      // 重置表单
      setFormData({ name: '', phone: '' });
      // 重新获取联系人列表
      fetchContacts();
    } catch (error) {
      console.error('操作失败:', error);
    }
  };

  // 编辑联系人
  const handleEdit = (contact) => {
    setEditingId(contact._id);
    setFormData({ name: contact.name, phone: contact.phone });
  };

  // 删除联系人
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/contacts/${id}`);
      // 重新获取联系人列表
      fetchContacts();
    } catch (error) {
      console.error('删除失败:', error);
    }
  };

  // 取消编辑
  const handleCancel = () => {
    setEditingId(null);
    setFormData({ name: '', phone: '' });
  };

  return (
    <div className="container">
      <h1>通讯录应用</h1>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>{editingId ? '编辑联系人' : '添加联系人'}</h2>
        <div className="form-group">
          <label>姓名：</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>电话：</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">{editingId ? '更新' : '添加'}</button>
          {editingId && <button type="button" onClick={handleCancel}>取消</button>}
        </div>
      </form>

      <div className="contacts-list">
        <h2>联系人列表</h2>
        {contacts.length === 0 ? (
          <p>暂无联系人</p>
        ) : (
          <ul>
            {contacts.map(contact => (
              <li key={contact._id}>
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-phone">{contact.phone}</span>
                </div>
                <div className="contact-actions">
                  <button onClick={() => handleEdit(contact)}>编辑</button>
                  <button onClick={() => handleDelete(contact._id)}>删除</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;