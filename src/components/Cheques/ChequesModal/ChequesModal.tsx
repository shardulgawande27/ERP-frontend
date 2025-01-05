import { useEffect, useState } from "react";
import DocIcon from "../../../../public/assets/svg-icons/DocIcon";

const ChequesModal = ({ isOpen, onClose, onSave, cheque }) => {
  const [formData, setFormData] = useState({
    id: cheque?.id || 0,
    date: cheque?.dateCreated || "",
    chequeNo: cheque?.chequeNo || "",
    type: cheque?.type || "",
    preparedBy: cheque?.preparedBy || "",
    authorizedBy: cheque?.authorizedBy || "",
    paidTo: cheque?.paidTo || "",
    status: cheque?.status || "",
    amount: cheque?.amount || "",
    dateSigned: cheque?.dateSigned || "",
    moreInfo: cheque?.moreInfo || "",
    paymentType: cheque?.paymentType || "",
    customerName: cheque?.customerName || "",
    chequeBankName: cheque?.chequeBankName || "",
  });

  useEffect(() => {
    if (cheque) {
      setFormData({
        id: cheque?.id,
        date: cheque?.date,
        chequeNo: cheque?.chequeNo,
        type: cheque?.type,
        preparedBy: cheque?.preparedBy,
        authorizedBy: cheque?.authorizedBy,
        paidTo: cheque?.paidTo,
        status: cheque?.status,
        amount: cheque?.amount,
        dateSigned: cheque?.dateSigned,
        moreInfo: cheque?.moreInfo,
        paymentType: cheque?.paymentType,
        customerName: cheque?.customerName,
        chequeBankName: cheque?.chequeBankName,
      });
    } else if (cheque === null) {
      setFormData({
        id: "",
        date: "",
        chequeNo: "",
        type: "",
        preparedBy: "",
        authorizedBy: "",
        paidTo: "",
        status: "",
        amount: "",
        dateSigned: "",
        moreInfo: "",
        paymentType: "",
        customerName: "",
        chequeBankName: "",
      });
    }
  }, [cheque]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  console.log("formData>>>>>>>>>>>>.", formData);
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
          {cheque ? "Edit cheque" : "Create cheque"}
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
              <h3 className="text-base text-[#6B7785]">cheque No</h3>
              <input
                type="text"
                name="chequeNo"
                value={formData.chequeNo}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
                placeholder="cheque No"
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
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
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
          <div className="flex justify-start space-x-4">
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Payment Type</h3>
              <select
                name="paidTo"
                value={formData.paymentType}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="supplierPayment">Supplier Payment</option>
                <option value="generalPayment">General Payment</option>
              </select>
            </div>
            <div className="flex-1">
              <h3 className="text-base text-[#6B7785]">Cheque Bank Name</h3>
              <select
                name="status"
                value={formData.chequeBankName}
                onChange={handleChange}
                className="w-full border p-2 mt-2"
              >
                <option value="arabBank">Arab Bank</option>
                <option value="centtralBank">Central Bank</option>
                <option value="hdfcBank">HDFC Bank</option>
              </select>
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

export default ChequesModal;
