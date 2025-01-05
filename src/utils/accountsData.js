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
        type: "Payment",
        status: "Approved",
        authorizedBy: "John Doe",
        dateSigned: "2023-12-01",
        amount: 5000,
      },
      {
        id: 2,
        voucherNo: "V002",
        type: "Receipt",
        status: "Pending",
        authorizedBy: "Jane Smith",
        dateSigned: "2023-12-15",
        amount: 1200,
      },
      {
        id: 3,
        voucherNo: "V003",
        type: "Journal",
        status: "Rejected",
        authorizedBy: "Robert Brown",
        dateSigned: "2023-11-20",
        amount: 2500,
      },
      {
        id: 4,
        voucherNo: "V004",
        type: "Contra",
        status: "Approved",
        authorizedBy: "Emily Davis",
        dateSigned: "2023-11-25",
        amount: 3200,
      },
      {
        id: 5,
        voucherNo: "V005",
        type: "Payment",
        status: "Pending",
        authorizedBy: "Michael Lee",
        dateSigned: "2023-12-10",
        amount: 8000,
      },
    ],
  },
  transactionNotes: {
    header: {
      breadcrumb1: "Accounts",
      breadcrumb2: "Transaction-note",
    },
    items: [
      {
        id: 1,
        noteNo: "TN-001",
        type: "Credit",
        status: "Approved",
        dateCreated: "2025-01-01",
        amount: 1500.0,
        preparedBy: "Admin1",
        dateSigned: "2025-01-02",
        paymentType: "Customer Receipt",
        accountName: "Account A",
        customerName: "general-trading",
        authorizedBy: "admin1",
      },
      {
        id: 2,
        noteNo: "TN-002",
        type: "Debit",
        status: "Pending",
        dateCreated: "2025-01-02",
        amount: 200.0,
        preparedBy: "Admin2",
        dateSigned: "2025-01-03",
        paymentType: "General Receipt",
        accountName: "Account B",
        customerName: "abdul-nabi",
        authorizedBy: "admin2",
      },
      {
        id: 3,
        noteNo: "TN-003",
        type: "Credit",
        status: "Rejected",
        dateCreated: "2025-01-03",
        amount: 1200.0,
        preparedBy: "Admin1",
        dateSigned: "2025-01-04",
        paymentType: "Customer Receipt",
        accountName: "Account C",
        customerName: "general-trading",
        authorizedBy: "admin1",
      },
      {
        id: 4,
        noteNo: "TN-004",
        type: "Debit",
        status: "Approved",
        dateCreated: "2025-01-04",
        amount: 500.0,
        preparedBy: "Admin3",
        dateSigned: "2025-01-05",
        paymentType: "General Receipt",
        accountName: "Account D",
        customerName: "abdul-nabi",
        authorizedBy: "admin3",
      },
      {
        id: 5,
        noteNo: "TN-005",
        type: "Credit",
        status: "Pending",
        dateCreated: "2025-01-05",
        amount: 300.0,
        preparedBy: "Admin2",
        dateSigned: "2025-01-06",
        paymentType: "Customer Receipt",
        accountName: "Account E",
        customerName: "cash-customer",
        authorizedBy: "admin2",
      },
    ],
  },
  cheques: {
    header: {
      breadcrumb1: "Accounts",
      breadcrumb2: "Cheques",
    },
    items: [
      {
        id: 1,
        chequeNo: "CHQ-001",
        type: "Receipt",
        status: "Collected",
        dueDate: "2025-01-15",
        dateCreated: "2025-01-01",
        amount: 2500.0,

        dateSigned: "2025-01-10",
        paymentType: "generalPayment",
        chequeBankName: "hdfcBank",
        authorizedBy: "Admin1",
        preparedBy: "Admin2",
      },
      {
        id: 2,
        chequeNo: "CHQ-002",
        type: "Payment",
        status: "Past Due",
        dueDate: "2025-01-12",
        dateCreated: "2025-01-05",
        amount: 1500.0,

        dateSigned: "2025-01-11",
        paymentType: "supplierPayment",
        chequeBankName: "hdfcBank",
        authorizedBy: "Admin2",
        preparedBy: "Admin3",
      },
      {
        id: 3,
        chequeNo: "CHQ-003",
        type: "Receipt",
        status: "Canceled",
        dueDate: "2025-01-20",
        dateCreated: "2025-01-08",
        amount: 1000.0,

        dateSigned: "2025-01-15",
        paymentType: "generalPayment",
        chequeBankName: "centtralBank",
        authorizedBy: "Admin3",
        preparedBy: "Admin2",
      },
      {
        id: 4,
        chequeNo: "CHQ-004",
        type: "Payment",
        status: "Collected",
        dueDate: "2025-01-25",
        dateCreated: "2025-01-10",
        amount: 5000.0,

        dateSigned: "2025-01-20",
        paymentType: "supplierPayment",
        chequeBankName: "arabBank",
        authorizedBy: "Admin1",
        preparedBy: "Admin3",
      },
      {
        id: 5,
        chequeNo: "CHQ-005",
        type: "Receipt",
        status: "Past Due",
        dueDate: "2025-01-30",
        dateCreated: "2025-01-15",
        amount: 2000.0,

        dateSigned: "2025-01-25",
        paymentType: "generalPayment",
        chequeBankName: "arabBank",
        authorizedBy: "Admin2",
        preparedBy: "Admin1",
      },
    ],
  },
  reconciliations: [
    { id: 1, details: "Reconciliation 1", status: "Complete" },
    { id: 2, details: "Reconciliation 2", status: "Pending" },
  ],
};
