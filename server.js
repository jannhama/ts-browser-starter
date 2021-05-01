const express = require('express');
const axios = require('axios');
const app = express();

const api = axios.create({ baseURL: 'https://www.metaweather.com/api' });
app.use(require('body-parser').json());
app.use(require('cors')());

app.get('/api/location', (req, res) => {
    const { query: { search } } = req;
    console.log(req.query);
    return api.get(`/location/search/?query=${search}`)
        .then(({data}) =>  res.json(data))
        .catch((e) => res.sendStatus(500));
});

app.get('/api/location/:id', (req, res) => {
    const locationId = req.params.id;
    console.log(req.id);
    return api.get(`/location/${locationId}`)
        .then(({data}) =>  res.json(data))
        .catch((e) => res.sendStatus(500));
});


app.get('*', (req, res) => {
    res.json("Make sure you're using /api/location/search?query={your search term}");
})

app.listen(3000, () => {
    console.log('up and running!');
});