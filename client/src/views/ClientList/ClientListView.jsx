import React, { useEffect, useState } from 'react';
import { getClients, deleteClient } from '../../api/clients';
import './ClientListView.css';
import deleteIcon from '../../assets/delete.png';
import { Link } from 'react-router-dom';

const ClientListView = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const clientsData = await getClients();

      setClients(clientsData);
    };
    fetchClients();
  }, []);

  const handleDeleteClient = async (id) => {
    const removeClient = await deleteClient(id);
    if (removeClient.status === 200) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  return (
    <div className='customer-list'>
      <button>
        <Link to={'/create'}>Add Client</Link>
      </button>
      <table>
        <thead>
          <tr>
            <th>Details</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client) => (
            <tr key={client.id}>
              <td>
                <Link to={`/${client.id}`}>Details</Link>
              </td>
              <td>{client.first_name}</td>
              <td>{client.last_name}</td>
              <td>{client.email}</td>
              <td>{client.gender}</td>
              <td>
                <img
                  src={client.image}
                  alt={`${client.first_name} ${client.last_name}`}
                />
              </td>
              <td>
                <button
                  className='delete-button'
                  onClick={() => handleDeleteClient(client.id)}>
                  <img
                    src={deleteIcon}
                    alt='delete'
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientListView;
