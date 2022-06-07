const fs = require('fs').promises;

const simpsonsJson = './simpsons.json';

const simpsons = async () => {
  try {
    const resp = await fs.readFile(simpsonsJson, 'utf8');
    const data = JSON.parse(resp);
    const list = data.map((item) => console.log(`${item.id} - ${item.name}`));
    return list;
  } catch (err) {
    console.log(err);
  }
};

simpsons();

/*  const simpsons = () => {
  return fs
    .readFile(simpsonsJson, 'utf8')
    .then((data) => {
      const json = JSON.parse(data);
      return console.log(json);
    })
    .catch((err) => {
      console.log(err);
    });
}; */
