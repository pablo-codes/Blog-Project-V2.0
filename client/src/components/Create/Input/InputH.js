import React, { useState } from 'react'

const InputH = (props) => {
    const num = props.num
    return (

        <div>
            {(function () {

                if (num == '3') {
                    return <input style={{ fontSize: '2.5rem', fontWeight: 'bolder' }} type='text'></input>
                } else if (num == '2') {
                    return <input style={{ fontSize: '2rem', fontWeight: 'bolder' }} type='text'></input>
                } else {
                    return <input style={{ fontSize: '1.5rem', fontWeight: 'bolder' }} type='text'></input>
                }

            }
            )(num)}

        </div>
    )
}

export default InputH