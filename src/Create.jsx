import React, { useState } from 'react'
import { addUser } from './features/counter/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addUser({ id: users[users.length -1].id + 1 ,name,email}))
    navigate('/')
    
  }
 
  return (
    <div className="container mt-5">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <h3 style={{fontFamily:'vardana'}}>Add New User</h3>

        <form onSubmit={handleSubmit}
         className='mt-5'>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" name="name"
            onChange={(e)=>setName(e.target.value)} required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name='email' 
            onChange={(e)=>setEmail(e.target.value)} required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
      <div className="col-lg-4"></div>
    </div>
  )
}

export default Create