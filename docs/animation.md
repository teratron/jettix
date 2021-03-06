# Animation

[https://html5book.ru/css3-animation](https://html5book.ru/css3-animation)

### Краткая запись анимации:

    animation: animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction;

### Множественная анимация:

    animation: shadow 1s ease-in-out 0.5s alternate, move 5s linear 2s;

### Название анимации:

    animation-name: none;        Означает отсутствие анимации. Также используется, чтобы отменить анимацию элемента из группы элементов, для которых задана анимация.
    animation-name: test-01;
    animation-name: -sliding;
    animation-name: moving-vertically;
    animation-name: test2;
    animation-name: test3, move4;
    animation-name: initial;     Устанавливает значение свойства в значение по умолчанию.
    animation-name: inherit;     Наследует значение свойства от родительского элемента.

### Продолжительность анимации:

    animation-duration: .5s;
    animation-duration: 200ms;
    animation-duration: 2s, 10s;
    animation-duration: 15s, 30s, 200ms;

### Временная функция:

    animation-timing-function: ease;
    animation-timing-function: ease-in;
    animation-timing-function: ease-out;
    animation-timing-function: ease-in-out;
    animation-timing-function: linear;
    animation-timing-function: step-start;
    animation-timing-function: step-end;
    animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
    animation-timing-function: steps(4, end);
    animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
    animation-timing-function: initial;
    animation-timing-function: inherit;

### Повтор анимации:

    animation-iteration-count: infinite;
    animation-iteration-count: 3;
    animation-iteration-count: 2.5;
    animation-iteration-count: 2, 0, infinite;

### Направление анимации:

    animation-direction: normal;            Все повторы анимации воспроизводятся так, как указано. Значение по умолчанию.
    animation-direction: reverse;           Все повторы анимации воспроизводятся в обратном направлении от того, как они были определены.
    animation-direction: alternate;         Каждый нечетный повтор цикла анимации воспроизводятся в нормальном направлении, каждый четный повтор воспроизводится в обратном направлении.
    animation-direction: alternate-reverse; Каждый нечетный повтор цикла анимации воспроизводятся в обратном направлении, каждый четный повтор воспроизводится в нормальном направлении.
    animation-direction: normal, reverse;
    animation-direction: alternate, reverse, normal;
    animation-direction: initial;           Устанавливает значение свойства в значение по умолчанию.
    animation-direction: inherit;           Наследует значение свойства от родительского элемента.

### Проигрывание анимации:

    animation-play-state: running;
    animation-play-state: paused;
    animation-play-state: paused, running, running;
    animation-play-state: initial;
    animation-play-state: inherit;

### Задержка анимации:

    animation-delay: 5s;
    animation-delay: 3s, 10ms;

### Состояние элемента до и после воспроизведения анимации:

    animation-fill-mode: none;
    animation-fill-mode: forwards;
    animation-fill-mode: backwards;
    animation-fill-mode: both;
    animation-fill-mode: none, backwards;
    animation-fill-mode: both, forwards, none;