let clients = [
  {
    id: 1,
    first_name: 'Guy',
    last_name: 'Jirieck',
    email: 'gjirieck0@over-blog.com',
    gender: 'Male',
    image: 'https://robohash.org/enimautculpa.png?size=50x50&set=set1',
  },
  {
    id: 2,
    first_name: 'Michel',
    last_name: 'Yakubov',
    email: 'myakubov1@facebook.com',
    gender: 'Male',
    image: 'https://robohash.org/similiqueipsameaque.png?size=50x50&set=set1',
  },
  {
    id: 3,
    first_name: 'Rafaelia',
    last_name: 'Limpkin',
    email: 'rlimpkin2@elpais.com',
    gender: 'Female',
    image: 'https://robohash.org/aliquidquasiassumenda.png?size=50x50&set=set1',
  },
  {
    id: 4,
    first_name: 'Krishnah',
    last_name: 'Lannin',
    email: 'klannin3@cbsnews.com',
    gender: 'Male',
    image:
      'https://robohash.org/placeatdebitissuscipit.png?size=50x50&set=set1',
  },
  {
    id: 5,
    first_name: 'Maurise',
    last_name: 'Logg',
    email: 'mlogg4@ft.com',
    gender: 'Male',
    image: 'https://robohash.org/voluptatesetest.png?size=50x50&set=set1',
  },
  {
    id: 6,
    first_name: 'Bobbee',
    last_name: 'Jereatt',
    email: 'bjereatt5@nsw.gov.au',
    gender: 'Female',
    image: 'https://robohash.org/autvoluptatemfugit.png?size=50x50&set=set1',
  },
  {
    id: 7,
    first_name: 'Rossy',
    last_name: 'Dicky',
    email: 'rdicky6@blogs.com',
    gender: 'Male',
    image: 'https://robohash.org/erroromnisplaceat.png?size=50x50&set=set1',
  },
  {
    id: 8,
    first_name: 'Adrian',
    last_name: 'Birds',
    email: 'abirds7@sakura.ne.jp',
    gender: 'Male',
    image: 'https://robohash.org/corporistotamest.png?size=50x50&set=set1',
  },
  {
    id: 9,
    first_name: 'Phillip',
    last_name: 'Stovine',
    email: 'pstovine8@amazonaws.com',
    gender: 'Male',
    image: 'https://robohash.org/laborenihilaut.png?size=50x50&set=set1',
  },
  {
    id: 10,
    first_name: 'Dynah',
    last_name: 'Fitzackerley',
    email: 'dfitzackerley9@seesaa.net',
    gender: 'Female',
    image:
      'https://robohash.org/temporibusvoluptasmagni.png?size=50x50&set=set1',
  },
];

// GET - get all clients
const getAllClients = (req, res) => {
  res.json(clients);
};

// GET - get a client by ID
const getClient = (req, res) => {
  let client = clients.find((client) => client.id == req.params.id);
  if (client) {
    res.json(client);
  } else {
    res.sendStatus(404);
  }
};

// POST - create a new client
const createClient = (req, res) => {
  const newClient = {
    id: clients.length + 1,
    ...req.body,
  };
  clients.push(newClient);
  res.status(201).send('Client added successfully');
};

// DELETE - delete a client
const deleteClient = (req, res) => {
  let clientIndex = clients.findIndex((client) => client.id == req.params.id);
  if (clientIndex > -1) {
    clients.splice(clientIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  getAllClients,
  getClient,
  createClient,
  deleteClient,
};
