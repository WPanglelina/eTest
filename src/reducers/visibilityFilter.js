/**
 *
 * title: visibilityFilter.js
 *
 * author: WangPei.
 *
 * date: 2017/8/15.
 *
 */
const visibilityFilter=(state="SHOW_ALL",action)=>{
    switch (action.type){
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
};
export default visibilityFilter;