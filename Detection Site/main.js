$.getJSON("https://api.ipify.org?format=json", function(data){
		$("#ip").html(`IP: ${data.ip}`);
		
	})

let isp = document.getElementById('ISPS')
let host = document.getElementById('HOST')
let oss = document.getElementById('OS')
let browser = document.getElementById('Browser')

async function getInfo(){
	const response = await fetch("https://ipinfo.io/?token=5052145b210b1c")
	const data = await response.json()
	const { org } = await data
	const { hostname } = await data
	browser.innerHTML = `Browser: ${platform.name}`
	oss.innerHTML = `OS: ${platform.os}`;
	isp.innerHTML = `Internet Service Provider: ${org}`
	host.innerHTML = `Host: ${hostname}`
	console.log(data)
}
getInfo()