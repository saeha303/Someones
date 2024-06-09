import Express  from "express";
import cors from "cors";

const app = Express();

app.use(cors(
    {
        origin: 'https://someones-oaxq.vercel.app',
        methods:["GET","POST","PUT","DELETE","OPTIONS"],
        allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
        credentials: true
      }
));


app.get("/api/hello/", (req, res) => {
    res.json({
        message: "Hello World"
    });
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
})