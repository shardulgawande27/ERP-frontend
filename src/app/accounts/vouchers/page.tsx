"use client";
import React, { useState } from "react";
import { accountsData } from "../../../utils/accountsData";
import Header from "@/components/Header/Header";
import VoucherTable from "@/components/Voucher/VoucherTable/VoucherTable";
import VoucherModal from "@/components/Voucher/VoucherModal/VoucherModal";
import DocIcon from "../../../../public/assets/svg-icons/DocIcon";

const Vouchers = () => {
  const { vouchers = {} } = accountsData;
  const { header = {}, items = [] } = vouchers as any;
  const { breadcrumb1 = "", breadcrumb2 = "" } = header;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const handleCreate = () => {
    setSelectedVoucher(null);
    setIsModalOpen(true);
  };

  const handleEdit = (voucher) => {
    setSelectedVoucher(voucher);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    const { vouchers } = accountsData;

    if (data.id) {
      console.log("indataId>>>>>>>>>>>>>>");
      const index = vouchers.items.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        vouchers.items[index] = { ...vouchers.items[index], ...data };
        console.log("Updated Voucher:", vouchers.items[index]);
      } else {
        console.error("Voucher not found for editing:", data.id);
      }
    } else {
      console.log("in new>>>>>>>>>>>>>>>>", data);
      const newId = vouchers.items.length
        ? Math.max(...vouchers.items.map((item) => item.id)) + 1
        : 1;

      const newVoucher = { ...data, id: newId };

      vouchers.items.push(newVoucher);
      console.log("Created New Voucher:", newVoucher);
    }

    console.log("Updated Accounts Data:", accountsData);
  };
  return (
    <>
      <Header {...{ breadcrumb1, breadcrumb2 }} />
      <div className="px-[32px] py-[22px]">
        <h1 className=" font-extralight mb-2 text-[34px]">Vouchers</h1>
      </div>
      <div className="p-4">
        <div className="w-full flex justify-end items-center mb-4">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white"
          >
            <DocIcon />
            Create Voucher
          </button>
        </div>
        <VoucherTable onEdit={handleEdit} />
        <VoucherModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          voucher={selectedVoucher}
        />
      </div>
    </>
  );
};

export default Vouchers;
