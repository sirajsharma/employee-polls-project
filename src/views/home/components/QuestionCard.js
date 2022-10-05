import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const QuestionCard = ({ question }) => {
  const date = new Date(question.timestamp);
  const formattedDate = `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  const id = question.id;

  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
            {formattedDate}
          </Typography>
          <Typography component="div" variant="h5">
            {question.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/questions/${id}`}>
            Show
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default QuestionCard;
