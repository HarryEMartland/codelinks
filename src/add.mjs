import readline from 'readline';
import links from './data/links';
import tags from './data/tags';
import fs from 'fs';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Website name: ', (name) => {
    rl.question('Link: ', (link) => {
        rl.question('Description: ', (description) => {
            console.log('Tags (' + Object.keys(tags) + ')');
            rl.question('Tags (space delimited): ', (tags) => {

                rl.close();


                fs.writeFile("src/data/links.mjs", "export default " + JSON.stringify([...links, {
                    name: name,
                    link: link,
                    tags: tags.split(' '),
                    description: description
                }], null, 2), function (err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("Links updated");
                });
            })
        });
    });
});