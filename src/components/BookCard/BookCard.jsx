import {useState} from "react";

export const BookCard = ({book}) => {
    const [count, setCount] = useState(0);
    return <div>
        <div>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
        </div>
        <div>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)} disabled={count === 10}>+</button>
        </div>
    </div>
}