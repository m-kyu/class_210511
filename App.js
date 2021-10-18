import List from './comp/List';
import Index from './comp/Index';
import AddStudent from './comp/AddStudent';
import {HashRouter, Route, Switch,Link, useHistory} from "react-router-dom";



function App() {
  let hist = useHistory();

  function history(){
    hist.push('/add');
  } 

  return (
    <HashRouter basename="/class_210511">      
      <header>
        <Link to="/" >Home</Link>
        <Link to="/add">수강생 등록</Link>
        <Link to="/list" >수강생 리스트</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/add" ><AddStudent /></Route>
          <Route path="/list" component={List} />
        </Switch>
      </main>
      <Btn></Btn>
    </HashRouter>
  );
}

function Btn(){
  const history = useHistory();

  return(
    <>
      <Link to="/add" onClick={() => history.push("/add")}>수강생 등록</Link>
    </>
  )
  
}

export default App;
