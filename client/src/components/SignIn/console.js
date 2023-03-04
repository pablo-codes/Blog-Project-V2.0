import React from 'react'
import blogService from '../../services/blogService'

const console = () => {
    blogService.console()
    return (
        <div>console</div>
    )
}

export default console