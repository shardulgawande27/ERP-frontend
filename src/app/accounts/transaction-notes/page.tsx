"use client";
import React, { useState } from "react";
import { accountsData } from "../../../utils/accountsData";
import Header from "@/components/Header/Header";

import DocIcon from "../../../../public/assets/svg-icons/DocIcon";
import TransactionNotesTable from "@/components/TransactionNotes/TransactionNotesTable/TransactionNotesTable";
import TransactionNotesModal from "@/components/TransactionNotes/TransactionNotesModal/TransactionNotesModal";

const TransactionNotes = () => {
  const { transactionNotes = {} } = accountsData;
  const { header = {}, items = [] } = transactionNotes;
  const { breadcrumb1 = "", breadcrumb2 = "" } = header;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
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
    setSelectedNote(null);
    setIsModalOpen(true);
  };

  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsModalOpen(true);
  };

  const handleSave = (data) => {
    const { transactionNotes } = accountsData;

    if (data.id) {
      const index = transactionNotes.items.findIndex(
        (item) => item.id === data.id
      );
      if (index !== -1) {
        transactionNotes.items[index] = {
          ...transactionNotes.items[index],
          ...data,
        };
        console.log("Updated Voucher:", transactionNotes.items[index]);
      } else {
        console.error("Voucher not found for editing:", data.id);
      }
    } else {
      const newId = transactionNotes.items.length
        ? Math.max(...transactionNotes.items.map((item) => item.id)) + 1
        : 1;

      const newNote = { ...data, id: newId };

      transactionNotes.items.push(newNote);
      console.log("Created New Voucher:", newNote);
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
        <h1 className=" font-extralight mb-2 text-[34px]">Transaction Notes</h1>
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
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
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
              <option value="Admin1">Admin 1</option>
              <option value="Admin2">Admin 2</option>
              <option value="Admin3">Admin 3</option>
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
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Filter
            </button>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-gray-300 text-black rounded"
            >
              Reset Filters
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end items-center mb-4">
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white"
          >
            <DocIcon />
            Create Note
          </button>
        </div>
        <TransactionNotesTable items={filteredItems} onEdit={handleEdit} />
        <TransactionNotesModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
          note={selectedNote}
        />
      </div>
    </>
  );
};

export default TransactionNotes;
