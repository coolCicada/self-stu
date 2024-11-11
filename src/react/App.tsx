import { useCallback, useState } from "react"

function initS() {
    console.log('initS')
    return '1';
}

const App = () => {
    const [a, setA] = useState(initS);
    const click = useCallback(() => {
        setA(new Date().getMilliseconds().toLocaleString());
    }, []);
    return (
        <div>
            {a}
            <div>
                <button onClick={click}>A</button>
            </div>
        </div>
    )
}

export default App;