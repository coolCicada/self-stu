// import React from 'react'
import { memo, useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    const [count, setCount] = useState<number>(0);
    console.log('app refresh');
    // const child = useMemo(() => <Child />, []);
    const child = <Child />
    console.log('child', child);
    return (
        <>
            <div>React Refresh</div>
            <button onClick={() => setCount(p => p + 1)}>{count}</button>
            <Main>
                {child}
            </Main>
        </>
    )
}

const Main = memo(({ children }: { children?: React.ReactNode }) => {
    console.log('main refresh')
    return (
        <div>
            main
            <hr />
            {children}
        </div>
    )
})

const Child = memo(() => {
    console.log('child refresh')
    return (
        <div>
            Child
        </div>
    )
})

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)