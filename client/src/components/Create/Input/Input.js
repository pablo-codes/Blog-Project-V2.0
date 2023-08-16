import React from 'react'
import InputH from './InputH'
import InputI from './InputI'
import InputP from './InputP'

const Input = (props) => {

    return (
        <div>

            {
                (function () {
                    if (props.inputnam == 'i') {
                        return <InputI num={props.inputnum} />
                    } else if (props.inputnam == 'p') {
                        return <InputP num={props.inputnum} />
                    } else if (props.inputnam) {
                        return <InputH num={props.inputnum} />
                    }

                }
                )(props.input)}



        </div>
    )
}

export default Input