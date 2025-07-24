

// // import 'bootstrap/dist/css/bootstrap.min.css';
// import './form.css'; // Optional for custom tweaks
// import { useEffect,useState } from "react";

// const FormComponent = (props) => {

//   const [fullName,setName]=useState('')
//   const [age,setAge]=useState('')
//   const [adress,setAdress]=useState('')
//   const [email,setEmail] = useState('')
//   const [mobile,setMobile] = useState('')
  
//       const [toggleUpdate, setToggleUpdate] = useState(false)

//   const handleChange=(e)=>{
//     console.log(e)
//   }

//   const handleSubmit=(e)=>{
//     console.log(e.value)
//   }
//   return (
//     <div className={props.isModal?"":"bg-light min-vh-100"}>
//     <div className="d-flex justify-content-center bg-light">
//       <div className="card p-4 shadow" style={{ maxWidth: '500px', width: '100%',marginTop:'3rem', height: 'auto' }}>
//       {/* <div
//   className=" justify-content-center bg-light"
//   style={{ minHeight: '100vh', paddingTop: '2rem' }}
// > */}
//         <h4 className="text-center mb-4">FormComponent</h4>
//         <form>
//           <div className="row mb-3 align-items-center">
//             <label htmlFor="fullname" className="col-sm-4 col-form-label">Name</label>
//             <div className="col-sm-8">
//               <input type="text" className="form-control" id="fullname" required />
//             </div>
//           </div>

//           <div className="row mb-3 align-items-center">
//             <label htmlFor="age" className="col-sm-4 col-form-label">Age</label>
//             <div className="col-sm-8">
//               <input type="text" className="form-control" id="age" onChange={handleChange} required />
//             </div>
//           </div>

//           <div className="row mb-3 align-items-center">
//             <label htmlFor="address" className="col-sm-4 col-form-label">Address</label>
//             <div className="col-sm-8">
//               <input type="text" className="form-control" id="address" required />
//             </div>
//           </div>

//           <div className="row mb-3 align-items-center">
//             <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
//             <div className="col-sm-8">
//               <input type="email" className="form-control" id="email" required />
//             </div>
//           </div>

//           <div className="row mb-3 align-items-center">
//             <label htmlFor="mobile" className="col-sm-4 col-form-label">Mobile</label>
//             <div className="col-sm-8">
//               <input type="text" className="form-control" id="mobile" required />
//             </div>
//           </div>

//           {/* <div className="form-check mb-3">
//             <input type="checkbox" className="form-check-input" id="check" />
//             <label className="form-check-label" htmlFor="check">Check me out</label>
//           </div> */}

//           <button type="submit" className="btn btn-primary w-100" onSubmit={handleSubmit}>Submit</button>
//         </form>
//       </div>
//     </div></div>
//   );
// };

// export default FormComponent;

