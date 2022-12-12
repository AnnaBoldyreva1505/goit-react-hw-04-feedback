// Импортируем хук useState из React. Он позволяет функциональному компоненту хранить внутреннее состояние.
import React, { useState } from 'react';

function Example() {
    // Объявление новой переменной состояния «count»
    
    const [count, setCount] = useState(0);
 return (
      <div>
         <p>Вы кликнули {count} раз(а)</p>
         {/* Когда пользователь кликает по кнопке, мы вызываем setCount с приращённым значением. После этого React сделает повторный рендер, в котором использует уже новое значение count. */}
        <button onClick={() => setCount(count + 1)}>
        Нажми на меня        </button>
      </div>
    );
  }
    