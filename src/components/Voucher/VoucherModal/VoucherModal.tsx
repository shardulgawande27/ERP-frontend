import { useEffect, useState } from "react";
import DocIcon from "../../../../public/assets/svg-icons/DocIcon";

const VoucherModal = ({ isOpen, onClose, onSave, voucher }) => {
  const [formData, setFormData] = useState({
    id: voucher?.id || 0,
    date: voucher?.date || "",
    voucherNo: voucher?.voucherNo || "",
    type: voucher?.type || "Petty",
    preparedBy: voucher?.preparedBy || "Admin1",
    authorizedBy: voucher?.authorizedBy || "Admin1",
    paidTo: voucher?.paidTo || "Admin1",
    status: voucher?.status || "Pending",
    amount: voucher?.amount || "",
    dateSigned: voucher?.dateSigned || "",
    moreInfo: voucher?.moreInfo || "",
  });

  useEffect(() => {
    if (voucher) {
      setFormData({
        id: voucher?.id,
        date: voucher?.date,
        voucherNo: voucher?.voucherNo,
        type: voucher?.type,
        preparedBy: voucher?.preparedBy,
        authorizedBy: voucher?.authorizedBy,
        paidTo: voucher?.paidTo,
        status: voucher?.status,
        amount: voucher?.amount,
        dateSigned: voucher?.dateSigned,
        moreInfo: voucher?.moreInfo,
      });
    } else if (voucher === null) {
      setFormData({
        id: "",
        date: "",
        voucherNo: "",
        type: "",
        preparedBy: "",
        authorizedBy: "",
        paidTo: "",
        status: "",
        amount: "",
        dateSigned: "",
        moreInfo: "",
      });
    }
  }, [voucher]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-[60%] p-4 max-h-[100vh] overflow-y-auto">
        <h2 className="flex items-center gap-2 text-2xl font-medium mb-4">
          <DocIcon color="black" size={32} />{" "}
          {voucher ? "Edit Voucher" : "Create Voucher"}
        </h2>
        <div className="flex flex-col gap-10 mt-8">
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Date</h3>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
                placeholder="Date"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Voucher No</h3>
              <input
                type="text"
                name="voucherNo"
                value={formData.voucherNo}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
                placeholder="Voucher No"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Type</h3>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="Petty">Petty</option>
                <option value="Cash">Cash</option>
                <option value="Contra">Contra</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between space-x-4">
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Amount</h3>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
                placeholder="amount"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Prepared By</h3>
              <select
                name="preparedBy"
                value={formData.preparedBy}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="Admin1">Admin1</option>
                <option value="Admin2">Admin2</option>
                <option value="Admin3">Admin3</option>
              </select>
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Authorized By</h3>
              <select
                name="authorizedBy"
                value={formData.authorizedBy}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="Admin1">Admin1</option>
                <option value="Admin2">Admin2</option>
                <option value="Admin3">Admin3</option>
              </select>
            </div>
          </div>
          <div className="flex justify-start space-x-4">
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Paid to</h3>
              <select
                name="paidTo"
                value={formData.paidTo}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="Admin1">Admin1</option>
                <option value="Admin2">Admin2</option>
                <option value="Admin3">Admin3</option>
              </select>
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Status</h3>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>

            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Date signed</h3>
              <input
                type="date"
                name="dateSigned"
                value={formData.dateSigned}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
                placeholder="Date"
              />
            </div>
          </div>
          <div className="">
            <h3 className="text-base text-[#6B7785]">More info</h3>
            <textarea
              name="moreInfo"
              value={formData.moreInfo}
              onChange={handleChange}
              className="w-full border p-2 mt-2"
              placeholder="More Information"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoucherModal;
