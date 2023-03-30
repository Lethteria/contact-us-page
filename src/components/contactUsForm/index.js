import React, {useState} from "react";
import styles from "./contactUsForm.module.scss"
import {Button, Checkbox, FormControlLabel, Grid, TextField} from "@mui/material";
import {CheckCircle, Circle} from '@mui/icons-material';

export default function ContactUsForm(){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [isChecked, setIsChecked] = useState({isCheckedOne: {value: "General Inquiry", check: true},
                                                         isCheckedTwo: {value: null, check: false},
                                                         isCheckedThree: {value: null, check: false},
                                                         isCheckedFour: {value: null, check: false}});

    const checkboxData =[{label: "General Inquiry",
                           name: 'isCheckedOne',
                          isChecked: isChecked.isCheckedOne.check},
                         {label: "General Inquiry",
                          name: 'isCheckedTwo',
                          isChecked: isChecked.isCheckedTwo.check},
                         {label: "General Inquiry",
                           name: 'isCheckedThree',
                          isChecked: isChecked.isCheckedThree.check},
                         {label: "General Inquiry",
                          name: 'isCheckedFour',
                          isChecked: isChecked.isCheckedFour.check}
                        ]

    function onChangeFirstName(e){
        setFirstName(e.target.value);
    }
    function onChangeLastName(e){
        setLastName(e.target.value);
    }
    function onChangeEmail(e){
        setEmail(e.target.value);
    }
    function onChangePhone(e){
        setPhone(e.target.value);
    }

    function onChangeChecked(name){
        return function (e){
            setIsChecked({...isChecked, [name]: {value: e.target.value, check: !isChecked[name].check}});// [name]={...isChecked[name], check: !check}
        }
    }

    function onChangeMessage(e){
        setMessage(e.target.value);
    }

    const checkboxList = checkboxData.map((item,index) => (
        <FormControlLabel control={<Checkbox checked={item.isChecked}
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
                                             value={item.label}

                                             onChange={onChangeChecked(item.name)}
                                    />}
                          label={item.label}
                          className={styles.checkbox}
                          key={index}
        />
    ))

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
        setFirstName("");
        setLastName("");
        setPhone("");
        setMessage("");
        setEmail("")

        //here should be some logic (show modal "success" for user, validation, send data to server and so on)
        console.log(user)
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
                            onChange={onChangeFirstName}
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
                            value={lastName}
                            onChange={onChangeLastName}
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
                            onChange={onChangeEmail}
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
                            value={phone}
                            onChange={onChangePhone}
                        />
                    </Grid>

                    <Grid item xs={12}>
                    <div>
                        <h4>Select Subject?</h4>
                        <div>
                            {checkboxList}
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
                        onChange={onChangeMessage}
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