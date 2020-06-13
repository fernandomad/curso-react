import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Search from '../Search';
import Categories from '../Categories';
import Carousel from '../Carousel';
import CarouselItem from '../CarouselItem';
import Footer from '../Footer';
import useInitialState from '../../hooks/useInitialState';

import '../../assets/styles/App.scss';

const API = 'http://127.0.0.1:3000/initialState';
const App = () => {
  const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist && initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
              initialState.mylist && initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends && initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {
            initialState.originals && initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default App;

