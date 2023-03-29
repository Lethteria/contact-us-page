import React from 'react';
import iconsDefs from "../../assets/icons";

function Icon(props){
    const {iconType, iconClassName} = props
    const icon = iconsDefs[iconType];

    return (
        <svg className={iconClassName}
             width={icon.width}
             height={icon.height}
             viewBox={icon.viewBox}>
            {icon.body}
        </svg>
    )
}

export default Icon;
