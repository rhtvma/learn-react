import "./App.css"
import TaskList from "./Tasks/TaskList"
import Header from "./Header"
import Footer from "./Footer"


const App = () => {
    return (
        <div className="App">
            <Header />
            <TaskList />
        </div>
    )
}

export default App