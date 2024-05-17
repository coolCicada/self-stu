import { useCallback, useEffect, useRef, useState } from "react";
import './App.css';
import { useDrag, useDrop } from "react-dnd";

interface CardItem {
    id: number;
    content: string;
}

interface CardProps {
    data: CardItem;
    index: number;
    swapIndex: (a: number, b: number) => void;
}

interface DragData {
    id: number;
    index: number;
}

function Card(props: CardProps) {
    const ref = useRef(null);
    const { data, swapIndex, index } = props;

    const [{ dragging }, drag] = useDrag({
        type: 'card',
        item: {
            id: data.id,
            index: index
        },
        collect(monitor) {
            return {
                dragging: monitor.isDragging()}
        }
    });
    const [, drop] = useDrop({
        accept: 'card',
        hover(item: DragData) {
            swapIndex(index, item.index);
            item.index = index
        }
    });

    useEffect(() => {
        drag(ref);
        drop(ref);
    }, []);

    return <div ref={ref} className={dragging ? 'card dragging' : 'card'}>{data.content}</div>
}
function App() {
    const [cardList, setCardList] = useState<CardItem[]>([
        {
            id: 0,
            content: '000',
        },
        {
            id: 1,
            content: '111',
        },
        {
            id: 2,
            content: '222',
        },
        {
            id: 3,
            content: '333',
        },
        {
            id: 4,
            content: '444',
        }
    ]);

    const swapIndex = useCallback((index1: number, index2: number) => {
        const tmp = cardList[index1];
        cardList[index1] = cardList[index2];
        cardList[index2] = tmp;
        setCardList([...cardList]);
    }, []);

    return <div className="card-list">
        {
            cardList.map((item: CardItem, index) => (
                <Card swapIndex={swapIndex} index={index} data={item} key={'card_' + item.id} />
            ))
        }
    </div>
}

export default App;
