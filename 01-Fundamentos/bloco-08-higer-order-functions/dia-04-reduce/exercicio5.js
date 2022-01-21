const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = () =>
  names
    .reduce((acc, item) => acc.concat(item))
    .toLocaleLowerCase()
    .replace(/[^a]/g, '').length;

console.log(containsA());
