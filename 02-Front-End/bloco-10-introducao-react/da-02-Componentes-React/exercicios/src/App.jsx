import React from 'react';
import Image from './components/Image';

const props = {
  source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
  alternativeText: 'Texto Alternativo',
};
function App() {
  return (
    <main>
      <Image parameters={props} />
    </main>
  );
}

export default App;
