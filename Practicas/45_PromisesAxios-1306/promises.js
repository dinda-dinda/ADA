import axios from 'axios'; 
var superObjeto = {};
axios
	.get('http://localhost:3000/users/');
	.then(function(res){
		superObjeto.respuesta1 =res.data;
		console.log(res.data);
		return axios.get('https://localhosto:3000/users/listjson2')
	})
	.then(function(res){
		superObjeto.respuesta2=res.data;
		console.log(res.data);
	})
	.then(function(res){
	superObjeto.respuesta2=res.data;
	console.log(res.data);
	})

	.catch(function(err){
		console.log('catch');
	})