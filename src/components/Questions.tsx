import { makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import {
  Box,
  FormControl,
  RadioGroup,
  Typography,
  TextField,
  Button,
  Radio, FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import PageNotFound from "../error/PageNotFound";
import questionObjects from "../questionObjects.json";
import QuestionBar from "./QuestionBar";

export type ansArrType = Array<Array<string> | string>;
export type ansArr5type = Array<string>;
export type questionType = {
  id: number;
  question: string;
  answer: Array<string> | string;
  questionOption: Array<string>;
  option: Array<string>;
};

const useStyles = makeStyles({
  boxBack:{
    marginTop: 30,

  }
});
const Questions = (): JSX.Element => {

  const classes: ClassNameMap = useStyles();

  let id: number = Number(useParams().id);

  const navigate: NavigateFunction = useNavigate();

  const [ansArr, setAnsArr] = useState<any>(Array(5).fill([]));

  const [ansArr5, setAnsArr5] = useState<ansArr5type>([]);

  useEffect(() => {
    console.log(ansArr, ansArr5);
  }, [ansArr, ansArr5]);

  useEffect((): void => {
    setAnsArr((values: ansArrType): ansArrType => {
      const arr: ansArrType = [...values];
      arr[4] = ansArr5;
      return arr;
    });
  }, [ansArr5]);

  if (!id) {
    id = 1;
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/result", { state: ansArr });
  };

  const handleCheck = (optionValue: string): void => {
    setAnsArr((value: any): ansArrType => {
      let arr = [...value];

      if (!arr[2].includes(optionValue)) {
        arr[2] = [...arr[2], optionValue];
      } else {
        arr[2] = arr[2].filter((item: any) => {
          return item !== optionValue;
        });
      }

      return arr;
    });
  };

  const handleMatchTheFollowing = (item: string): void => {
    console.log(item);
    setAnsArr5((prev: ansArr5type): ansArr5type => {
      const updateArray: ansArr5type = [...prev];
      !updateArray.includes(item) && updateArray.push(item);
      return updateArray;
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="container">
      <QuestionBar ansArr = {ansArr} id={id} ></QuestionBar>
      <Box>
        <Typography> Question {id}</Typography>
        <Typography> {questionObjects?.[id - 1].question}</Typography>
      </Box>
      <Box>
        {(() => {
          switch (id) {
            case 1:
              return (
                <Box>
                  <TextField
                    label="Answer"
                    value={ansArr[0]}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setAnsArr((values: ansArrType): ansArrType => {
                        const arr: ansArrType = [...values];
                        arr[0] = e.target.value;
                        return arr;
                      });
                    }}
                  />
                </Box>
              );
            case 2:
              let arr2: Array<string> = questionObjects?.[1]?.option;
              return (
                <Box>
                  <FormControl>
                    <RadioGroup
                      value={ansArr[1]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setAnsArr((value: ansArrType): ansArrType => {
                          const arrUpdate: ansArrType = [...value];
                          arrUpdate[1] = e.target.value;
                          return arrUpdate;
                        });
                      }}
                    >
                      {arr2.map((item: string): JSX.Element => {
                        return (
                          <FormControlLabel
                            key={item}
                            label={item}
                            value={item}
                            control={<Radio />}
                          ></FormControlLabel>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </Box>
              );
            case 3:
              let arr3: Array<string> = questionObjects?.[2].option;
              return (
                <Box>
                  <FormControl>
                    {arr3.map((item: string): JSX.Element => {
                      return (
                        <FormControlLabel
                          key={item}
                          label={item}
                          control={<Checkbox />}
                          onChange={() => handleCheck(item)}
                          checked={ansArr[2].includes(item)}
                        ></FormControlLabel>
                      );
                    })}
                  </FormControl>
                </Box>
              );
            case 4:
              let arr4: Array<string> = questionObjects?.[3].option;
              return (
                <Box>
                  <FormControl>
                    <RadioGroup
                      value={ansArr[3]}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setAnsArr((value: ansArrType): ansArrType => {
                          const arrUpdate: ansArrType = [...value];
                          arrUpdate[3] = e.target.value;
                          return arrUpdate;
                        });
                      }}
                    >
                      {arr4.map((item: string): JSX.Element => {
                        return (
                          <FormControlLabel
                            key={item}
                            label={item}
                            value={item}
                            control={<Radio />}
                          ></FormControlLabel>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </Box>
              );
            case 5:
              let arr5: any = questionObjects?.[4];
              return (
                <Box>
                  <Button onClick={(): void => setAnsArr5([])}>Retry</Button>

                  {arr5.questionOption.map(
                    (item: string, id: number): JSX.Element => {
                      // console.log(item, ansArr5?.[id], arr5?.option?.[id]);
                      return (
                        <Box key={id}>
                          <span>{item}</span>
                          <span>{ansArr5?.[id]}</span>
                          <span>
                            <Button
                              disabled={
                                ansArr5.includes(arr5?.option?.[id]) && true
                              }
                              onClick={(): void => {
                                handleMatchTheFollowing(arr5?.option?.[id]);
                              }}
                            >
                              {arr5?.option?.[id]}
                            </Button>
                          </span>
                        </Box>
                      );
                    }
                  )}
                </Box>
              );
              default: 
              return(
                <Box>
                  
                </Box>
              )
          }
        })()}
      </Box>
      

      <Box className={classes.boxBack}>
        <Button
          variant="contained"
          disabled={id <= 1}
          sx={{ right: "250px", bottom: "30%" }}
          onClick={(): void => navigate(`/question/${id - 1}`)}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={id >= 5}
          sx={{ left: "250px", bottom: "30%" }}
          onClick={(): void => navigate(`/question/${(id) + 1}`)}
        >
          Next
        </Button>
        <Box>
          <Button
            color="secondary"
            variant="contained"
            type="submit"
            disabled={!(id == 5)}
            sx={{ left:"730px", bottom: "20%", position: "absolute" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
