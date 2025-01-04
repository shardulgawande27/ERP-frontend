export const sidebarData = [
  {
    parent: {
      label: "Dashboard",
      link: "/dashboard",
    },
  },
  {
    parent: {
      label: "Accounts",
      link: "/accounts",
    },
    children: [
      {
        label: "Vouchers",
        link: "/accounts/vouchers",
      },
      {
        label: "Transaction note",
        link: "/accounts/transaction-notes",
      },
      {
        label: "Cheque",
        link: "/accounts/cheques",
      },
      {
        label: "Reconciliation",
        link: "/accounts/reconciliation",
      },
    ],
  },
];
