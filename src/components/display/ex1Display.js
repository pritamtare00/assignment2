import React from 'react'

function UserTable(props) {
    console.log(props)
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {props.userData?.map((user,index)=>{
                    return(
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default UserTable
