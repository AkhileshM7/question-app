import { ansArrType } from "./Questions";
import questionObjects from "../questionObjects.json";
import { Box } from "@mui/material";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";


const QuestionBar =
 
  ({ ansArr, id }: any) => {
    return (
      <Box>
        {questionObjects.map((questions: any) => {
          const isAnswered = ansArr[questions.id - 1].length > 0 ? true : false;
          let highlight = false;
          if (Number(id) === questions.id) {
            highlight = true;
          }
          return (
            <Circle
              key={questions.id}
              id={questions.id}
              isAnswered={isAnswered}
              highlight={highlight}
            ></Circle>
          )
        })}
        
      </Box>
    );
  };


const Circle = ({ id, isAnswered, highlight }: any) => {
    
  return (
  <>
  <Link to={`/question/${id}`}>
  <Box
  sx={{
    bgcolor: isAnswered ? "rgb(255, 0, 0)" : "gray",
    border: highlight ? "3px solid blue " : "",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}>
    {id}
  </Box>
  </Link>
  </>
  );
};

export default QuestionBar;


