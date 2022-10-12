import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse'
const UserTable = (props) => {
  const[open, setOpen] = useState(false);
  return(
    <Table>
    <thead>
      <tr className='table-dark text-light'>
        <th>Nombre real</th>
        <th>Nombre Villano</th>
        <th>Edad</th>
        <th>Afiliación</th>
        <th>Descripción</th>
        <th>Opciones</th>
        
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
             <td>{user.nombrereal}</td>
            <td>{user.nombredevillano}</td>
            <td>{user.edad}</td>
            <td>{user.afiliacion}</td>
            <td><button
                    onClick={()=>setOpen(!open)}
                    aria-controls = "example-collapsa-text"
                    aria-expanded={open}
                  >
                    Leer más
                  </button>
                  <Collapse in={open}>
                    <div className='example-collapse-text'>
                    {user.descrripcion}
                    </div>
                  </Collapse></td>
            <td>
            <Button variant="primary"
            
        onClick={() => {
    props.editRow(user)
  }}
  className="button muted-button"
>
  Edit
</Button>
             <Button variant="danger"
  onClick={() => props.deleteUser(user.id)}
  className="button muted-button"
>
  Delete
  </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
    </Table>
  )
  
}

export default UserTable