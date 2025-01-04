import React from "react";
import { accountsData } from "../../../utils/accountsData";

const Cheques = () => {
  const { cheques } = accountsData;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Notes</h1>
      <ul className="space-y-2">
        {cheques.map((note) => (
          <li key={note.id} className="p-2 border rounded shadow">
            <p>
              <strong>Note:</strong> {note.chequeNumber}
            </p>
            <p>
              <strong>Details:</strong> {note.amount}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cheques;
