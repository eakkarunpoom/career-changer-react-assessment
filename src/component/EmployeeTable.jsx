import './EmployeesTable.css';

const EmployeeTable = (props) => {
    console.log("EmployeeTable", props);
    const handleDelete = (id) => {
        // console.log("Delete", id);
        props.handleDeleteEmployee(id);
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    {props.isAdmin && <th>Action</th>}
                </tr>
            </thead>
            <tbody>
                {
                    props.employees.map((employee) => {
                        return <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.lastname}</td>
                            <td>{employee.position}</td>
                            {props.isAdmin && <td><button className='btn-table' onClick={() => handleDelete(employee.id)}>Delete</button></td>}
                        </tr>
                    })
                }
                <tr></tr>
            </tbody>
        </table>
    )
}

export default EmployeeTable;