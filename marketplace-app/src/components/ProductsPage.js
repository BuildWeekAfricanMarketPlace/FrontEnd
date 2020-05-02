import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: rgb(250, 179, 51);
`;

const Spam = styled.span`
  color: rgb(29, 155, 76);
`;

const Wrapper = styled.div`
  // display: flex;
  width: 48%;
  // flex-direction: column;
  // flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(42, 42, 42);
  // width: 48%;
  // flex-wrap: wrap;
`;

const EditSection = styled.div`
  display: flex;
`;

const initialState = {
  category: "",
  location: "",
  name: "",
  price: "",
};

export default function ProductsPage() {
  const token = localStorage.getItem("userId");
  console.log(token);
  const [itemsForSale, setItemsForSale] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(initialState);
  const [editing, setEditing] = useState(false);
  const { push } = useHistory();
  const { id } = useParams();

  console.log("itemtoedit", itemToEdit);
  console.log("itemToEdit ID", itemToEdit.id);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/market/items")
      .then((res) => {
        console.log(res);
        setItemsForSale(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axiosWithAuth()
      .delete(
        `https://bw-african-marketplace-lucas.herokuapp.com/api/market/items/${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editOnClick = (item) => {
    setEditing(true);
    setItemToEdit(item);
    // const item = itemsForSale.filter((product) => {
    //   return product.id === id;
    // });
    // setNewItem(item[0]);
    // push(`/product/${id}`);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    console.log("hit Here", itemToEdit);
    axiosWithAuth()
      .put(`/api/market/items/${itemToEdit.id}`, itemToEdit)
      .then((res) => {
        console.log("this is the put", res);
        // const item = itemsForSale.filter((product) => {
        //   return product.id === id;
        // });
        // setItemsForSale(item[id]);
        setItemsForSale(res.data);
        // setItemsForSale([
        //   ...itemsForSale.map((x) => {
        //     if (x.id == res.data.id) {
        //       x = res.data;
        //       return x;
        //     } else {
        //       return x;
        //     }
        //   }),
        // ]);
      })
      .catch((error) => console.log("This is not working", error));
  };

  return (
    <Wrapper>
      <Title>
        Welcome to African <Spam>Marketplace</Spam>
      </Title>
      {itemsForSale.map((item) => {
        return (
          <Card key={item.id}>
            <p>Name: {item.name}</p>
            <p>Category: {item.category}</p>
            <p>Location: {item.location}</p>
            {/* <p>Seller: {item.owner}</p> */}
            <p>{item.price}</p>
            <button
              onClick={() => {
                editOnClick(item);
              }}
            >
              Edit Item
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteHandler(item.id);
              }}
            >
              Delete Item
            </button>
          </Card>
        );
      })}
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Product</legend>
          <label>
            Name:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, name: e.target.value })
              }
              value={itemToEdit.name}
            />
          </label>
          <label>
            Category:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, category: e.target.value })
              }
              value={itemToEdit.category}
            />
          </label>
          <label>
            Location:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, location: e.target.value })
              }
              value={itemToEdit.location}
            />
          </label>
          {/* <label>
            Seller:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, owner: e.target.value })
              }
              value={itemToEdit.owner}
            />
          </label> */}
          <label>
            Price:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, price: e.target.value })
              }
              value={itemToEdit.price || ""}
            />
          </label>
          <EditSection className="button-row">
            <button type="submit">Save</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </EditSection>
        </form>
      )}
    </Wrapper>
  );
}
