function App() {
    const [counters, setCounters] = React.useState([
        { id: 1, number: 0 },
        { id: 2, number: 0 },
        { id: 3, number: 0 },
        { id: 4, number: 0 },
        { id: 5, number: 0 }
    ])
    
    const sum = Sum(counters)
    function Sum(array) {
        return (
            array.reduce((acc, el) => acc + el.number, 0)
        )
    }

    function updateCounter(id, n) {

        let idx = counters.findIndex(el => el.id === id)
        const newCounter = [...counters]
        if (n == `reset`) {
            newCounter[idx].number = 0
        }
        else if (n == `inc`) {
            newCounter[idx].number += 1
        } else if (newCounter[idx].number == 0) { "" } else { newCounter[idx].number -= 1 }
        setCounters(newCounter)
    }

    return (
        <div className='app'>
            App
            <h1 className="show-sum">Sum = {sum}</h1>
            <button className="btn-add">Add Counter</button>
            <hr />
            {counters.map(el => (
                <Counter key={el.id} box={el} updateCounter={updateCounter} />
            ))}
        </div>
    )
}

function Counter(props) {
    const { box, updateCounter, number } = props
    return (
        <div className="counter">
            <button onClick={() => updateCounter(box.id, `dec`)}>-</button>
            <h3 className="number">{box.number}</h3>
            <button onClick={() => updateCounter(box.id, `inc`)}>+</button>
            <button onClick={() => updateCounter(box.id, `reset`)}>C</button>
        </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)
