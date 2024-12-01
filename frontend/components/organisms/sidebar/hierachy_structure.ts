export const hierarchyData = [
    {
      id: "central_office",
      name: "Центральный офис",
      children: [
        {
          id: "Корпоративный блок",
          name: "Корпоративный блок",
          children: [
            {
              id: "online_banking_business",
              name: "онлайн-банкинг для бизнеса",
              children: [{ id: "sales_2", name: "Отдел продаж 2" }],
            },
            { id: "transaction_products", name: "транзакционные продукты" },
            { id: "branch_management", name: "Управление по работе с филиалами" },
          ],
        },
        {
          id: "retail_block",
          name: "Розничный блок",
          children: [
            { id: "online_banking", name: "онлайн-банкинг" },
            { id: "branch_management", name: "Управление по работе с филиалами" },
          ],
        },
      ],
    },
    {
      id: "orenburg_branch",
      name: "Филиал в Оренбургской области",
      children: [
        {
          id: "corporate_block",
          name: "Корпоративный блок",
          children: [
            {
              id: "large_clients",
              name: "Управление по работе с клиентами крупного и среднего бизнеса",
              children: [
                { id: "credit_department", name: "Отдел кредитования" },
                { id: "sales_1", name: "Отдел продаж 1" },
                { id: "sales_2", name: "Отдел продаж 2" },
              ],
            },
            {
              id: "small_clients",
              name: "Управление по работе с клиентами малого бизнеса",
              children: [
                { id: "department_1", name: "Отдел 1" },
                { id: "department_2", name: "Отдел 2" },
                { id: "credit_department", name: "Отдел кредитования" },
              ],
            },
          ],
        },
      ],
    },
  ];