import React from "react";
import styles from "./footerNav.module.scss"
import {Grid, Typography} from "@mui/material";


export default function FooterNav(){
    //navData could be data fetching from server of from store
    const navData = [{title: "Company",
                      links: [{href: "#",
                               text: "About"},
                              {href: "#",
                               text: "Contact"},
                               {href: "#",
                               text: "Blogs"}
                              ]
                      },
                     {title: "Legal",
                      links: [{href: "#",
                               text: "Privacy Policy"},
                              {href: "#",
                               text: "Terms & Services"},
                              {href: "#",
                               text: "Terms of Use"},
                              {href: "#",
                               text: "Refund Policy"}
                            ]
                     },
                     {title: "Quick Links",
                      links: [{href: "#",
                               text: "Techlabz Keybox"},
                              {href: "#",
                               text: "Downloads"},
                              {href: "#",
                               text: "Forum"}
                             ]
                     }
                    ];

    function BuildLinkList(arr){
        return arr.map((link) => {

            return <a href={link.href}
                      className={styles.link}
                    >
                        {link.text}
                    </a>
        })
    }

    const navColumn = navData.map((item) => {
       return ( <Grid item xs={6} sm={4} md={3} lg={2} mb={3}>
                    <Typography variant="h4">
                        {item.title}
                    </Typography>

                    <div>
                        {BuildLinkList(item.links)}
                    </div>
                </Grid>
              )
    })

    return (
        <>
            {navColumn}
        </>
    )
}
