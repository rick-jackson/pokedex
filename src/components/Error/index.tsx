import type { AxiosError } from "axios";
import { Box, Typography } from "@mui/material";

type ErrorProps = {
  error: AxiosError;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  const { code, message } = error;
  return (
    <Box style={{ textAlign: "center", margin: "auto" }}>
      <Typography>{code}</Typography>
      <Typography>{message}</Typography>
    </Box>
  );
};

export default Error;
