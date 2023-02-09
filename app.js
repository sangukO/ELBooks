const express = require('express');
const app = express();
const client = require('./module/connection');

app.get('/api/search', async (req, res) => {
    const size = req.query.size;
    const from = req.query.from;
    const result = await client.search({
        index: 'book_data_*',
        track_total_hits: true,
        from: from,
        size: size,
        query: {
            match : { 
                "TITLE_NM.nori" : req.query.query
            }
        }
    });
    console.log(result);
    res.send({"size":((from/10)+1)*size,
              "count":result.hits.total.value,
              "data":result.hits.hits});
})

app.get('/api/single', async (req, res) => {
    const result = await client.search({
        index: 'book_data_*',
        track_total_hits: true,
        query: {
            match : { 
                "ISBN_THIRTEEN_NO" : req.query.query
            }
        }
    });
    console.log(result);
    res.send({"data":result.hits.hits});
})

app.listen(4000);