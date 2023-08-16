import React from 'react'

const InputP = (props) => {
    const num = props.num
    return (
        <div>
            {(function () {

                if (num == '3') {
                    return <input style={{ fontSize: '1.2rem' }} type='text'></input>
                } else if (num == '2') {
                    return <input style={{ fontSize: '1rem' }} type='text'></input>
                } else {
                    return <input style={{ fontSize: '0.7rem' }} type='text'></input>
                }

            }
            )(num)}
        </div>
    )
}

export default InputP