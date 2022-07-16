import { useState } from 'react';

const useForm = validation => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  //const [isSubmitting, setIsSubmitting] = useState(false);

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

    // setErrors(values);
    // setIsSubmitting(true);
  };

//   useEffect(
//     () => {
//       if (Object.keys(errors).length === 0 && isSubmitting) {
//         callback();
//       }
//     },
//     [errors]
//   );

  return { onChange, values, onSubmit,errors };
};

export default useForm;

// import React from 'react'

// const useForm = () => {
//   return (
//     <div>useForm</div>
//   )
// }

// export default useForm