import React from 'react'
import Header from '../components/Header'

const Home = () => {
    return (
        <div className='bg-dark-theme main-container'>
            <Header />
            <div className="container py-4 text-light">
                <h1 className='fw-bold mb-4'>Daily Expenses</h1>

                <div className="search-expenses mb-4 d-flex align-items-center">
                    <input type="search" name="search-expense" id="search-expense" className='form-control text-light border-0 shadow p-3' placeholder='Search expenses'/>
                    <button className="btn d-flex align-items-center justify-content-center text-light ms-1 h-100">
                        <i className="material-icons">filter_list</i>
                    </button>
                </div>

                <div className="expense-card bg-dark-blue-lighten p-3 rounded mb-4">
                    <h5 className="fw-bold mb-0">Brought Milk</h5>
                    <div className="d-flex flex-wrap">
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">currency_rupee</i>
                            20.00
                        </div>
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">event</i>
                            14-01-2022
                        </div>
                        <div className="price d-flex align-items-center mt-3">
                            <i className="material-icons me-2 fs-5">schedule</i>
                            09:35 PM
                        </div>
                    </div>
                    <div className="mt-3 action-btns d-flex justify-content-center">
                        <button className="btn btn-primary shadow rounded-pill btn-square me-3">
                            <i className="material-icons fs-5">edit</i>
                        </button>
                        <button className="btn btn-danger shadow rounded-pill btn-square">
                            <i className="material-icons fs-5">delete_outline</i>
                        </button>
                    </div>
                </div>

                <div className="expense-card bg-dark-blue-lighten p-3 rounded mb-4">
                    <h5 className="fw-bold mb-0">Brought Milk</h5>
                    <div className="d-flex flex-wrap">
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">currency_rupee</i>
                            20.00
                        </div>
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">event</i>
                            14-01-2022
                        </div>
                        <div className="price d-flex align-items-center mt-3">
                            <i className="material-icons me-2 fs-5">schedule</i>
                            09:35 PM
                        </div>
                    </div>
                    <div className="mt-3 action-btns d-flex justify-content-center">
                        <button className="btn btn-primary shadow rounded-pill btn-square me-3">
                            <i className="material-icons fs-5">edit</i>
                        </button>
                        <button className="btn btn-danger shadow rounded-pill btn-square">
                            <i className="material-icons fs-5">delete_outline</i>
                        </button>
                    </div>
                </div>

                <div className="expense-card bg-dark-blue-lighten p-3 rounded mb-4">
                    <h5 className="fw-bold mb-0">Brought Milk</h5>
                    <div className="d-flex flex-wrap">
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">currency_rupee</i>
                            20.00
                        </div>
                        <div className="price d-flex align-items-center mt-3 me-3">
                            <i className="material-icons me-2 fs-5">event</i>
                            14-01-2022
                        </div>
                        <div className="price d-flex align-items-center mt-3">
                            <i className="material-icons me-2 fs-5">schedule</i>
                            09:35 PM
                        </div>
                    </div>
                    <div className="mt-3 action-btns d-flex justify-content-center">
                        <button className="btn btn-primary shadow rounded-pill btn-square me-3">
                            <i className="material-icons fs-5">edit</i>
                        </button>
                        <button className="btn btn-danger shadow rounded-pill btn-square">
                            <i className="material-icons fs-5">delete_outline</i>
                        </button>
                    </div>
                </div>

                <div className='floating-action-btn d-flex align-items-center justify-content-center bg-dark-theme shadow-top'>
                    <div className="total-spent text-center me-3">
                        <h6 className="fw-bold">Total Spent</h6>
                        <p className="mb-0 text-danger form-text fw-bold">250.00</p>
                    </div>
                    <button className='btn btn-success btn-square-lg rounded-pill shadow'>
                        <i className="material-icons">add</i>
                    </button>
                    <div className="latest-spent text-center ms-3">
                    <h6 className="fw-bold">Latest Spent</h6>
                        <p className="mb-0 form-text fw-bold">20.00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
