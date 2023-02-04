import './App.css';
import  RemindersBox from './RemindersContainer';

function App() {
//   const [count, setCount] = useState(0)
//   let reminders = () : any => {
//     return class remindersClass{}
// }

  return (
    <div className="App">
      <div className='Title'>
        <h1 className='appName'>2DO</h1>
        <p className='author'>Created by<br></br> Dharon Ramrattan</p>
      </div>
      <div className='reminders'>
        <RemindersBox />
        </div>
        
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit 
        </p>
      </div> */}

    </div>
  )
}

export default App
