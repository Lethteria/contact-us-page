import React, {useState} from "react";
import styles from "./contactUsForm.module.scss"
import {Button, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {CheckCircle, Circle} from '@mui/icons-material';

export default function ContactUsForm(){

    const [name, setName] = useState("");

    function onChangeName(e){
        setName(e.target.value);
    }
    return(
        <div className={styles.wrap}>

            <form >
                <Grid container spacing={5}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="standard"
                            color="greyDark"
                            focused
                            error
                            helperText="Incorrect entry"
                            className={styles.input}
                            fullWidth
                            value={name}
                            onChange={onChangeName}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="standard"
                            color="greyDark"
                            focused
                            className={styles.input}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            type="email"
                            variant="standard"
                            color="greyDark"
                            focused
                            className={styles.input}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Phone Number"
                            type="number"
                            variant="standard"
                            color="greyDark"
                            focused
                            InputLabelProps={{
                                shrink: true,
                            }}
                            className={styles.input}
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <div>
                        <h4>Select Subject?</h4>
                        <div>
                            <FormControlLabel control={<Checkbox defaultChecked
                                                                 color="default"
                                                                 size="small"
                                                                 icon={<Circle/>}
                                                                 checkedIcon={<CheckCircle />}
                                                                 sx={{
                                                                     color: "#c9c9c9",
                                                                     '&.Mui-checked': {
                                                                         color: "#000",
                                                                     },
                                                                 }}
                                                        />}
                                              label="General Inquiry"
                                              className={styles.checkbox}
                            />

                            <FormControlLabel control={<Checkbox size="small"/>}
                                              label="General Inquiry"
                                              className={styles.checkbox}
                            />

                            <FormControlLabel control={<Checkbox size="small"/>}
                                              label="General Inquiry"
                                              className={styles.checkbox}
                            />
                            <FormControlLabel control={<Checkbox size="small"/>}
                                              label="General Inquiry"
                                              className={styles.checkbox}
                            />
                        </div>
                    </div>
                    </Grid>

                    <Grid item xs={12}>
                    <TextField
                        label="Message"
                        type="textarea"
                        placeholder="Write your message.."
                        variant="standard"
                        color="greyDark"
                        focused
                        className={styles.input}
                        fullWidth
                    />
                    </Grid>

                    <Grid item xs={12} sm={6} md={5}>
                        <Button variant="contained"
                                disableElevation
                                fullWidth
                                className={styles.button}>
                            Send Message
                        </Button>
                    </Grid>

                </Grid>
            </form>





        </div>

    )
}