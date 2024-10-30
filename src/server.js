import express from "express";
import cors from 'cors';
const app = express();
const PORT = process.env.port || 3000 
const corsOptions = {
  origin: "*",
  methods: ["GET"],
};
app.use(cors(corsOptions));

app.get('/employer-branding-video/:companyId', (req, res) => {
  (async () => {
    try {
      const companyId = req.params['companyId'];
      res.status(200).json({companyId: companyId});
      //call apis get data


      //await videos


      //upload to s3


      //return 200 response
    } catch (err) {
      console.error("=========error========", err);
      res.status(500).send({status: "failed", msg: err});
    }
  })();
});

app.listen(PORT, function(error){ 
    if (error) throw error 
    console.log("Server created Successfully on PORT", PORT) 
});
