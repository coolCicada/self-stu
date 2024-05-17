import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop, children }: { onDrop: (item: any) => void; children: React.ReactNode }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'draggableItem',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const backgroundColor = isOver ? 'lightblue' : 'lightgray';

    return (
        <div ref={drop} style={{ backgroundColor }}>
            {children}
        </div>
    );
};

export default DropZone;
