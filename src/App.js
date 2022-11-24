import logo from './logo.svg';
import './App.css';
import MainHeader from './containers/main-header/main-header';
import TodoApp from './containers/todo-app/todo-app';

function App() {
  return (
    <>
      <MainHeader />
      <div className="App">
        <h1>Correction de l'exo</h1>
        <TodoApp />
      </div>
    </>
  );
}

export default App;
