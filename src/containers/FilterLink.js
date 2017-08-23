/**
 *
 * title: FilterLink.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
import {connect} from "react-redux"
import Link from "../components/Link"
import {setVisibilityFilter} from "../actions"
const mapStateToProps=(state,ownProps)=>{
    return {
        active:ownProps.filter===state.visibilityFilter
    }
};
const mapDispatchToProps=(dispatch,ownProps)=>{
    return{
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }

    }
};
const FilterLink=connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
export default FilterLink;