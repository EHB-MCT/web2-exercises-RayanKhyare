import axios from 'axios';
import * as fs from 'fs/promises';


try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');

    let emails = {
        count: 0,
        list: []
    }

    for (let comment of response.data) {
        //add to file list
        emails.list.push(comment.email);

        emails.count++;
    }


    await fs.appendFile('emails.json', JSON.stringify(emails));
    console.log(response.data[0])
} catch (error) {
    console.error(error);
}