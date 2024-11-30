import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AccordionPayment from "./AccordionPayment";

const Creditos = () => {
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
        <div className="d-flex flex-wrap gap-3">
          {credits.map((credit) => (
            <Card key={credit.id} style={{ width: "35rem" }}>
              <Card.Body>
                <Card.Title>Número de crédito: {credit.id}</Card.Title>
                <Card.Text>{credit.description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
              <ListGroup.Item>Cliente: {credit.client_info.first_name + " " + credit.client_info.last_name}</ListGroup.Item>
                <ListGroup.Item>Monto total: {credit.total_amount}</ListGroup.Item>
                <ListGroup.Item>
                  Número de cuotas: {credit.no_installment}
                </ListGroup.Item>
                <ListGroup.Item>
                  Fecha de aplicación: {credit.application_date}
                </ListGroup.Item>
                <ListGroup.Item>
                  Fecha de inicio:{" "}
                  {credit.start_date ? credit.start_date : "No disponible"}
                </ListGroup.Item>
                <ListGroup.Item>
                  Fecha de fin:{" "}
                  {credit.end_date ? credit.end_date : "No disponible"}
                </ListGroup.Item>
                <ListGroup.Item>
                  Estado:{" "}
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
        <p>No tienes créditos disponibles.</p>
      )}
    </div>
  );
};

export default Creditos;
