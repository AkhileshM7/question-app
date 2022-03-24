import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { makeStyles } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import { textAlign } from "@mui/system";
import { useLocation, useNavigate } from "react-router";
import { idText } from "typescript";
import questionObjects from "../questionObjects.json";
import PieChart from "./PieChart";

const useStyles= makeStyles(() => ({
  pie: {
    alignItems: "center",
    textAlign: "center",
  },
}));

const Result = () => {
  const classes: ClassNameMap = useStyles();

  let localAns: any = useLocation().state;
  const navigate = useNavigate();
  let isAnsRight = false;

  const correctAns = questionObjects.reduce(
    (prev: number, question: any): number => {
      return question.id == 3 &&
        JSON.stringify(question.answer.sort()) ==
          JSON.stringify(localAns[question.id - 1].sort())
        ? prev + 1
        : JSON.stringify(question.answer) ===
          JSON.stringify(localAns[question.id - 1])
        ? prev + 1
        : prev;
    },
    0
  );

  return (
    <div className="center">
      <Box className={classes.pie}>
        <PieChart percentage={(correctAns * 100) / 5}></PieChart>
      </Box>
      <h2>You got {correctAns}/5</h2>
      {questionObjects.map((question: any) => {
        isAnsRight =
          question.id == 3 &&
          JSON.stringify(question.answer.sort()) ===
            JSON.stringify(localAns[question.id - 1].sort())
            ? true
            : JSON.stringify(question.answer) ==
              JSON.stringify(localAns[question.id - 1])
            ? true
            : false;

        return (
          <Box key={question.id}>
            <p>Q: {question.question}</p>
            <Box>{JSON.stringify(localAns[question.id - 1])}</Box>
            {!isAnsRight && (
              <Box>
                <p>Right answer: {JSON.stringify(question?.answer)}</p>
              </Box>
            )}
          </Box>
        );
      })}
      <Box>
        <Button
          color="warning"
          onClick={() => navigate("/")}
          variant="contained"
        >
          Exit
        </Button>
      </Box>
    </div>
  );
};
export default Result;
