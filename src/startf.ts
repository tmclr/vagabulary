
export class start{

    constructor(button: HTMLElement){
        button.addEventListener('click', ()=>this.startGame());
    }

    startGame(){
       const s = document.getElementsByClassName('test');
       let i :number = s.length;
       while(i--){
           s[i].classList.toggle('hidden');
       }
    }
}