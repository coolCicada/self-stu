import { useDrag } from 'react-dnd';

const DraggableItem = ({ name, type, children }: { name: string; type: string; children: React.ReactNode }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type,
            item: { name, type },
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        })
    );

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} style={{ opacity }}>
            {children}
        </div>
    );
};

export default DraggableItem;
