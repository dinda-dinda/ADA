
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
// default options
//app.use(fileUpload());

app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));


app.post('/upload', function(req, res) {                             //guarda el archivo, la guarda en una carpeta temporal
  if (!req.files)
    
    return res.status(400).send('No files were uploaded.'); 
  var fileName = req.files.sampleFile.name;                         //name = nombre que le puse a la img
  let sampleFile = req.files.sampleFile;                            // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  
  let newPost = {comentario : req.body.commentText,
                  imagen: fileName,
                }
                
  console.log(newPost);
  console.log(sampleFile);

 
  sampleFile.mv(__dirname + '/uploads/' + fileName, function(err) { //funcion mv mover a una carpeta, en este caso uploads   // Use the mv() method to place the file somewhere on your server //__dirname es donde estoy parada el path!
    
    if (err)                                                         //funcion callback si salio error
      
      return res.status(500).send(err);
 
    res.send('newPost'); //salio ok
  });

});

app.get('/', function(req,res){ //redirecciono al html

res.sendFile(__dirname+'/cliente/index.html')
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
