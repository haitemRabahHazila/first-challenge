import './App.css';
import Header from './components/header';
import ButtonsField from './components/ButtonsField';
import PostsField from './components/postsField';
function App() {
  return (
    <div className="App">
      <Header/>
      <ButtonsField/>
      <PostsField/>
    </div>
  );
}

export default App;
