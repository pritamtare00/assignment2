import React, { Component } from 'react';

class UserTable2 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:props.userData
         }
    }
    render() { 
        return ( 
            <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                {this.props.userData?.map((user,index)=>{
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
         );
    }
}
 
export default UserTable2;