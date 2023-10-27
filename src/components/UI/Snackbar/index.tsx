import { useState, useEffect } from "react";
import { Snackbar as MuiSnackbar, Alert } from "@mui/material";

type SnackbarProps = {
  message?: string;
};

const Snackbar: React.FC<SnackbarProps> = ({ message }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
