import express from 'express'
import path from 'path'


const app = express()
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))
    app.use(express.static(path.resolve(__dirname, 'public')))
}


app.get('/', function (req, res) {
    res.json(getHealth());
});

function getHealth() {
    return {
        ok: true,
        message: 'Healthy'
    };
}

const port = 3030;

app.listen(port, () => console.log(`Quickstart app listening at http://localhost:${port}`))

export default app
