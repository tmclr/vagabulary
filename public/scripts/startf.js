export class start {
    constructor(button) {
        button.addEventListener('click', () => this.startGame());
    }
    startGame() {
        const s = document.getElementsByClassName('test');
        let i = s.length;
        while (i--) {
            s[i].classList.toggle('hidden');
        }
    }
}
//# sourceMappingURL=startf.js.map