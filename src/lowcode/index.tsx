import ReactDOM from 'react-dom/client'
import { render } from './render/index';

const App = () => {
    return (
        <div>
            {render({ id: 0, name: 'c0', type: 'button', props: {}, children: ['你好'] })}
            {render({ id: 1, name: 'c1', type: 'self', props: { text: 'hello' }, children: ['你好'] })}
            {render({ id: 2, name: 'c2', type: 'button', props: {}, children: ['你好'] })}
        </div>
    )
};

ReactDOM.createRoot(document.getElementById('app')!)
.render(
	<App />
)