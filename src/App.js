import "./App.css"
// import TaskList from "./components/Tasks/TaskList"
import Header from "./components/Header"
import AllRoutes from "./routes/AllRoutes"

const App = () => {
    return (
        <div className="App">
            <Header />
            <AllRoutes/>
            {/* <TaskList /> */}
        </div>
    )
}

export default App