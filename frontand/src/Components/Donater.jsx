import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';

const Donater = () => {
    const [data, setdata] = useState([])
    const [_id, set_id] = useState('')
    const [hhh, sethhh] = useState(0)

    useEffect(() => {
        ; (async () => {
            await axios.get('/api/campaign/show')
                .then((data) => {
                    // console.log('all data show', data.data.data);
                    setdata(data.data.data)
                })
                .catch((err) => {
                    console.log(err.message)
                })
        })()
    }, [hhh])

    console.log(data, "------------");


    const formSubmit = (e) => {
        // console.log(amount);
        e.preventDefault()
        let amount = document.getElementById('amount').value

            ; (async () => {
                await axios.patch(`/api/campaign/update?id=${_id}`, { donatedAmount: amount })
                    .then(() => {
                        console.log('login success');
                        sethhh(hhh + 1)
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
            })()
        document.getElementById('amount').value = ''

        set_id('')
        document.getElementById('modelClose').click()
    }
    return (
        <>
            <div className="container mt-5">
                <div className="col text-center">
                    <h2 className="mb-4">Crowdfunding Campaign</h2>
                </div>
                    <hr />
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Account No</th>
                                <th scope="col">Description</th>
                                <th scope="col">ExpirationDate</th>
                                <th scope="col">DonatedAmount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((campaign, i) => {
                                return (<tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{campaign.username}</td>
                                    <td>{campaign.amount}</td>
                                    <td>{Number(uuidv4().replace(/\D/g, '').slice(0, 16))}</td>
                                    <td>{campaign.description}</td>
                                    <td>{moment(campaign.expirationDate).format('MM-DD-YYYY')}</td>
                                    <td>{campaign.donatedAmount}</td>
                                    <td>
                                        {
                                            (new Date(moment(campaign.expirationDate).format('MM-DD-YYYY')) < new Date()) && (campaign.amount >= campaign.donatedAmount)
                                                ? ('Date Expired')
                                                : (campaign.amount <= campaign.donatedAmount ? ('Successfull') : ('Active'))
                                        }
                                    </td>
                                    <td><>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            onClick={() => {
                                                set_id(campaign._id)
                                                // console.log(campaign._id);
                                            }}
                                            disabled={(campaign.amount <= campaign.donatedAmount) || (new Date(moment(campaign.expirationDate).format('MM-DD-YYYY')) < new Date())}
                                        >

                                            {campaign.amount > campaign.donatedAmount ? (
                                                'Donate'
                                            ) : (
                                                'Success'
                                            )}
                                        </button>
                                        <div
                                            className="modal fade"
                                            id="exampleModal"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                            crowdfunding campaign
                                                        </h1>
                                                        <button
                                                            id='modelClose'
                                                            type="button"
                                                            className="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body " >
                                                        <form onSubmit={formSubmit}>
                                                            <div className="mb-3">
                                                                <label htmlFor="exampleInputEmail1" className="form-label">
                                                                    Donate Amount
                                                                </label>
                                                                <input
                                                                    required
                                                                    type="number"
                                                                    name="amount"
                                                                    className="form-control"
                                                                    id="amount"
                                                                    aria-describedby="emailHelp"
                                                                />
                                                            </div>
                                                            <button type="submit" className="btn btn-primary w-100">
                                                                Submit
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Donater