import fs from 'fs/promises';


let boardgames = "boardgames.json"


// Get the data from the file
let result = await fs.readFile(boardgames)
let data = JSON.parse(result);

// loop over the boardgames
for (let i in data) {

    //Create filename
    let filename = `${i}.json`
    //Stringify the value
    let bg = JSON.stringify(data[i])
    //Save the file
    await fs.writeFile(filename, bg);

}



console.log(data);