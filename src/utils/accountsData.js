export const accountsData = {
  vouchers: {
    header: {
      breadcrumb1: "Accounts",
      breadcrumb2: "Vouchers",
    },
    items: [
      {
        id: 1,
        voucherNo: "V001",
        type: "Cash",
        status: "Approved",
        authorizedBy: "Admin1",
        dateSigned: "2025-01-01",
        amount: 1000,
        preparedBy: "Admin2",
        paidTo: "Admin3",
        date: "2025-01-01",
        moreInfo: "Payment for office supplies",
      },
    ],
  },
  transactionNotes: [
    { id: 1, note: "Transaction note 1", details: "Details for note 1" },
    { id: 2, note: "Transaction note 2", details: "Details for note 2" },
  ],
  cheques: [
    { id: 1, chequeNumber: "CHQ001", amount: 2000, date: "2025-01-01" },
    { id: 2, chequeNumber: "CHQ002", amount: 3000, date: "2025-01-03" },
  ],
  reconciliations: [
    { id: 1, details: "Reconciliation 1", status: "Complete" },
    { id: 2, details: "Reconciliation 2", status: "Pending" },
  ],
};
