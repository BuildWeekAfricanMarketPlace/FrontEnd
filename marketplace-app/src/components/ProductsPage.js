import React, {useEffect, useState} from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";



export default function ProductsPage() {
   const token = localStorage.getItem("userId")
    console.log(token)
    const [itemsForSale, setItemsForSale] = useState([])
  useEffect(() => {
      axiosWithAuth()
    .get(
      "https://bw-african-marketplace-lucas.herokuapp.com/api/market/items", 
    )
    .then((res) => {
      console.log(res);
      setItemsForSale(res.data)
    })
    .catch((err) => {
      console.log(
        err
      );
    })}, [])

    // const deleteHandler = (id) => {
    //     axiosWithAuth()
    //         .delete(`https://bw-african-marketplace-lucas.herokuapp.com/api/market/items/${id}`)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return (
        <div>
            {itemsForSale.map(item => {
                return <div key={item.id}>
                    <p>
                        Location: {item.location}
                    </p>
                    <p>
                        Name: {item.name}
                    </p>
                    <p>
                       Seller: {item.owner}
                    </p>
                    <p>
                        {item.price}
                    </p>
                    {/* <button onClick={() => {
                        deleteHandler(item.id)
                    }}>Delete Item</button> */}
                </div>
            })}
        </div>
    )
}
