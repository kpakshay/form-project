import React, { useState,useEffect } from "react";
import axios from 'axios'
const MainComponent = ({updateUser,isModal,onSuccess}) => {



    const [formData, setFormData] = useState({})

    const [errors, setErrors] = useState({})
    const isUpdateMode = !!updateUser

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setFormData(prev => ({
            ...prev,
            [name]: value
        })
        )
        // console.log(formData, "LLL")
        validateField(name, value)
        // if(val===name)
        // if(e.)
    }

    useEffect(() => {
        if (updateUser) {
            setFormData({
                ...updateUser,
                age: String(updateUser.age)
            });
        }else{
        setFormData({
            name: '',
            age: '',
            adress: '',
            email: '',
            phone: ''
        })

        }
    }, []);

    const validateField = (name, value) => {
        let error = ''
        if (name === "name" && value.trim() === '') {
            error = "Name is required";
        } else if (name === "age") {
            const ageNum = Number(value);
            if (value.trim() === '') {
                error = "Age is required";
            } else if (isNaN(ageNum)) {
                error = "Age should be a number";
            } else if (ageNum < 18 || ageNum > 99) {
                error = "Age must be in the range of 18 and 99";
            }
        } else if (name === 'adress' && value.trim() === '') {
            error = "Adress is required"
        } else if (name === 'email') {
            if (value.trim() === '') {
                error = "email is required"
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                error = "Invalid email"
            }
        } else if (name === 'phone' && !/^\d{10}$/.test(value)) {
            error = "Phone no must be 10 digits"
        } else {
            error = ''
        }
        setErrors(prev => ({
            ...prev,
            [name]: error
        }))
        // console.log(errors, "errr")

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(updateUser)
        let err = false
        Object.entries(formData).forEach(([key, value]) => {
            validateField(key, value)
            if (errors[key]) {
                err = true
            }
        })
        if (err) {
            alert("Please fill all fields/fix errors")
            return
        } else {
            try {
                const { name, age, email, phone, adress } = formData
                if (isUpdateMode) {
                    console.log("Update in process")
                    const response = await axios.put(`http://localhost:3000/updateUser/${updateUser._id}`, {
                        name,
                        age,
                        adress,
                        email,
                        phone
                    })
                    console.log(response, "responsee Update")
                    onSuccess(response.data);
                } else {
                    console.log(formData, errors, "Formdata")
                    const response = await axios.post('http://localhost:3000/register', {
                        name,
                        age,
                        adress,
                        email,
                        phone
                    })
                    console.log(response, "responsee Submit")
                }
                // console.log(value, "valueefetch")
                alert("Submitted successfully")
            } catch (err) {
                console.log("Error in Submit")
            }
        }
        console.log(e)
    }

    const formFields = [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'age', label: 'Age', type: 'number', required: true },
        { name: 'adress', label: 'Adress', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'text', required: true },
        { name: 'phone', label: 'Phone', type: 'tel', required: true }
    ]

    return (
        <>


            <div className={isModal ? "" : "bg-light min-vh-100"}>
                <div className="d-flex justify-content-center  bg-light">
                    <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%', marginTop: '3rem' }}>
                        <h4 className="text-center mb-4">FormComponent</h4>
                        <form onSubmit={handleSubmit}>
                            {/* {console.log(fooormData)} */}
                            {formFields.map(field => (
                                <div className="row mb-3 align-items-center" key={field.name}>
                                    <label htmlFor={field.name} className="col-sm-4 col-form-label">{field.label}</label>
                                    <div className="col-sm-8">
                                        <input type={field.type} name={field.name} value={formData[field.name]} className="form-control" onChange={handleChange} id={field.name} required />
                                        {errors[field.name] && (
                                            <div className="text-danger small ms-4">{errors[field.name]}</div>
                                        )}
                                    </div>
                                </div>


                            ))}
                            <button type="submit" className="btn btn-primary w-100" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainComponent