import React from "react";
import styles from "./footerNav.module.scss"
import {Grid, Typography} from "@mui/material";


export default function FooterNav(){
    //navData could be data fetching from server of from store
    const navData = [{title: "",
                      links: [{href: "#",
                               text: "dsds"},
                              {href: "#",
                               text: "cvcxfgv bbfh"},
                               {href: "#",
                               text: "dsds"}
                              ]
                      },
                     {title: "",
                      links: [{href: "#",
                          text: "dsds"},
                          {href: "#",
                              text: "bbfh"},
                          {href: "#",
                              text: "dsdvvvvs"}
                      ]
                     },
                     {title: "",
                      links: [{href: "#",
                          text: "qqqqqq"},
                          {href: "#",
                              text: "cvcxfgv bbfh"},
                          {href: "#",
                              text: "dsds"}
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
       return ( <Grid item xs={6} sm={4} md={3} lg={2}>
                    <Typography variant="h4">
                        title
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
//if (item.links)