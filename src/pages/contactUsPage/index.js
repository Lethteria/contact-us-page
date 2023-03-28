import React from "react";
import styles from "./contactUsPage.module.scss"
import ContactUsHeader from "../../components/contactUsHeader";
import ContactUsMainBlock from "../../components/contactUsMainBlock";
import {Container} from "@mui/material";

export default function ContactUsPage(){
    return (
        <div className={styles.wrap}>
            <Container>
                <ContactUsHeader/>
                <ContactUsMainBlock/>
            </Container>
        </div>
    )
}