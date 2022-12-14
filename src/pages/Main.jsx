import "./Main.css";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { FaUserAlt, FaPhone } from 'react-icons/fa'
import { useEffect, useState } from "react";
import toast from "../utils/toast";
import { db } from '../utils/firebase';
import et from "../assets/e-favicon.png"
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
  } from 'firebase/firestore'



const Main = () => {

const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [select, setSelect] = useState("");
const [contactsList, setContactsList] = useState([]);
const [editState, setEditState] = useState(false);
const [editId, setEditId] = useState(0);
const contactsCollectionRef = collection(db, 'contacts');

const getContacts = async () => {
    const data = await getDocs(contactsCollectionRef)
    setContactsList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
  }
  useEffect(() => {
    getContacts();
  })

  //? firebase içerisinde veri oluşturma
  const createContact = async (name, phone, select) => {
    await addDoc(contactsCollectionRef, {
      name: name,
      phone: phone,
      select: select,
    })
    getContacts()
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (editState) {
      editContact(name, phone, select, editId)
      setName('')
      setPhone('')
      setSelect('')
      setEditState(false)
    toast("New Contact")
    } else {
      createContact(name, phone, select)
      setName('')
      setPhone('')
      setSelect('')
      toast("New Contact")
    }
    
  }

const handleDelete = id => {
    deleteContact(id)
  }
  //? firebase delete isteği oluşturma
  const deleteContact = async id => {
    const contactDoc = doc(db, 'contacts', id)
    await deleteDoc(contactDoc)
    getContacts()
    toast("Delete Success")
  }


  const handleEdit = user => {
    setName(user.name)
    setPhone(user.phone)
    setSelect(user.select)
    setEditId(user.id)
    setEditState(true)
  }

  //? firebase edit  oluşturma
  const editContact = async (name, phone, select, editId) => {
    const userDoc = doc(db, 'contacts', editId)
    const newFields = { name: name, phone: phone, select: select }
    await updateDoc(userDoc, newFields)
    getContacts()
    toast("Edit Success")
  }

  return (
    <>
    
    <div
    className=" d-flex justify-content-center flex-column align-items-center"
    style={{ height: '100vh', width: '100%' }}>
        <div className="container  text-center">
            <div className="row">
            <div className="mb-5 col-md-4 col-xs-12 ">
              <p className="bg-white rounded-3 p-2">
              <img src={et} alt="et" className="" style={{width:"30px"}}/>
                <i className="text-info">{'<TopGun/>'}</i> DESIGN
               </p>
               <div className="bg-white rounded-3">
                <p>Add Contact</p>
                <form onSubmit={handleSubmit}>
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
                                value={name}
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
                                value={phone}
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
                                    value={select}
                                    placeholder="Gender"
                                    onChange={(e) =>setSelect(e.target.value)}
                                    required >

                                    <option value="">Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </div> 
                                {editState ? (
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
                            <table className="table bg-white form-control w-100 rounded-3">
                            <thead className="text-info w-100 ">
                            <tr>
                                <th className="col-3" scope="col">#</th>
                                <th className="col-2" scope="col">Name</th>
                                <th className="col-2" scope="col">Phone</th>
                                <th className="col-2" scope="col">Gender</th>
                                <th className="col-3" scope="col">Delete</th>
                                <th className="col-2" scope="col">Edit</th>
                            </tr>
                            </thead>
                                <tbody>
                                        {contactsList && contactsList?.map((user, index) => (
                                            <tr key={index}>
                                                <th scope="row">{index+1}</th>
                                                <td>{user.name}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.select}</td>
                                                <td>
                                                    <FaTrashAlt
                                                    onClick={() => handleDelete(user.id)}
                                                    style={{ cursor: 'pointer', color: '#ac0606' }}
                                                    />
                                                </td>
                                                <td>
                                                    <FaEdit
                                                    onClick={() => handleEdit(user)}
                                                    style={{ cursor: 'pointer', color: '#037005' }}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                        {contactsList.length === 0 && (
                                            <tr>
                                                <td colSpan="6"> Loading... </td>
                                                
                                            </tr>
                                            
                                        )}
                                </tbody>       
                            </table>

                        </div>

                    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Main;