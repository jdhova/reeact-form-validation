import React, {useState} from 'react';

import validation from './validation';


function Home() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
      });

      const [errors, setErrors] = useState({});

    const onChange = e => {
        const { name, value} = e.target
        setValues({
          ...values,
          [name] : value
        });
      };

      const onSubmit = e => {
        e.preventDefault();
        console.log('gone')
        setErrors(validation(values))

      };
    

    

   

  

  return (
    <div className='form-container'>
      <form className='form-main' onSubmit={onSubmit}>
        <h1>
       Validation Page
        </h1>
        <div className='inputs'>
          <label className='labels'>Name</label>
          <input
            className='form-input'
            type='text'
            name='name'
            placeholder='Enter your name'
            value={values.name}
            onChange={onChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className='inputs'>
          <label className='labels'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your Email'
            value={values.email}
            onChange={onChange}
          />
           {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='inputs'>
          <label className='labels'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={onChange}
            
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className='inputs'>
          <label className='labels'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Enter your password again'
            value={values.password2}
            onChange={onChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

         <button className='formbtn' type='submit'>
          Sign up
        </button>

       
         
      </form>
    </div>
  );
}

export default Home;

