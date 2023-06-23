import { TableCell, Typography } from "@mui/material";
import {COLORS} from "@/Components/utils/ConstantTheme";

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
