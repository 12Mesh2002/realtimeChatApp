import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Navbar = () => {
  const {currentUser,setCurrentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)

  const handleLogout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    dispatch({ type: 'RESET_CHAT' });
  }
  return (
    <div className='navbar'>
      <span className="logo">ChatApp</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar