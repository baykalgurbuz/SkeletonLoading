import React from "react";
import Shimmer from "./Shimmer";
import SkeletonELement from "./SkeletonELement";

const SkeletonArticles =({ theme })=>{
    const themeClass=theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
            <SkeletonELement type="title"/>
            <SkeletonELement type="text"/>
            <SkeletonELement type="text"/>
            <SkeletonELement type="text"/>
            </div>
            <Shimmer/>
        </div>
    )
}
export default SkeletonArticles;