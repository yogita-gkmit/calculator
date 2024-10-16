const express = require('express');
const mongoose = require('mongoose');

const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger/swagger.yaml');

const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const dotenv = require('dotenv');
dotenv.config();

app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

// Swagger UI setup
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', require('./routes/history.route.js'));
app.use('/api', require('./routes/operations.route.js'));

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.listen(PORT,()=>{
	console.log(`Server Running on http://localhost:${PORT}`);
})

module.exports = app;