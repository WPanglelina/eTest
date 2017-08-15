/**
 *
 * title: Footer.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import React from "react"
import FilterLink from "../containers/FilterLink"
const Footer=()=>(
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">ALL</FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">completed</FilterLink>
    </p>
);
export default Footer;