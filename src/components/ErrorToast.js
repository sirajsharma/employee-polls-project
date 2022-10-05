import React from "react";
import { Alert, Snackbar } from "@mui/material";

const ErrorToast = ({ error, open }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );
};

export default ErrorToast;
