import React from 'react'

const style={
    btn:{height:"40px",
        width:"60px",
        border:"1px solid"}
}

function CalButtton(props) {
    return (
        <div>
            <button style={style.btn}>{props.title}</button>
        </div>
    )
}

export default CalButtton
