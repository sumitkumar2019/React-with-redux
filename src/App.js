import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators, bindActioncreators } from 'redux'
import { actionCreators } from './state/index'


function App() {
  const account = useSelector(state => state.account)
  console.log(account)
  const dispatch = useDispatch()
  console.log(dispatch)
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(200)}>Withdraw</button>
    </div>
  );
}

export default App;
