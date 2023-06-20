import { COLORS } from "@/Components/Utils/ConstantTheme";
import { TableCell, Typography } from "@mui/material";

export const CustomCell = ({ title }) => {
  return (
    <TableCell>
      <Typography
        textAlign={"center"}
        variant="subtitle2"
        fontWeight={700}
        color={COLORS.gray}
      >
        {title}
      </Typography>
    </TableCell>
  );
};
