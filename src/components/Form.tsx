import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { FormEvent } from "react";
import { NavigateFunction, useNavigate } from "react-router";

const useStyles = makeStyles({
    
    input: {
        marginRight: 30
    },
    box: {
        marginTop:20
    }
    
   
})

const Form = (): JSX.Element => {
    const classes = useStyles();
    const navigate: NavigateFunction = useNavigate();
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log("abcdef")
        navigate('question/1')
    }

  return (
    <Box className="container" component = "form" onSubmit={handleSubmit}>
      <TextField label="Enter name" required={true} InputProps={{className: classes.input}}></TextField>
      <TextField label="Occupation" ></TextField>
      <Box className={classes.box}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1">
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      </Box>
      <Button variant="contained" type="submit">
          {"submit"}
        </Button>
    </Box>
  );
};
export default Form;
