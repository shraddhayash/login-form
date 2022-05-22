import React,{useState,useEffect} from 'react';

import{Link} from 'react-router-dom'
function Login() {
    const initialValues = { mobileNo: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    <div>
        {/*Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )*/}

   <div className="form-container">
   
      <form onSubmit={handleSubmit}>
      
        <h4 className="login-heading" >Welcome to the Admin Panel</h4>
        <div className="ui divider"></div>
        <div className="ui form"></div>
          
          <div className="field">
            <label className="label-email"> Email</label>
            <div>
            <input
              type="text"
              name="email"
              //placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            </div>
            
          </div>

          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <div>
            <input
              type="password"
              name="password"
              //placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
        
            </div>

            <div className="field">
            <label>Mobile No</label>
            <div>
            <input
              type="number"
              name="mobileNo"
              //placeholder="Password"
              value={formValues.mobileNo}
              onChange={handleChange}
            />
        
            </div>

            <span> <a href='/forget password'>forget password</a></span>
          </div>
          <p>{formErrors.password}</p>
          <button className="btn-login">Login</button>
          
        </div>
      </form>
    </div>

    </div>
  
  );

}

export default Login
