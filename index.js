const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
		await fs.writeFile(`./${fileName}`,fileContent,function (err){
		if(err) throw err;
		console.log("File created successfully")
	})
	console.log("File created successfully")
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	let result=await fs.readFile(fileName,'utf8', function(err, data){
      
		// Display the file content
		console.log(data);
	});
	
	console.log(result)
	  
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName,fileContent,function (err){
		if(err) throw err;
		console.log("File created successfully")
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	
	await fs.unlink(fileName )
	console.log("File Deleted succesfully")
}
	
	




module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }