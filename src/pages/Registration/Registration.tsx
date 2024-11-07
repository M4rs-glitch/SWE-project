import { Button, Checkbox, Col, Input, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import './Registration.css';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log form data here
    // Add registration logic (e.g., send data to server)
    navigate('/login');
  };

  return (
    <Row justify="center" style={{ padding: '50px' }}>
      <Col span={6}>
        <Row className="registrationForm" gutter={[0, 12]}>
          <div>
            <span className="title">Create a MyMedic account</span>
            <br />
            <span className="subtitle">
              Keep on top of your appointments by creating an account
            </span>
          </div>
          <Row gutter={[0, 12]}>
            <Col span={24}>
              <label>Email</label>
              <Controller
                name="email"
                control={control}
                rules={{ required: 'Please enter your email' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter email"
                    className="controller"
                  />
                )}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </Col>
            <Col span={24}>
              <label>Password</label>
              <Controller
                name="password"
                control={control}
                rules={{ required: 'Please enter your password' }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="Enter password"
                    className="controller"
                  />
                )}
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </Col>
            <Col span={24}>
              <label>Confirm Password</label>
              <Controller
                name="confirmPassword"
                control={control}
                rules={{ required: 'Please confirm your password' }}
                render={({ field }) => (
                  <Input.Password
                    {...field}
                    placeholder="Re-enter password"
                    className="controller"
                  />
                )}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword.message}</span>
              )}
            </Col>
            <Col span={24}>
              <label>First Name</label>
              <Controller
                name="firstName"
                control={control}
                rules={{ required: 'Please enter your first name' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter first name"
                    className="controller"
                  />
                )}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName.message}</span>
              )}
            </Col>
            <Col span={24}>
              <label>Last Name</label>
              <Controller
                name="lastName"
                control={control}
                rules={{ required: 'Please enter your last name' }}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Enter last name"
                    className="controller"
                  />
                )}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName.message}</span>
              )}
            </Col>
            <Col span={24}>
              <label>Date of Birth</label>
              <Input.Group compact>
                <Controller
                  name="dateOfBirthDay"
                  control={control}
                  rules={{ required: 'Please enter your day of birth' }}
                  render={({ field }) => (
                    <Input
                      style={{ width: '60px' }}
                      {...field}
                      placeholder="DD"
                      className="controller"
                    />
                  )}
                />
                <Controller
                  name="dateOfBirthMonth"
                  control={control}
                  rules={{ required: 'Please enter your month of birth' }}
                  render={({ field }) => (
                    <Input
                      style={{ width: '60px' }}
                      {...field}
                      placeholder="MM"
                      className="controller"
                    />
                  )}
                />
                <Controller
                  name="dateOfBirthYear"
                  control={control}
                  rules={{ required: 'Please enter your year of birth' }}
                  render={({ field }) => (
                    <Input
                      style={{ width: '80px' }}
                      {...field}
                      placeholder="YYYY"
                      className="controller"
                    />
                  )}
                />
              </Input.Group>
              <Col span={24}>
                {errors.dateOfBirthDay && (
                  <span className="error">{errors.dateOfBirthDay.message}</span>
                )}
              </Col>
              <Col span={24}>
                {errors.dateOfBirthMonth && (
                  <span className="error">
                    {errors.dateOfBirthMonth.message}
                  </span>
                )}
              </Col>
              <Col span={24}>
                {errors.dateOfBirthYear && (
                  <span className="error">
                    {errors.dateOfBirthYear.message}
                  </span>
                )}
              </Col>
            </Col>
            <Col span={24}>
              <label>Mobile Number</label>
              <Controller
                name="mobileNumber"
                control={control}
                rules={{ required: 'Please enter your mobile number' }}
                render={({ field }) => (
                  <Input.Group className="controller">
                    <Input
                      {...field}
                      addonBefore="+7"
                      placeholder="Please enter phone number"
                      className="controller"
                    />
                  </Input.Group>
                )}
              />
              {errors.mobileNumber && (
                <span className="error">{errors.mobileNumber.message}</span>
              )}
            </Col>
            <Col span={24}>
              <Checkbox
                checked={keepMeLoggedIn}
                onChange={(e) => setKeepMeLoggedIn(e.target.checked)}
              >
                Keep me signed in on this trusted device
              </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox
                name="termsAndConditions"
                rules={{ required: 'Please agree to the terms and conditions' }}
              >
                I agree to{' '}
                <a href="#" className="forgot">
                  Terms & Conditions
                </a>{' '}
                and to MyMedic's use of my information in accordance with its{' '}
                <a href="#" className="forgot">
                  Privacy Policy
                </a>
              </Checkbox>
              {errors.termsAndConditions && (
                <span className="error">
                  {errors.termsAndConditions.message}
                </span>
              )}
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%', backgroundColor: '#00C3B5' }}
                onClick={handleSubmit(onSubmit)}
              >
                Create account
              </Button>
            </Col>
          </Row>
          <hr />
        </Row>
        <hr />
        <Row gutter={[0, 12]}>
          <Col span={24}>
            <span>
              <a href="#" className="text">
                Already have a MyMedic account?
              </a>
            </span>
          </Col>
          <Col span={24}>
            <Button
              color="default"
              variant="outlined"
              style={{ width: '100%' }}
              onClick={() => navigate('/login')}
            >
              Log into patient account
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
