const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index:
          state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index:
          state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

window.onload = function () {
  const previous = document.getElementById('previous');
  previous.addEventListener('click', () => {
    store.dispatch({ type: 'PREVIOUS_COLOR' });
  });
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    store.dispatch({ type: 'NEXT_COLOR' });
  });

  store.subscribe(() => {
    const { colors, index } = store.getState();
    document.getElementById('value').innerHTML = colors[index];
    document.getElementById('container').style.backgroundColor = colors[index];
  });
};