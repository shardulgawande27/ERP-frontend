import React from "react";
import { accountsData } from "../../../utils/accountsData";

const Reconciliaton = () => {
  const { reconciliations } = accountsData;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Transaction Notes</h1>
      <ul className="space-y-2">
        {reconciliations.map((note) => (
          <li key={note.id} className="p-2 border rounded shadow">
            <p>
              <strong>Note:</strong> {note.details}
            </p>
            <p>
              <strong>Details:</strong> {note.details}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reconciliaton;
