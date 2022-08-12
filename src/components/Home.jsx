import React, { useState } from 'react';
import validation from './validation';

// useform hook pending 

function Home() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [errors, setErrors] = useState({});

  const onChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('gone')
    setErrors(validation(values))

  };

  return (
    <div className='container-fluid bg'>
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={onSubmit}>
            <h2 className='text-center text-white font-weight-bold mt-5'>
              Validation Page
            </h2>
            <div className='form-group font-weight-bold'>
              <label className='input-labels'>Name</label>
              <input
                className='form-control'
                type='text'
                name='name'
                placeholder='Enter your name'
                value={values.name}
                onChange={onChange}
              />
              <h6 className="text-white font-weight-bold">
                {errors.name && <span>{errors.name}</span>}
              </h6>
            </div>
            <div className='form-group font-weight-bold'>
              <label className='input-labels'>Email</label>
              <input
                className='form-control'
                type='email'
                name='email'
                placeholder='Enter your Email'
                value={values.email}
                onChange={onChange}
              />
              <h6 className="text-white font-weight-bold">
                {errors.email && <span>{errors.email}</span>}
              </h6>
            </div>
            <div className='form-group font-weight-bold'>
              <label className='input-labels'>Password</label>
              <input
                className='form-control'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={onChange}
              />
              <h6 className="text-white font-weight-bold">
                {errors.password && <span>{errors.password}</span>}
              </h6>
            </div>
            <div className='form-group font-weight-bold'>
              <label className='input-labels'>Confirm Password</label>
              <input
                className='form-control'
                type='password'
                name='password2'
                placeholder='Enter your password again'
                value={values.password2}
                onChange={onChange}
              />
              <h6 className="text-white font-weight-bold">
                {errors.password2 && <span>{errors.password2}</span>}
              </h6>
            </div>
            <button className='btn btn-sm btn-block btn-primary border border-dark submit' type='submit'>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Home;

