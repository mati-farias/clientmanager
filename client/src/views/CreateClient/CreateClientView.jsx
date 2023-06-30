import React, { useState } from 'react';
import { createClient } from '../../api/clients';
import './CreateClientView.css';
import { useNavigate } from 'react-router-dom';

const CreateClientView = () => {
  const [clientData, setClientData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    image: '',
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setClientData({ ...clientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createClient(clientData)
      .then((response) => {
        alert('Client created successfully!');
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='create-client-form'>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type='text'
            name='first_name'
            value={clientData.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='last_name'
            value={clientData.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={clientData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <select
            name='gender'
            value={clientData.gender}
            d
            onChange={handleChange}>
            <option value=''>Select...</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </label>
        <label>
          Image URL:
          <input
            type='text'
            name='image'
            value={clientData.image}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>Create Client</button>
      </form>
    </div>
  );
};

export default CreateClientView;
