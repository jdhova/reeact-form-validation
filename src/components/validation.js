
export default function validation(values) {
  let errors = {};

<<<<<<< HEAD
=======
  // destructinring and regex pending 

>>>>>>> 60b6d2ee2714b72fa4f1ecba4e39fcb0f683d7a0
  if (!values.name.trim()) {
    errors.name = 'Name is Mandatory';
  }


  if (!values.email) {
    errors.email = 'Email Mandatory';
  }

  if (!values.password) {
    errors.password = 'Password is Mandatory';

  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  } else if (values.password.length > 12) {
    errors.password = 'Password must be less than 16 characters';

  }


  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords must match';
  }
  return errors;
}