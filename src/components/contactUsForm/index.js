import React from "react";
import styles from "./contactUsForm.module.scss";
import {UseInput} from "../../hooks/useInput";
import {UseCheckbox} from "../../hooks/useCheckbox";
import CheckboxBlock from "../checkboxBlock";

import {Button, Grid, TextField} from "@mui/material";

export default function ContactUsForm(){

    const [inputData, onChangeInput] = UseInput({firstName: "",
                                                          lastName: "",
                                                          email: "",
                                                          phone: "",
                                                          message: ""
                                                        });
    const {firstName, lastName, email, phone, message} = inputData;

    const labels = ["General Inquiry1", "General Inquiry2", "General Inquiry3", "General Inquiry4"];
    const [isChecked, onChangeChecked] = UseCheckbox(labels);

    function onSubmitForm(e){
        e.preventDefault();
        const user={data: {firstName,
                            lastName,
                            email,
                            phone
                            },
                    message,
                    checkboxVal:[]
                   }
        for (let value in isChecked){
            if (isChecked[value].check){
                user.checkboxVal.push(isChecked[value].value)
            }
        }
        console.log(user);
        onChangeInput(e, true);
    }

    return(
        <div className={styles.wrap}>

            <form onSubmit={onSubmitForm}>
                <Grid container justifyContent="flex-end" spacing={5}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            variant="standard"
                            color="greyDark"
                            focused
                            helperText="Incorrect entry"
                            className={styles.input}
                            fullWidth
                            value={firstName}
                            onChange={onChangeInput}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            variant="standard"
                            color="greyDark"
                            focused
                            className={styles.input}
                            fullWidth
                            value={lastName}
                            onChange={onChangeInput}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            variant="standard"
                            color="greyDark"
                            focused
                            className={styles.input}
                            fullWidth
                            value={email}
                            onChange={onChangeInput}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type="number"
                            name="phone"
                            variant="standard"
                            color="greyDark"
                            focused
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={styles.input}
                            fullWidth
                            value={phone}
                            onChange={onChangeInput}
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <div>
                        <h4>Select Subject?</h4>

                        <CheckboxBlock labels={labels}
                                       isChecked={isChecked}
                                       onChangeChecked={onChangeChecked}
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
                        value={message}
                        onChange={onChangeInput}
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