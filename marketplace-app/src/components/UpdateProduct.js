// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";

// import styled from "styled-components";
// import { axiosWithAuth } from "../utils/axiosWithAuth";

// const UpdateProduct = () => {
//   const [newItem, setNewItem] = useState({
//     name: "",
//     location: "",
//     seller: "",
//     price: "",
//   });
//   const { register } = useForm();
//   const { push } = useHistory();

//   const handleChange = (e) => {
//     setNewItem({ ...newItem, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axiosWithAuth();
//     push('/')
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         Name:
//         <input
//           type="text"
//           placeholder="Name"
//           name="name"
//           onChange={handleChange}
//           value={newItem.name}
//           ref={register({ required: true, min: 2, maxLength: 20 })}
//         />
//         <br />
//         Location:
//         <input
//           type="text"
//           placeholder="Location"
//           name="location"
//           onChange={handleChange}
//           value={newItem.location}
//           ref={register({ required: true, min: 2, maxLength: 20 })}
//         />
//         <br />
//         Seller:
//         <input
//           type="text"
//           placeholder="Seller"
//           name="name"
//           onChange={handleChange}
//           value={newItem.seller}
//           ref={register({ required: true, min: 2, maxLength: 200 })}
//         />
//         <br />
//         Price:
//         <input
//           type="number"
//           placeholder="Price"
//           name="price"
//           onChange={handleChange}
//           value={newItem.price}
//           ref={register({ required: true })}
//         />
//         <button type='submit'>Submit</button>
//       </form>
//     </>
//   );
// };

// export default UpdateProduct;
