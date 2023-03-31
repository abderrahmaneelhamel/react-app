import './App.css';
import Nav from './components/Nav';
import Button from './components/Button';
function App() {
  let name = 'abderrahmane';
  function click(){
    console.log('click');
  }
    return (
    <div className="App">
      <Nav />
      <Button onClick={click} />
      <h1>hello {name}</h1>
    </div>
  );
}

export default App;
