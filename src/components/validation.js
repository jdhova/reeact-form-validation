
export default function validation(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name is Mandatory';
    }
  
  
    if (!values.email) {
      errors.email = 'Email required';
    }

    if (!values.password) {
      errors.password = 'Password is Mandatory';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords must match';
    }
    return errors;
  }