import React from "react";
import DatePicker from "react-datepicker";
import { Field } from "formik";

// import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.scss';

const CustomDatePicker = (props) => {
  // const [startDate, setStartDate] = useState(null);
  const { name, ...rest } = props;
    return (
      <Field name={name}>
        {({form, field}) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker 
              id={name}
              {...field}
              {...rest}
              selected={value} 
              onChange={val => setFieldValue(name, val)} 
              placeholderText="Select Date"
            />
          )
        }}
      </Field>
  );
};

export default CustomDatePicker;