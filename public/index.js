import React from 'react';//crear componentes
//import ReactDOM from 'react-dom';//para renderisar los componentes poner dentro del navegador
import {render} from 'react-dom';//para renderisar los componentes poner dentro del navegador
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');
//ReactDOM.render(que voy a renderisar,donde lo hare);
//const holaMundo = <h1>hola estudiantes de platzivideos</h1>
//ReactDOM.render(<Media />,app);
render(<Playlist data={data}/>,app);
