
export class start{

    constructor(button: HTMLElement){
        button.addEventListener('click', ()=>this.startGame());
    }

    startGame(){
       const s = document.getElementsByClassName('test');
       let i : number = s.length;
       while(i--){
            const p = s[i] as HTMLElement;
            p.classList.toggle('hidden');
       }
    }
}