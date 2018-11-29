const express= require('express');
const app = express();
var port = process.env.port || 3000 ;
app.get('/',(req,res) => res.send('Hello world'));
app.listen(port, () => console.log('server is running on port ' + port));