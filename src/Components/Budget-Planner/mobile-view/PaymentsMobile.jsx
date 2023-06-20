import { Box, Button, Chip, CircularProgress, Typography } from "@mui/material";
import React from "react";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import { COLORS } from "@/Components/utils/ConstantTheme";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: theme.spacing(1),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const PaymentsMobile = ({ category, loading }) => {
  const formateData = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString().split("/").join("-");
    return formattedDate;
  };
  return (
    <Box mb={6}>
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
      ) : !loading && category.length === 0 ? (
        <Box>
          <Typography>No results found.</Typography>
        </Box>
      ) : (
        <Box>
          <Typography
            textAlign={"center"}
            variant="h6"
            my={1}
            fontWeight={"700"}
          >
            Payments
          </Typography>
          {category.map((category) => {
            return category.subCategory.map((subCategory) => {
              if (subCategory.budgetTransaction.length == 0) {
                return;
                // return (
                //   <AccordionDetails
                //     sx={{ p: 1, m: 1, px: 2 }}
                //     key={subCategory.id}
                //   >
                //     <Box display={"flex"} justifyContent={"space-between"} mb={1}>
                //       <Box display={"flex"}>
                //         <Typography
                //           fontWeight={500}
                //           fontFamily={"inherit"}
                //           variant="subtitle2"
                //         >
                //           {category.name}
                //         </Typography>
                //       </Box>
                //       <Chip
                //         // To edit sub category.
                //         // onClick={() => handleTransaction(subCategory.id)}
                //         sx={{
                //           px: 1,
                //           py: 0,
                //           mt: 1,
                //           backgroundColor: COLORS.primary,
                //           color: COLORS.white,
                //         }}
                //         size="small"
                //         label={"Delete"}
                //       ></Chip>
                //     </Box>
                //     <Box display={"flex"} justifyContent={"space-between"}>
                //       <Box display={"flex"} alignItems={"center"}>
                //         <Box ml={0} width={"100px"}>
                //           <Typography
                //             color={COLORS.gray}
                //             variant="caption"
                //             ml={1}
                //             textAlign={"center"}
                //           >
                //             Cost: ₹ {subCategory.expectedAmount}
                //           </Typography>
                //           {/* <BorderLinearProgress
                //             progress={calculateProgress(
                //               subCategory.expectedAmount,
                //               calculateBudgetTransaction(
                //                 subCategory.budgetTransaction
                //               )
                //             )}
                //           /> */}
                //         </Box>
                //       </Box>
                //       <Typography color={COLORS.gray} variant="caption" mt={2}>
                //         Paid: ₹ 1000
                //       </Typography>
                //     </Box>
                //   </AccordionDetails>
                // );
              }
              return subCategory.budgetTransaction.map((transaction) => {
                return (
                  <AccordionDetails
                    sx={{ p: 1, m: 1, px: 2 }}
                    key={transaction.id}
                  >
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
                      <Chip
                        // To edit sub category.
                        // onClick={() => handleTransaction(subCategory.id)}
                        sx={{
                          px: 1,
                          backgroundColor: COLORS.primary,
                          color: COLORS.white,
                        }}
                        size="small"
                        label={"Delete"}
                      />
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
                            {category.name}
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
                            {subCategory.name}
                          </Typography>
                          <br />
                          <Typography
                            fontSize={14}
                            color={COLORS.gray}
                            variant="caption"
                            ml={0}
                            textAlign={"center"}
                          >
                            Date: {formateData(transaction.dateAdded)}
                          </Typography>
                          {/* <BorderLinearProgress
                          progress={calculateProgress(
                            subCategory.expectedAmount,
                            calculateBudgetTransaction(
                              subCategory.budgetTransaction
                            )
                          )}
                        /> */}
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
              });
            });
          })}
        </Box>
      )}
    </Box>

    // <AccordionDetails sx={{ p: 1, m: 1, px: 2 }}>
    //   <Box display={"flex"} justifyContent={"space-between"} mb={1}>
    //     <Box display={"flex"}>
    //       <Typography
    //         fontWeight={500}
    //         fontFamily={"inherit"}
    //         variant="subtitle2"
    //       >
    //         {subCategory.name}
    //       </Typography>
    //       <DriveFileRenameOutlineIcon
    //         fontSize="small"
    //         sx={{
    //           cursor: "pointer",
    //           color: COLORS.primary,
    //           // ml: 0.5,
    //           // mt: 0.2,
    //         }}
    //         onClick={(e) => handleClick(e, subCategory)}
    //       />
    //     </Box>
    //     <Chip
    //       // To edit sub category.
    //       onClick={() => handleTransaction(subCategory.id)}
    //       sx={{
    //         px: 1,
    //         py: 0,
    //         mt: 1,
    //         backgroundColor: COLORS.primary,
    //         color: COLORS.white,
    //       }}
    //       size="small"
    //       label={"+"}
    //     ></Chip>
    //   </Box>
    //   <Box display={"flex"} justifyContent={"space-between"}>
    //     <Box display={"flex"} alignItems={"center"}>
    //       <Box ml={0} width={"100px"}>
    //         <Typography
    //           color={COLORS.gray}
    //           variant="caption"
    //           ml={1}
    //           textAlign={"center"}
    //         >
    //           Cost: ₹ {subCategory.expectedAmount}
    //         </Typography>
    //         <BorderLinearProgress
    //           progress={calculateProgress(
    //             subCategory.expectedAmount,
    //             calculateBudgetTransaction(subCategory.budgetTransaction)
    //           )}
    //         />
    //       </Box>
    //     </Box>
    //     <Typography color={COLORS.gray} variant="caption" mt={2}>
    //       Paid: ₹ {subCategory && calculateFinalCost(subCategory)}
    //     </Typography>
    //   </Box>
    // </AccordionDetails>
  );
};

export default PaymentsMobile;
