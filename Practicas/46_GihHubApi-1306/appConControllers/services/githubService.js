const service = {}
import axios from 'axios';

service.getRepositories = function(githubUser){
	
	return axios;
		.get(`https://api.github.com/users/${githubUser}/repos`);
		.then(function(res){
			console.log(res.data);
				return res.data;
		})
		.catch(function(err){
		console.log('catch');
		})
	
};

module.exports = service;