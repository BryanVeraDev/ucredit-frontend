import React from "react";
import Table from "react-bootstrap/Table";
import Accordion from "react-bootstrap/Accordion";

const AccordionPayment = ({ data }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>See payment plan</Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Payment Date</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {data.payments.map((payment) => (
                <tr>
                  <td>{payment.id}</td>
                  <td>{payment.status}</td>
                  <td>{payment.payment_amount}</td>
                  <td>{payment.payment_date}</td>
                  <td>{payment.due_date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default AccordionPayment;
