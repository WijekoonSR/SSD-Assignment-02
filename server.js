import app from './bootstrap/roues.config';

const PORT = 3000;

app.listen((PORT), ()=>{
    console.log(`app is listen on ${PORT}`)
})