import ReactDOM from 'react-dom/client'
import styles from './index.module.less';

const App = () => {
    const entries = [
        {
            name: '事件',
            url: '/event.html'
        },
        {
            name: '拖拽',
            url: '/drag.html'
        },
        {
            name: '简单拖拽',
            url: '/react-dnd1.html'
        },
        {
            name: '拖拽列表',
            url: '/react-dnd2.html'
        },
        {
            name: '低代码',
            url: '/lowcode.html'
        }
    ]
    return <div className={styles.list}>
        {entries.map(({ name, url }) => <a href={url} key={name}>{name}</a>)}
    </div>
}

ReactDOM.createRoot(document.getElementById('app')!)
.render(
	<App />
)