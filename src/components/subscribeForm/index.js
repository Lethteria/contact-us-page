import React from "react";
import styles from "./subscribeForm.module.scss";
import {Validate} from "./validateSubscribeForm";
import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";

export default function SubscribeForm(){

    const validate = Validate;
    const formik = useFormik({
        initialValues: {email: ""},
        validate,
        onSubmit: (values, {resetForm}) => {
            console.log(values.email.trim());
            resetForm();
        }
    })

    return (
        <div className={styles.wrap}>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    type="textarea"
                    placeholder="Your email address"
                    variant="standard"
                    color="greyDark"
                    className={styles.input}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email}
                />

                <Button variant="contained"
                        disableElevation
                        type="submit"
                        className={styles.button}>
                    Subscribe
                </Button>

                <p className={styles.message}>*  Will send you weekly updates for your better tool management.</p>

            </form>
        </div>
    )
}