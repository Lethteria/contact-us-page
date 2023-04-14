import React, {useState} from "react";
import styles from "./subscribeForm.module.scss";
import {Validate} from "./validateSubscribeForm";
import {Alert, Button, TextField} from "@mui/material";
import {useFormik} from "formik";

export default function SubscribeForm(){

    const [openAlert, setOpenAlert] = useState(false);
    const onClose = () => setOpenAlert(false)
    const onOpen = () => setOpenAlert(true)

    const validate = Validate;
    const formik = useFormik({
        initialValues: {email: ""},
        validate,
        onSubmit: (values, {resetForm}) => {
            onOpen();
            resetForm();
        }
    });

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

                { openAlert ? (
                    <Alert variant="outlined"
                           className={styles.alert}
                           onClose={onClose} >
                            Your data was send
                    </Alert>
                ) : null
                }

                <p className={styles.message}>*  Will send you weekly updates for your better tool management.</p>

            </form>
        </div>
    )
}