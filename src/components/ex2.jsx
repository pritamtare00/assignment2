import React, { useState } from 'react'
import UserTable2 from './display/ex2Display'
const userData = [{
    name:"mj1",
    age:24,
    gender:"male",

},{
    name:"mj2",
    age:25,
    gender:"female",
    
},{
    name:"mj3",
    age:26,
    gender:"male",
    
}]
export default function Ex2() {
    const [data, setData]=useState([...userData])
    return (
        <div>
            <UserTable2 userData={data}/>
        </div>
    )
}
