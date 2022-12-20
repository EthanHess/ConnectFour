import React from 'react'; 
import classNames from 'classnames'; 
import './Cell.css'; 

export const Cell = (props) => {
    const cellClasses = classNames({
        cell: true, 
        winner: props.canHighlight
    }); 
    const cellContentClasses = classNames({
        'cell-content': true, 
        populated: props.value
    }); 

    //console.log('props.value', props.value)

    var properDiv = <div></div>
    if (props.value === 'X') {
        console.log('Red val')
        properDiv = <div className="redDiv"></div>
    } else if (props.value === 'O') {
        console.log('Black val')
        properDiv = <div className="blackDiv"></div>
    } else {
        console.log('No props val')
    }

    return(
        <button className={cellClasses} onClick={props.onClick}>
            {/* <span className={cellContentClasses}>{props.value}</span> */}
            { properDiv }
        </button>
    )
}