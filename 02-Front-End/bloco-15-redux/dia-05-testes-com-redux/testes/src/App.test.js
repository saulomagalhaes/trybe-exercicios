import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import { createStore, combineReducers , applyMiddleware} from 'redux';
import fetchMock from 'fetch-mock-jest';
import userEvent from '@testing-library/user-event';
import clickReducer from './reducers';
import thunk from 'redux-thunk';
import App from './App';

const createMockStore = (initialState) => (
  createStore(combineReducers({ clickReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
   renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test(`Crie um teste com o valor padrão do reducer e teste se um clique funciona.`, () => {
    renderWithRedux(<App />);
      const btnAdd = screen.getByRole('button', {
        name: /clique aqui/i
      })
      userEvent.click(btnAdd);
      expect(screen.getByText('1')).toBeInTheDocument();
   });

   test(`Altere o valor inicial do counter para 10, faça um clique do botão e crie os testes para esses comportamentos.`, () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
      const btnAdd = screen.getByRole('button', {
        name: /clique aqui/i
      })
      userEvent.click(btnAdd);
      expect(screen.getByText('11')).toBeInTheDocument();
      userEvent.click(btnAdd);
      expect(screen.getByText('12')).toBeInTheDocument();
   });
});
describe('Página principal', () => {
  test('Testa que o botão de adicionar cachorro está presente', async () => {
    renderWithRedux(<App />);
    const buttonDoguinho = screen.getByRole('button', {
      name: /clique aqui/i
    })

    expect(buttonDoguinho).toBeInTheDocument();

    fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
      body: { message: 'myDogUrl' },
    });

    userEvent.click(buttonDoguinho);
    await waitFor(() => expect(fetchMock.called()).toBeTruthy());
  });
});