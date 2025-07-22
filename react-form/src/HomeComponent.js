import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import axios from "axios";
import MainComponent from "./MainComponent.js";
import FormComponent from "./FormComponent.js";

const HomeComponent = (props) => {

    const [userList, setUserList] = useState([])
    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [updateUser, setUpdateUser]=useState({})

    const fetchUserList = async () => {
            console.log("useEffect Load")
            try {
                const response = await axios.get('http://localhost:3000/')
                console.log(response.data, "responsee")
                setUserList(response.data)
            } catch (err) {
                console.log("Fetch failed", err)
            }
        }

    useEffect(() => {
        
        fetchUserList();

    }, [setUserList])

    const hanndleUpdate = async (user) => {
        setUpdateUser(user)
        console.log("Update Clicked")
        
        // console.log(user,updateUser)
        setToggleUpdate(true)
        // console.log(updateUser)
    }

    const handleDelete = async (id) => {
        console.log("Delete Clicked", id)
        try {
            const response = await axios.delete(`http://localhost:3000/userDelete/${id}`)
            console.log(response)
            setUserList(prev => (prev.filter(user => user._id !== id)))
        } catch (err) {
            console.log("Delete failed", err)
        }
    }

    const handleUpdateClick  = (x) => {
        console.log(x,"xxxxxxxxxxxx")
    setToggleUpdate(false)
    fetchUserList()
  }

    // When MainComponent finishes an update, it calls this:
//   const handleUserUpdated = (updatedUser) => {
//     setUserList(list =>
//       list.map(u => (u._id === updatedUser._id ? updatedUser : u))
//     );
//     setToggleUpdate(false);        // close the modal
//   };

    return (
        <>
            {/* <NavBar/> */}
            Home Component
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>

                    {userList.length > 0 ? (
                        // console.log(userList)
                        userList.map(user => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.adress}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-outline-warning" onClick={()=>hanndleUpdate(user)}>Update</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger" onClick={() => { handleDelete(user._id) }}>Delete</button>
                                </td>

                            </tr>
                        ))
                    ) : ''}
                </tbody>
            </table>

            {toggleUpdate && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Update User</h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setToggleUpdate(false)}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {/* Place your edit form here */}<MainComponent isModal={true} updateUser={updateUser} onSuccess={handleUpdateClick}/>
                                <p>Edit form goes here...</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setToggleUpdate(false)}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomeComponent