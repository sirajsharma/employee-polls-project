import React, { useId } from "react";
import { Button, Grid, TextField } from "@mui/material";

const PollOption = ({
  buttonName,
  label,
  onChoose,
  pollText,
  isSelected,
  selectedOption,
  name,
}) => {
  const id = useId();

  const handleChoose = () => onChoose(name);

  return (
    <Grid
      item
      xs={12}
      md={5.5}
      lg={5.5}
      style={{ display: "flex", flexDirection: "column" }}
      marginTop={5}
    >
      <TextField
        id={`${id}-read-only`}
        name={name}
        label={label}
        defaultValue={pollText}
        InputProps={{
          readOnly: true,
        }}
      />
      {!!selectedOption ? (
        isSelected && (
          <Button variant="contained" disabled={!!selectedOption}>
            {buttonName}
          </Button>
        )
      ) : (
        <Button
          variant="contained"
          onClick={handleChoose}
          disabled={!!selectedOption}
          type="submit"
        >
          {buttonName}
        </Button>
      )}
    </Grid>
  );
};

export default PollOption;
