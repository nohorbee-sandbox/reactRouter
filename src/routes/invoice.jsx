import { useNavigate, useParams } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId));
  let navigate = useNavigate();
  return (
      <main>
          <h2>Total due: {invoice.amount}</h2>
          <p>{invoice.name}: {invoice.number}</p>
          <p>Due date: {invoice.due}</p>
          <p>
              <button onClick={() => {
                  deleteInvoice(invoice.number);
                  navigate("/invoices");
              }}>
                  Delete
              </button>
          </p>
      </main>
  );
}