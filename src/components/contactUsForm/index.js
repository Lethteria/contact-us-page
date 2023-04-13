import React from "react";
import styles from "./contactUsForm.module.scss";
import CheckboxBlock from "../checkboxBlock";
import {useFormik} from "formik";
import {Validate} from "./validateContactUsForm";

import {Button, Grid, TextField} from "@mui/material";

export default function ContactUsForm(){

    const labels = ["General Inquiry1", "General Inquiry2", "General Inquiry3", "General Inquiry4"];
    const inputsArr = [ {label: "First Name",
                         name: "firstName",
                         type: "text"},
                        {label: "Last Name",
                         name: "lastName",
                         type: "text"},
                        {label: "Email",
                         name: "email",
                         type: "email"},
                        {label: "Phone Number",
                         type: "number",
                         name: "phone",
                         placeholder: "380507308340"}
                      ];
    const validate = Validate;

    const formik = useFormik({
        initialValues: {firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                        checked: []
                        },
        validate,
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm();
        }
    })

    return(
        <div className={styles.wrap}>

            <form onSubmit={formik.handleSubmit} >
                <Grid container justifyContent="flex-end" spacing={5}>

                    {
                        inputsArr.map((item) => (
                            <Grid item xs={12} sm={6} key={item.name}>
                                <TextField
                                    label={item.label}
                                    name={item.name}
                                    type={item.type}
                                    placeholder={item.placeholder ? item.placeholder : null}
                                    variant="standard"
                                    color="greyDark"
                                    focused
                                    className={styles.input}
                                    fullWidth
                                    value={formik.values[item.name]}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched[item.name] && Boolean(formik.errors[item.name])}
                                    helperText={formik.touched[item.name] && formik.errors[item.name]}
                                />
                            </Grid>
                        ))
                    }

                    <Grid item xs={12}>
                        <div>
                            <h4>Select Subject?</h4>
                            <CheckboxBlock labels={labels}
                                           checkedArr={formik.values.checked}
                                           onChange = {formik.handleChange}
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        label="Message"
                        type="textarea"
                        name="message"
                        placeholder="Write your message.."
                        variant="standard"
                        color="greyDark"
                        focused
                        className={styles.input}
                        fullWidth
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={5}>
                        <Button variant="contained"
                                disableElevation
                                fullWidth
                                className={styles.button}
                                type="submit"
                        >
                            Send Message
                        </Button>
                    </Grid>

                </Grid>
            </form>

        </div>
    )
}