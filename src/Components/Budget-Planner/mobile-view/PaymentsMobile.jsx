import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { COLORS } from "@/Components/utils/ConstantTheme";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import {
  deleteTransaction,
  fetchAllTransactions,
} from "@/services/transaction/transaction";
import { useState } from "react";
import { useEffect } from "react";
import { RenderDialogForPayment } from "../common/RenderDialog";
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const PaymentsMobile = ({}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trackChange, setTrackChanges] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchAllTransactions().then((transaction) => {
      setData(transaction.data);
      setLoading(false);
    });
  }, [trackChange]);
  const formateData = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };
  const renderDeleteButton = (id) => {
    return (
      <Box
        onClick={() =>
          deleteTransaction(id).then(() => setTrackChanges((p) => !p))
        }
        sx={{ color: COLORS.primary }}
      >
        <DeleteOutlineIcon />
      </Box>
    );
  };
  // Edit
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItemForDialog, setSelectedItemForDialog] = useState(null);
  const [isEditingTransaction, setIsEditingTransaction] = useState({
    isEditing: false,
    transaction: {},
  });
  const renderEditButton = (transaction) => {
    return (
      <Box
        onClick={() => {
          setIsEditingTransaction({
            ...isEditingTransaction,
            isEditing: true,
            transaction: transaction,
          });
          setSelectedItemForDialog(transaction.subCategoryId);
          setDialogOpen(true);
        }}
        sx={{ color: COLORS.primary }}
      >
        <DriveFileRenameOutlineIcon />
      </Box>
    );
  };
  return (
    <Box mb={6}>
      <Typography textAlign={"center"} variant="h6" my={1} fontWeight={"700"}>
        Payments
      </Typography>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      ) : !loading && data.length === 0 ? (
        <Box textAlign={"center"}>
          <Typography>No Transactions found</Typography>
        </Box>
      ) : (
        <Box>
          {selectedItemForDialog && (
            <RenderDialogForPayment
              handleCloseDialog={() => setDialogOpen(false)}
              openDialog={dialogOpen}
              subCategoryId={selectedItemForDialog}
              setTrackChanges={setTrackChanges}
              isEditingTransaction={isEditingTransaction}
              isDesktop
            />
          )}
          {data.map((transaction) => {
            return (
              <AccordionDetails sx={{ p: 1, m: 1, px: 2 }} key={transaction.id}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  mb={0.5}
                  mt={1}
                >
                  <Box display={"flex"}>
                    <Typography
                      fontWeight={600}
                      fontFamily={"inherit"}
                      variant="subtitle1"
                      fontSize={17}
                    >
                      {transaction.name}
                    </Typography>
                  </Box>
                  <Box display={"flex"}>
                    {renderEditButton(transaction)}
                    {renderDeleteButton(transaction.id)}
                  </Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    width={"60%"}
                    overflow={"clip"}
                  >
                    <Box ml={0}>
                      <Typography
                        fontSize={14}
                        color={COLORS.gray}
                        variant="caption"
                        mr={0.4}
                        textAlign={"center"}
                      >
                        {transaction.categoryName}
                      </Typography>
                      <ArrowRightAltIcon />
                      <Typography
                        fontSize={14}
                        color={COLORS.gray}
                        variant="caption"
                        textAlign={"center"}
                        noWrap={true}
                        overflow={"clip"}
                      >
                        {transaction.subCategoryName}
                      </Typography>
                      <br />
                      <Typography
                        fontSize={14}
                        color={COLORS.gray}
                        variant="caption"
                        ml={0}
                        textAlign={"center"}
                      >
                        {/* Date */}
                        Date: {formateData(transaction.createdDate)}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="caption"
                    fontSize={14}
                    color={COLORS.gray}
                    mt={0}
                  >
                    Amount: ₹ {transaction.amount}
                  </Typography>
                </Box>
              </AccordionDetails>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default PaymentsMobile;
