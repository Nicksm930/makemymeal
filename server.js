const http=require('http');
const app=require('./app/app');
require('dotenv').config();
require('./config/dbConnect');
const PORT=process.env.PORT || 3000;
const server=http.createServer(app);
server.listen(PORT,console.log(`server is running on ${PORT}`));