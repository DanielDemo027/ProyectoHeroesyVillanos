import React, { useState, useEffect } from 'react'


const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)


  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Nombre real</label>
      <input
        type="text"
        name="nombrereal"
        value={user.nombrereal}
        onChange={handleInputChange}
      />
      <label>Nombre de villano</label>
      <input
        type="text"
        name="nombredevillano"
        value={user.nombredevillano}
        onChange={handleInputChange}
      />
      <label>Edad</label>
      <input
        type="text"
        name="edad"
        value={user.edad}
        onChange={handleInputChange}
      />
      <label>Afiliacion</label>
      <select onChange={handleInputChange} value={user.afiliacion} name='afiliacion'>
            <option value='Marvel'>Marvel</option>
            <option value='DC'>Dc</option>
        </select>
   <label>Descrripcion</label>
    <textarea 
    name="descrripcion" 
    rows="10" 
    cols="50"
    value={user.descrripcion}
    onChange={handleInputChange}
    
    >Write something here</textarea>
<label>Archienemigos</label>
    <table>
      <thead>
        <tr>
          <th>Villano</th>
          <th>Elegir</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Joker</td>
          <td> <input type={"checkbox"} onChange={handleInputChange} value="Joker" name="archienemigo" /> </td>
        </tr>

        <tr>
          <td>Thanos</td>
          <td> <input type={"checkbox"} onChange={handleInputChange} value="Thanos" name="archienemigo" /> </td>
        </tr>

        <tr>
          <td>Darkseid</td>
          <td> <input type={"checkbox"} onChange={handleInputChange} value="Darkseid" name="archienemigo" /> </td>
        </tr>
      </tbody>
    </table>
    <div className="container">
      <div className="flex-row">
      <div className="flex-large">

    <div>
      <br></br>
    <button>Cambiar</button>
      
    </div>
  
 
 
</div>
        <div className="flex-large">
        <br></br>
        <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
          
        </div>
      </div>
    </div>

      
      
    </form>
  )
}

export default EditUserForm