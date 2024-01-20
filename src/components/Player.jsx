import React from 'react'
import { useState } from 'react'

function Player({name,symbol,isActive,onChangeName}) {
  const [isEditing, setisEditing] = useState(false);
  const [editName, setEditName] = useState(name);

  const handleEditClick=()=>{
    setisEditing(prev=>!prev);
    if(isEditing){
      onChangeName(symbol,editName);
    }
  }
  const handleChange=(e)=>{
    setEditName(e.target.value);
  }
  let playerName= <span className="player-name">{editName}</span>;
  if(isEditing){
    playerName=<input type="text" required value={editName} onChange={handleChange} />
  }
  return (
    <li className={isActive?'active':undefined}>
        <span className="player">
       {playerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing? 'save':'edit'}</button>
    </li>
  )
}

export default Player