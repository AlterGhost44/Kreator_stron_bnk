export function toggleMenu(side) {
    const menu = document.querySelector(`.${side}-aside`);

    if (!menu) {
        console.error(`Nie można znaleźć menu po stronie: ${side}`);
        return;
    }

    menu.classList.toggle('active');
}