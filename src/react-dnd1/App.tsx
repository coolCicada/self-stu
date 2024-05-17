import { useRef, useState, useEffect } from 'react';
import './App.css'
import { useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

const DragLayer = () => {
    const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        isDragging: monitor.isDragging(),
        currentOffset: monitor.getSourceClientOffset(),
    }));

    if (!isDragging) {
        return null;
    }
    return (
        <div className='drag-layer' style={{
            left: currentOffset?.x,
            top: currentOffset?.y
        }}>{item.color}!!</div>
    );
}


interface ItemType {
    color: string;
}
interface BoxProps {
    color?: string
}

function Box(props: BoxProps) {
    const ref = useRef(null);
    const [{ dragging }, drag, dragPreview] = useDrag({
        type: 'box',
        item: {
            color: props.color
        },
        collect(monitor) {
            return {
                dragging: monitor.isDragging()
            }
        }
    });

    useEffect(() => {
        drag(ref)
        dragPreview(getEmptyImage(), { captureDraggingState: true })
    }, []);


    return <div ref={ref} className={dragging ? 'box dragging' : 'box'} style={
        {
            backgroundColor: props.color || 'blue'
        }
    }></div>
}

function Container() {
    const [boxes, setBoxes] = useState<ItemType[]>([]);

    const [, drop] = useDrop(() => {
        return {
            accept: 'box',
            drop(item: ItemType) {
                setBoxes((boxes) => [...boxes, item])
            }
        }
    });
    return <div ref={drop} className="container">
        {boxes.map((box, index) => <Box key={index} color={box.color} />)}
    </div>
}

const App = () => {
    return <div>
        <Container></Container>
        <Box></Box>
        <Box color='red'></Box>
        <Box color='green'></Box>
        <DragLayer></DragLayer>
    </div>
}

export default App;