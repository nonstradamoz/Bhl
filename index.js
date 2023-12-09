import express,{json} from "express";
import apiroutes from "./api-roots.js";
import logger from "morgan";

const listen_port= 8000;

const app=express();
app.use(logger("dev"));
app.use(json());
app.use('/', apiroutes);

app.listen(listen_port,()=>{
    console.log('Listening to port '+listen_port )


});
