import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AccordionPayment from "./AccordionPayment";
import './styles/cards.css';

const Credits = () => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://ucredit-api-c1y8.onrender.com/api/credits/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setCredits(data.results);
    };

    fetchCredits();
  }, []);

  return (
    <div>
      {credits.length > 0 ? (
        <div className="cards-container">
          {credits.map((credit) => (
            <Card key={credit.id} style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Credit number: {credit.id}</Card.Title>
                <Card.Text>{credit.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Client: {credit.client_info.first_name + " " + credit.client_info.last_name}</ListGroup.Item>
                <ListGroup.Item>Total amount: {credit.total_amount}</ListGroup.Item>
                <ListGroup.Item>
                  Number of installment: {credit.no_installment}
                </ListGroup.Item>
                <ListGroup.Item>
                  Application Date: {credit.application_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  Start date:{" "}
                  {credit.start_date ? credit.start_date : "Not available"}
                </ListGroup.Item>
                <ListGroup.Item>
                  End date:{" "}
                  {credit.end_date ? credit.end_date : "Not available"}
                </ListGroup.Item>
                <ListGroup.Item>
                  Status:{" "}
                  {credit.status === "approved" ?
                  <div>
                    <p>{credit.status}</p>
                    <AccordionPayment data={credit} />
                  </div> 
                  : credit.status 
                  }
                </ListGroup.Item>
              </ListGroup>
            </Card>
          ))}
        </div>
      ) : (
        <p>You do not have available credits.</p>
      )}
    </div>
  );
};

export default Credits;
