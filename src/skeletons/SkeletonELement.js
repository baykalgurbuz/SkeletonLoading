import React from "react";
import './Skeleton.css'

const SkeletonELement =({ type })=>{
    const classes=`skeleton ${type}`
    return(
        <div className={classes}>

        </div>
    )
}
export default SkeletonELement;