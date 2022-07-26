import React, { useState } from 'react';

const UseStateHook = (props) => {
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    return (
        <section>
            <header>
                <h1>use state component</h1>
            </header>
            <section>
                <h2>
                    contador: {contador}
                </h2>
                <section>
                    <button id='increment' onClick={sumar}>+</button>
                    <button id='decrement' onClick={restar}>-</button>
                </section>
            </section>
        </section>
    );
}

export default UseStateHook;