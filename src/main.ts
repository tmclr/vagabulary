export class link{
    i : number;
    constructor(button: HTMLElement, t : number){
        button.addEventListener('click', ()=>this.nextLink());
        this.i = t;
    }

    nextLink(){
        const arr : NodeListOf<HTMLElement> = document.querySelectorAll('main');
        const p0 = arr[0] as HTMLElement;
        const p1 = arr[1] as HTMLElement;
        const p2 = arr[2] as HTMLElement;
        const p3 = arr[3] as HTMLElement;
        switch(this.i){
        case(1):
            p0.hidden = true;
            p2.hidden = false;
            break;
        case(2):
            p2.hidden = true;
            p1.hidden = true;
            p3.hidden = true;
            p0.hidden = false;
            window.location.reload();
            break;
        case(3):
            p2.hidden = true;
            p0.hidden = true;
            p3.hidden = true;
            p1.hidden = false;
            break;
        case(4):
            p2.hidden = true;
            p0.hidden = true;
            p1.hidden = true;
            p3.hidden = false;
            break;
        }
    }
}



