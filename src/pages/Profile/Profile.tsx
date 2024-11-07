import {
  Row,
  Col,
  Avatar,
  Button,
  Divider,
  Input,
  Upload,
  Typography,
  Form,
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import React, { useState } from 'react';
import { CiUser, CiEdit } from 'react-icons/ci';
import { FaFileUpload } from 'react-icons/fa';
const { Title, Text } = Typography;

export const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [form] = useForm();
  const [avatarUrl, setAvatarUrl] = useState<string>(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnE_fy9lLMRP5DLYLnGN0LRLzZOiEpMrU4g&s'
  );

  const handleAvatarChange = (info: any) => {
    if (info.file.status === 'done') {
      setAvatarUrl(info.file.response.url);
    }
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log('Updated Profile:', values);
      setEditing(false);
    });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  return (
    <Row justify="center" style={{ padding: '30px' }}>
      <Col span={24}>
        <div className="profile-container">
          <Row className="profile-header">
            <Col span={24}>
              <Row justify="end">
                {!editing && (
                  <Button
                    type="link"
                    icon={<CiEdit />}
                    onClick={handleEdit}
                    style={{ marginLeft: 'auto' }}
                  >
                    Edit Profile
                  </Button>
                )}
              </Row>
            </Col>
            <Col span={24}>
              <Row>
                <Col span={8}>
                  <Row
                    align="middle"
                    justify="center"
                    style={{ height: '100%' }}
                  >
                    <Avatar
                      size={200}
                      icon={<CiUser />}
                      src={avatarUrl}
                      style={{ marginRight: '20px' }}
                    />
                  </Row>
                </Col>

                <Col span={16}>
                  <div className="profile-details">
                    <Title level={3}>John Doe</Title>
                    <Text>Email: john.doe@example.com</Text>
                    <br />
                    <Text>Role: Admin</Text>
                    <br />
                    <Text>Location: Almaty, Kazakhstan</Text>
                    <Divider />
                    <div className="profile-item">
                      <strong>First Name: </strong> John
                    </div>
                    <div className="profile-item">
                      <strong>Last Name: </strong> Doe
                    </div>
                    <div className="profile-item">
                      <strong>Email: </strong> john.doe@example.com
                    </div>
                    <div className="profile-item">
                      <strong>Phone: </strong> +7 701 234 5678
                    </div>
                    <div className="profile-item">
                      <strong>Bio: </strong> Software Engineer with 5+ years of
                      experience.
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Divider />
          <Form
            form={form}
            layout="vertical"
            initialValues={{
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@example.com',
              phone: '+7 701 234 5678',
              bio: 'Software Engineer with 5+ years of experience.',
            }}
          >
            {editing && (
              <>
                <Form.Item
                  name="firstName"
                  label="First Name"
                  rules={[
                    { required: true, message: 'Please enter your first name' },
                  ]}
                >
                  <Input placeholder="Enter your first name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  label="Last Name"
                  rules={[
                    { required: true, message: 'Please enter your last name' },
                  ]}
                >
                  <Input placeholder="Enter your last name" />
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your phone number',
                    },
                  ]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
                <Form.Item name="bio" label="Bio">
                  <Input.TextArea placeholder="Write a short bio" rows={4} />
                </Form.Item>
                <Form.Item label="Avatar">
                  <Upload
                    name="avatar"
                    listType="picture-card"
                    showUploadList={false}
                    action="/upload-avatar" // Your backend URL to handle image upload
                    onChange={handleAvatarChange}
                  >
                    <div>
                      <FaFileUpload />
                      <div>Click to upload</div>
                    </div>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    onClick={handleSave}
                    style={{ marginRight: '10px' }}
                  >
                    Save Changes
                  </Button>
                  <Button onClick={() => setEditing(false)}>Cancel</Button>
                </Form.Item>
              </>
            )}
          </Form>
        </div>
      </Col>
    </Row>
  );
};
