import express, { type Express } from 'express';

const App: Express = express();
App.use(express.json());
export default App;
