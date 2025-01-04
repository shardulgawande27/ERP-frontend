import { accountsData } from "../../../utils/accountsData";

const VoucherTable = ({ onEdit }) => {
  const { items } = accountsData.vouchers;

  return (
    <table className="w-full border-collapse ">
      <tr className=" border-b border-gray-300 font-thin">
        <td className=" px-4 py-4">Voucher No</td>
        <td className=" px-4 py-4">Type</td>
        <td className=" px-4 py-4">Status</td>
        <td className=" px-4 py-4">Authorized by</td>
        <td className=" px-4 py-4">Date signed</td>
        <td className=" px-4 py-4">Amount</td>
      </tr>

      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className="cursor-pointer hover:bg-gray-50 border-b border-gray-300"
            onClick={() => onEdit(item)}
          >
            <td className=" px-4 py-4">{item.voucherNo}</td>
            <td className=" px-4 py-4">{item.type}</td>
            <td className=" px-4 py-4">{item.status}</td>
            <td className=" px-4 py-4">{item.authorizedBy}</td>
            <td className=" px-4 py-4">{item.dateSigned}</td>
            <td className=" px-4 py-4">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VoucherTable;
