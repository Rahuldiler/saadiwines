import { COLORS } from "@/Components/utils/ConstantTheme";
import { TableCell, Typography } from "@mui/material";

export const CustomHeader = ({ title, weight, alignment }) => {
  return (
    <TableCell>
      <Typography
        textAlign={alignment ?? "center"}
        variant="subtitle2"
        fontWeight={weight ?? 600}
        color={COLORS.black}
      >
        {title}
      </Typography>
    </TableCell>
  );
};
