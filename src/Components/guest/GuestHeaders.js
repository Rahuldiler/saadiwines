const guestHeaders = [
  {
    accessorKey: "fullName",
    header: "Name",
    size: 130,
    minSize: 130,
    maxSize: 130,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
    muiTableBodyCellProps: {
      display: "inline",
    },
  },
  {
    accessorKey: "nickName",
    header: "Nick Name",
    size: 130,
    minSize: 130,
    maxSize: 130,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
    muiTableBodyCellProps: {
      display: "inline",
    },
    muiTableHeadCellProps: {
      width: "80%",
    },
  },
  {
    accessorKey: "family",
    header: "Family Name",
    size: 130,
    minSize: 130,
    maxSize: 130,
    filterFn: "startsWith",
    enableEditing: "false",
    type: "text",
  },
  {
    accessorKey: "cohort",
    header: "Cohort",
    description: "This column has a value getter and is not sortable.",
    size: 130,
    type: "singleSelect",
    valueOptions: cohortOptions,
    filterVariant: "select",
    enableEditing: "false",
    filterSelectOptions: cohortOptions,
    type: "select",
  },
  {
    accessorKey: "contact",
    header: "Phone Numbers",
    description: "This column has a value getter and is not sortable.",
    enableSorting: false,
    enableEditing: "false",
    type: "number",
    size: 200,
    Cell: ({ cell }) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {cell
          .getValue()
          .split(",")
          .splice(0, 2)
          .map((val, index) => (
            <Chip
              variant="outlined"
              color={index == 0 ? "success" : "primary"}
              size="small"
              label={val}
              // onDelete={() => handlePhoneNumberDelete(val)}
            />
          ))}
      </Box>
    ),
  },
  {
    accessorKey: "headCount",
    header: "No. of Guests",
    description: "This column has a value getter and is not sortable.",
    type: "number",
    enableEditing: "false",
    size: 140,
    muiTableBodyCellProps: {
      align: "center",
    },
  },
  {
    accessorKey: "isInvitationSent",
    header: "Is Invited",
    description: "This column has a value getter and is not sortable.",
    size: 130,
    type: "checkBox",
    enableEditing: "false",
    filterVariant: "select",
    enableEditing: "false",
    filterSelectOptions: [
      { text: "Yes", value: "true" },
      { text: "No", value: "false" },
    ],
    Cell: ({ cell }) => <Checkbox disabled checked={cell.getValue()} />,
  },
];
