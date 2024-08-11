import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './features/counter/userSlice';

const Update = () => {
  
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  // Find the user to be updated
  const existingUser = users.find((user) => user.id === Number(id));

  const [name, setName] = useState(existingUser?.name || '');
  const [email, setEmail] = useState(existingUser?.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: Number(id), name, email }));
    // Handle successful update or error
    navigate('/')
  };



  return (
    <div className="container mt-5">
    <div className="col-lg-4"></div>
    <div className="col-lg-4">
      <h3>Update User</h3>
      {existingUser ? (
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}   

            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"   

              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn   
btn-success">
            Update
          </button>
        </form>
      ) : (
        <p>User not found</p>
      )}
    </div>
    <div className="col-lg-4"></div>
  </div>
  )
}

export default Update