import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EmployeeData  from '../../data/list.json';


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
   }
  render() {
      return (
        <div className='login container-fluid' >
          <h6 className='pt-3' >Dashboard / Employee Details </h6>
          <table className='mt-4' width='100%'>
              <tr>
                <th >Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>PhoneNo</th>
              </tr>
            <tbody>
            {EmployeeData.map((employeeDetails, index)=> {
            return (
              <tr>
                <td>{employeeDetails.id}</td>
                <td>{employeeDetails.name}</td>
                <td>{employeeDetails.age}</td>
                <td>{employeeDetails.gender}</td>
                <td>{employeeDetails.email}</td>
                <td>{employeeDetails.phoneNo}</td>
              </tr>
            )
            })}
            </tbody>
          </table>
        </div>

      );
    }
  }


export default Dashboard
