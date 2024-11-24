import express from 'express';

import { sharedDir } from './arguments/shareDir';
import { readDirectory } from './utils/files';

const app = express();
const PORT = process.env.PORT || 5000


app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(express.static('./public'))

app.use(express.static(sharedDir));

app.get('/', (req, res) => {
    // res.json(readDirectory(sharedDir))
    res.render("index")
});


app.listen(PORT, () => {
    console.log(`love ayaka on: http://localhost:${PORT}`);
});