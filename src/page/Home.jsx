import Layout from "../component/Layout"
import { useState } from "react";
import EmployeeForm from "../component/EmployeeForm";
import EmployeeTable from "../component/EmployeeTable";
import './Home.css';
const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  },
]

const Home = () => {
  const [pageState, setPageState] = useState('home');
  const [employees, setEmployees] = useState(mockEmployees);

  const handleUser = () => {
    setPageState('user');
  }

  const handleAdmin = () => {
    setPageState('admin');
  }

  const handleAddEmployee = (newEmployee) => {
    const EmployeeID = employees.map(o=> {
      return o.id;
    })
    const maxId = Math.max(...EmployeeID)
    newEmployee = {
      id : maxId +1,
      ...newEmployee
    }
    console.log("newEmployee", newEmployee);
    setEmployees([...employees, newEmployee]);
  }

  const handleDeleteEmployee = (delEmployeeId) => {
    console.log("deleteEmployee", delEmployeeId);
    const deleteEmployee = employees.filter((o) => {
      return o.id !== delEmployeeId
    })
    setEmployees(deleteEmployee)
  }
  
  const displayTitle = () => {
    if (pageState === 'admin') {
      return <h1>Admin Sector </h1>
    } else if (pageState === 'user') {
      return <h1>User Sector </h1>
    } else {
      return <h1>Assessment </h1>
    }
  }
  const displayAdmin = () => {
    return (
      <>
        <EmployeeForm handleAddEmployee={handleAddEmployee} />
        <EmployeeTable employees={employees} isAdmin={true} handleDeleteEmployee={handleDeleteEmployee} />
      </>
    )
  }
  return (
      <Layout>
        <h1>Generation Thailand React</h1>
        {displayTitle()}
        <div className="button">
          <button className="btn" onClick={handleUser}>User Home Sector</button>
          <button className="btn" onClick={handleAdmin}>Admin Home Sector</button>
        </div>
        {pageState === 'user' ? <EmployeeTable employees={employees}/> : null}
        {pageState === 'admin' && displayAdmin()}
      </Layout>
  )
}



export default Home
