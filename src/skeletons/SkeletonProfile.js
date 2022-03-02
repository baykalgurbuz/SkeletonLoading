import React from "react";
import Shimmer from "./Shimmer";
import SkeletonELement from "./SkeletonELement";

const SkeletonProfile =({theme})=>{
    const themeClass=theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-profile">
                <div>
                    <SkeletonELement type="avatar"/>
                </div>
                <div>
                    <SkeletonELement type="title"/>
                    <SkeletonELement type="text"/>
                    <SkeletonELement type="text"/>
                </div>
            </div>
            <Shimmer/>
        </div>
    )
}
export default SkeletonProfile;