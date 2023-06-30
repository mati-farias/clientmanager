import React, { useEffect, useState } from 'react';
import { getClientById } from '../../api/clients';
import './ClientDetailView.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ClientDetailView = () => {
  const [clientData, setClientData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchClientData = async () => {
      const data = await getClientById(id);
      setClientData(data);
    };

    fetchClientData();
  }, [id]);

  return clientData ? (
    <div className='client-detail'>
      <Link to='/'>Back to Home</Link>
      <img
        src={clientData.image}
        alt={`${clientData.first_name} ${clientData.last_name}`}
      />
      <h2>{`${clientData.first_name} ${clientData.last_name}`}</h2>
      <p>{`Email: ${clientData.email}`}</p>
      <p>{`Gender: ${clientData.gender}`}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ClientDetailView;
