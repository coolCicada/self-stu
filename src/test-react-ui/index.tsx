import { createRoot } from "react-dom/client";
import { Button} from 'react-simply-ui';

// 获取根节点
const container = document.getElementById("root")!;

// 创建一个根
const root = createRoot(container);

// 渲染应用
root.render((<div><Button label="Hello"/></div>));
