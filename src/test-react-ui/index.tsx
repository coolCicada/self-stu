import { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, Modal } from 'react-simply-ui';

// 获取根节点
const container = document.getElementById("root")!;

// 创建一个根
const root = createRoot(container);

const App = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button onClick={() => setShow(true)} label='测试' />
            <Modal isOpen={show} onClose={() => setShow(false)}>Modal</Modal>
        </>
    )
}

// 渲染应用
root.render(<App />);
