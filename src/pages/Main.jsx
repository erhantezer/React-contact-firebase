import "./Main.css";
import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { useState } from "react";
// import Toastify from "../utils/toast";





const Main = () => {
const [name, setName] = useState("");
const [phone, setPhone] = useState("");






  return (
    <div
    className="   d-flex justify-content-center flex-column align-items-center"
    style={{ height: '100vh', width: '100%' }}>
        <div className="container  text-center">
            <div className="row">
            <div className="mb-5 col-md-4 col-xs-12 ">
              <p className="bg-white rounded-3 p-2">
                <i className="text-info">{'<TopGun/>'}</i> DESIGN
               </p>
               <div className="bg-white rounded-3">
                <p>Add Contact</p>
                <form>
                    <div className="form-control">
                        <div style={{ position: 'relative' }}>
                            <FaUserAlt
                            style={{
                                position: 'absolute ',
                                top: '10px',
                                left: '5px',
                                opacity: '0.5',
                              }} />
                              
                              <input
                                type="text"
                                className="form-control mt-3 ps-4 "
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name"/>
                                </div>
                                <div style={{ position: "relative" }}>
                                <FaPhone
                                style={{
                                position: 'absolute ',
                                top: '10px',
                                left: '5px',
                                opacity: '0.5',
                                }}/>
                                <input
                                type="text"
                                className="form-control mt-3  ps-4"
                                id="phone"
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Phone Number" />
                                </div>
                                <div className="input-group mb-3">
                                <select
                                    className="custom-select mt-3"
                                    style={{
                                    width: '100%',
                                    borderRadius: '5px',
                                    border: '1px solid #bbb',
                                    color: '#777',
                                    padding: '.4rem',
                                    }}
                                    id="select"
                                    placeholder="Gender"
                                    onChange={(e) =>setSelect(e.target.value)}
                                    required >

                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </div> 
                                {["edit"] ? (
                                    <button
                                        type="submit"
                                        className="btn btn-info form-control text-white"
                                    >
                                        Edit
                                    </button>
                                    ) : (
                                    <button
                                        type="submit"
                                        className="btn btn-info form-control text-white"
                                    >
                                        Add
                                    </button>
                                    )}      
                    </div>
                </form> 
               </div>
            </div>
            
        



                                        {/* TABLE */}

                    <div className="col-md-8 col-xs-12">
                        <div className="mx-5">
                            <p className="bg-white mb-4 p-2 rounded-3">
                                Contacts
                            </p>
                            <table className="table bg-white form-control w-100 rounded-3 ">
                            <thead className="text-info w-100  ">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                            </thead>
                                        
                            </table>

                        </div>

                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main