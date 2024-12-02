import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import './styles/cards.css';
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://ucredit-api-c1y8.onrender.com/api/products/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setProducts(data.results);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <div className="cards-container">
          {products.map((product) => (
            <Card key={product.id} style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>
                  Type: {product.product_type_info.description}
                </ListGroup.Item>
                <ListGroup.Item>
                  Status: {product.is_active ? "Active" : "Inactive"}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </div>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Products;
