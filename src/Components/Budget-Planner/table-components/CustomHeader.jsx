import { COLORS } from "@/Components/Utils/ConstantTheme";
import { TableCell, Typography } from "@mui/material";

export const CustomHeader = ({ title }) => {
  return (
    <TableCell>
      <Typography
        textAlign={"center"}
        variant="subtitle2"
        fontWeight={600}
        color={COLORS.black}
      >
        {title}
      </Typography>
    </TableCell>
  );
};

