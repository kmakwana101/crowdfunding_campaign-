import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [user, setuser] = useState({
        username: "",
        amount: "",
        expirationDate: "",
        description: ""
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
                await axios.post('/api/campaign/create', user)
                    .then(() => {
                        console.log('login success');
                    })
                    .catch((err)=>{
                        console.log(err.message)
                    })
            })()

        setuser({
            username: "",
            amount: "",
            expirationDate: "",
            description: ""
        })
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 mx-auto shadow p-4">
                        <h3 className='text-center mb-4'>New Campaign</h3>
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
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    amount
                                </label>
                                <input
                                    type="text"
                                    name="amount"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.amount}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Expiration Date
                                </label>
                                <input
                                    type="date"
                                    name="expirationDate"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.expirationDate}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    name="description"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={user.description}
                                    required
                                />
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