const statusStyles = {
  Approved: {
    background: "bg-[#B6ECCE]",
    text: "text-[#056144]",
  },
  Pending: {
    background: "bg-[#FDF4BF]",
    text: "text-[#774B04]",
  },
  Rejected: {
    background: "bg-[#F9CFC1]",
    text: "text-[#720807]",
  },
};

const TransactionNotesTable = ({ onEdit, items }) => {
  return (
    <table className="w-full border-collapse ">
      <thead>
        <tr className=" border-b border-gray-300 font-thin">
          <td className=" px-4 py-4">Note No</td>
          <td className=" px-4 py-4">Type</td>
          <td className=" px-4 py-4">Status</td>
          <td className=" px-4 py-4">Date signed</td>
          <td className=" px-4 py-4">Amount</td>
          <td className=" px-4 py-4">Prepared by</td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className="cursor-pointer hover:bg-gray-50 border-b border-gray-300"
            onClick={() => onEdit(item)}
          >
            <td className=" px-4 py-4">{item.noteNo}</td>
            <td className=" px-4 py-4">{item.type}</td>
            <td className="px-4 py-4">
              <span
                className={` text-sm py-1 px-1.5 rounded-lg ${
                  statusStyles[item.status]?.background || ""
                } ${statusStyles[item.status]?.text || ""}`}
              >
                {item.status}
              </span>
            </td>
            <td className=" px-4 py-4">{item.dateSigned}</td>
            <td className=" px-4 py-4">{item.amount}</td>
            <td className=" px-4 py-4">{item.preparedBy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionNotesTable;
