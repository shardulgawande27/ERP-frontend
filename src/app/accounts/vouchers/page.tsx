"use client";
import React, { useState } from "react";
import { accountsData } from "../../../utils/accountsData";
import Header from "@/components/Header/Header";
import VoucherTable from "@/components/Voucher/VoucherTable/VoucherTable";
import VoucherModal from "@/components/Voucher/VoucherModal/VoucherModal";
import DocIcon from "../../../../public/assets/svg-icons/DocIcon";

const Vouchers = () => {
  const { vouchers = {} } = accountsData;
  const { header = {}, items = [] } = vouchers;
  const { breadcrumb1 = "", breadcrumb2 = "" } = header;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [filters, setFilters] = useState({
    type: "",
    status: "",
    authorizedBy: "",
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
  });
  const [filteredItems, setFilteredItems] = useState(items);

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
      const index = vouchers.items.findIndex((item) => item.id === data.id);
      if (index !== -1) {
        vouchers.items[index] = { ...vouchers.items[index], ...data };
        console.log("Updated Voucher:", vouchers.items[index]);
      } else {
        console.error("Voucher not found for editing:", data.id);
      }
    } else {
      const newId = vouchers.items.length
        ? Math.max(...vouchers.items.map((item) => item.id)) + 1
        : 1;

      const newVoucher = { ...data, id: newId };

      vouchers.items.push(newVoucher);
      console.log("Created New Voucher:", newVoucher);
    }

    console.log("Updated Accounts Data:", accountsData);
  };

  const handleFilter = () => {
    const filtered = items.filter((item) => {
      const matchesType = filters.type ? item.type === filters.type : true;
      const matchesStatus = filters.status
        ? item.status === filters.status
        : true;
      const matchesAuthorizedBy = filters.authorizedBy
        ? item.authorizedBy
            .toLowerCase()
            .includes(filters.authorizedBy.toLowerCase())
        : true;
      const matchesDate =
        filters.startDate || filters.endDate
          ? new Date(item.dateSigned) >=
              new Date(filters.startDate || "1970-01-01") &&
            new Date(item.dateSigned) <=
              new Date(filters.endDate || "9999-12-31")
          : true;
      const matchesAmount =
        (filters.minAmount
          ? item.amount >= parseFloat(filters.minAmount)
          : true) &&
        (filters.maxAmount
          ? item.amount <= parseFloat(filters.maxAmount)
          : true);

      return (
        matchesType &&
        matchesStatus &&
        matchesAuthorizedBy &&
        matchesDate &&
        matchesAmount
      );
    });

    setFilteredItems(filtered);
  };

  const handleResetFilters = () => {
    setFilters({
      type: "",
      status: "",
      authorizedBy: "",
      startDate: "",
      endDate: "",
      minAmount: "",
      maxAmount: "",
    });
    setFilteredItems(items);
  };

  return (
    <>
      <Header {...{ breadcrumb1, breadcrumb2 }} />
      <div className="px-[32px] py-[22px]">
        <h1 className=" font-extralight mb-2 text-[34px]">Vouchers</h1>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Filter Vouchers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {/* Type Dropdown */}
            <select
              className="p-2 border rounded"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Payment">Payment</option>
              <option value="Receipt">Receipt</option>
              <option value="Journal">Journal</option>
              <option value="Contra">Contra</option>
              <option value="Cash">Cash</option>
            </select>

            {/* Status Dropdown */}
            <select
              className="p-2 border rounded"
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">Select Status</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
            </select>

            {/* Authorized By Dropdown */}
            <select
              className="p-2 border rounded"
              value={filters.authorizedBy}
              onChange={(e) =>
                setFilters({ ...filters, authorizedBy: e.target.value })
              }
            >
              <option value="">Select Authorized By</option>
              <option value="Admin 1">Admin 1</option>
              <option value="Admin 2">Admin 2</option>
              <option value="Admin 3">Admin 3</option>
            </select>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            {/* Date Filters */}
            <input
              type="date"
              placeholder="Start Date"
              className="flex-1 p-2 border rounded"
              value={filters.startDate}
              onChange={(e) =>
                setFilters({ ...filters, startDate: e.target.value })
              }
            />
            <input
              type="date"
              placeholder="End Date"
              className="flex-1 p-2 border rounded"
              value={filters.endDate}
              onChange={(e) =>
                setFilters({ ...filters, endDate: e.target.value })
              }
            />

            {/* Amount Filters */}
            <input
              type="number"
              placeholder="Min Amount"
              className="flex-1 p-2 border rounded"
              value={filters.minAmount}
              onChange={(e) =>
                setFilters({ ...filters, minAmount: e.target.value })
              }
            />
            <input
              type="number"
              placeholder="Max Amount"
              className="flex-1 p-2 border rounded"
              value={filters.maxAmount}
              onChange={(e) =>
                setFilters({ ...filters, maxAmount: e.target.value })
              }
            />
          </div>
          <div className="flex justify-start gap-4 mt-4">
            <button
              onClick={handleFilter}
              className="px-4 py-2 bg-[#4153F0] rounded-lg text-white rounded"
            >
              Filter
            </button>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2  text-black rounded"
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end items-center mb-4">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-[#4153F0] rounded-lg text-white"
          >
            <DocIcon />
            Create Voucher
          </button>
        </div>
        <VoucherTable items={filteredItems} onEdit={handleEdit} />
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
