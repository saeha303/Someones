import Express  from "express";
import cors from "cors";

const app = Express();

// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 
//  app.use(cors(corsOptions))


app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})