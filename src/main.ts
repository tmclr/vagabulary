export class link{
    i : number;
    constructor(button: HTMLElement, t : number){
        button.addEventListener('click', ()=>this.nextLink());
        this.i = t;
    }

    nextLink(){
        const arr : NodeListOf<HTMLElement> = document.querySelectorAll('main');
        switch(this.i){
        case(1):
            arr[0].hidden = true;
            arr[2].hidden = false;
            break;
        case(2):
            arr[2].hidden = true;
            arr[1].hidden = true;
            arr[3].hidden = true;
            arr[0].hidden = false;
            window.location.reload();
            break;
        case(3):
            arr[2].hidden = true;
            arr[0].hidden = true;
            arr[3].hidden = true;
            arr[1].hidden = false;
            break;
        case(4):
            arr[2].hidden = true;
            arr[0].hidden = true;
            arr[1].hidden = true;
            arr[3].hidden = false;
            break;
        }
    }
}



