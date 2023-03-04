import React from 'react'
import { useState } from 'react'
import SideBar from '../SideNav/body/SideBar'
import SideBody from '../SideNav/body/SideBody'
import SectionA from './body/SectionA'
import SectionB from './body/SectionB'


const Product = (props) => {


    return (
        <div className='user-chat  overflow-hidden' style={{ overflowY: "visible", width: '70%', position: 'relative', left: '30%', marginLeft: '2.5%' }}>

            <SectionA id={props.id} state={props.state2} setState={props.setState2} title={props.title} author={props.author} image={props.image} date={props.date} />
            <SectionB id={props.id} title={props.title} state={props.state2} setState={props.setState2} author={props.author} image={props.image} description={props.description} features={props.features} />
        </div>
    )
}

export default Product