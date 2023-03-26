import React from "react";
import styles from "./contactUsPage.module.scss"
import ContactUsHeader from "../../components/contactUsHeader";
import ContactUsMainBlock from "../../components/contactUsMainBlock";

export default function ContactUsPage(){
    return (
        <div className={styles.wrap}>
            <ContactUsHeader/>
            <ContactUsMainBlock/>
        </div>
    )
}