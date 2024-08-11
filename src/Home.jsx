import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './features/counter/userSlice';

const Home = () => {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id)); 

  };
  return (
    <div className='container mt-5'>
      <h2>Crud app</h2>
      <Link to='/create' className='btn btn-success mt-2'>
        Create +
      </Link>
      <table className="table mt-2">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th>{user.id}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-warning m-2'>Edit</Link>
                <button onClick={() => handleDelete(user.id)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}




        </tbody>
      </table>
    </div>
  )
}

export default Home