import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate = useNavigate()

  const [user, setuser] = useState({
    username: "",
    password: "",
    category: "donater"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setuser({
      ...user,
      [name]: value
    })
  }

  const formSubmit = (e) => {
    e.preventDefault()

    console.log(user)

      ; (async () => {
        await axios.post('/api/login', user)
          .then(() => {
            console.log('login success');
          })
          .catch((error)=>{
            console.log(error.message);
          })
      })()

    setuser({
      username: "",
      password: "",
      category: ""
    })

    if(user.category === "owner"){
      Navigate('/owner')
    }else{
      Navigate('/donater')
    }
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 mx-auto shadow p-4">
            <h3 className='text-center mb-4'>Login Page</h3>
            <hr />
            <form className="" action="/login" method="post" onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={handleChange}
                  value={user.username}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <div className="mb-3">
                <select
                  className="form-select"
                  name="category"
                  aria-label="Default select example"
                  onChange={handleChange}
                  value={user.category}
                  required
                >
                  <option value="donater">
                    Donater
                  </option>
                  <option value="owner">Campaign Owner</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login