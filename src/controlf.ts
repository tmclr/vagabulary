
export class control{
    text : HTMLInputElement;
    output : HTMLElement;
    constructor(button : HTMLElement, input : HTMLInputElement, word : HTMLElement){
        this.text = input;
        this.output = word;
        button.addEventListener('click', ()=>this.getText());
    } 

    getText(){
        const parent = document.getElementById('results');
        if (!(parent instanceof HTMLElement))
            return ;
        const word = this.text.value;
        let i = 0, arr = [],  newWord = word;
        if (!(word))
            return ;
        if (!(newWord))
            return ;
        const mid = document.getElementById('main_input');
        if (!(mid instanceof HTMLElement))
            return ;
        mid.nodeValue = '';
        const nid = document.getElementById('new');
        if (!(nid instanceof HTMLElement))
            return ;
        nid.classList.remove('hidden');
        const aid = document.getElementById('article');
        if (!(aid instanceof HTMLElement))
            return ;
        aid.classList.add('hidden');
        while (parent.firstChild)
        {
            parent.removeChild(parent.firstChild);
        }
        if ( word.slice(-1) > 'а' &&  word.slice(-1) < 'я' || word.slice(-1) > 'А' &&  word.slice(-1) < 'Я')
        {
            if ( word.slice(-2) === 'ог'){
                arr[i] = 'иня';
            }
            else if( word.slice(-3) === 'ник'){
                arr[i] = 'ница';
                newWord = word.slice(0, -3);
            }
            else if( word.slice(-2) === 'ик'){
                arr[i] = 'ица';
                newWord = word.slice(0, -2);
            }
            else if( word.slice(-2) === 'ец'){
                arr[i] = 'чиха';
                newWord = word.slice(0, -2);
            }
            else if( word.slice(-1) === 'р' || word.slice(-1) === 'н'){
                arr[i] = 'ша';
                arr[i+1] = 'ка';
            }
            else if( word.slice(-2) === 'ль'){
                arr[i] = 'ница';
            }
            else if( word.slice(-1) === 'ь'){
                arr[i] = 'ица';
                arr[i+1] = 'ка';
                newWord = word.slice(0, -1);
            }
            else {
                arr[i] = 'ица';
                arr[i+1] = 'есса';
                arr[i+2] = 'иня';
                arr[i+3] = 'иха';
            }
            const arr2 : NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=checkbox]'); 
            
            const arr3 : string[] = [];
            let t : number = -1;
            i = arr2.length;
            const lid : NodeListOf<HTMLLabelElement> = document.querySelectorAll('label');

            while (i--)
            {
                const temp = arr2[i] as HTMLInputElement;
                if (temp.checked)
                {
                    
                    const p = lid[i] as HTMLLabelElement
                    const tmp = p.textContent;
                    if (!(tmp))
                        return;
                    arr3[t+=1] = tmp.slice(1, -1);
                }
            }
            i = arr3.length;
            while (i--)
            {
                const p = arr3[i] as string
                if (p.slice(-1) === 'н')
                    arr3[i] += 'я';
                else
                    arr3[i] += 'а';
            }
            if (arr3.length)
                arr = arr.filter(item => arr3.includes(item));
            i = arr.length;
            if (i === 0){
                const newDiv : HTMLParagraphElement= document.createElement('p');
                newDiv.innerHTML = 'Таких слов нет';
                parent.append(newDiv);
            }
            else
            {
                while (i--)
                 {
                const newDiv : HTMLParagraphElement= document.createElement('p');
                if (newWord[0] === undefined)
                    return;
                newDiv.innerHTML =  newWord[0].toUpperCase() +  newWord.slice(1).toLowerCase() + arr[i] ;
                parent.append(newDiv);
                  }
            }
        }
        else if (  word.slice(-1) == 'а' ||  word.slice(-1) == 'я')
        {
            const newDiv : HTMLParagraphElement = document.createElement('p');
            newDiv.innerHTML = 'Это слово и так прекрасно';
            parent.append(newDiv);
        }
        else if ( word == '' )
        {
            const nid = document.getElementById('new');
            if (!(nid instanceof HTMLElement))
                return ;
            nid.classList.add('hidden');
            const aid = document.getElementById('article');
            if (!(aid instanceof HTMLElement))
                return ;
            aid.classList.remove('hidden');
            while (parent.firstChild)
            {
            parent.removeChild(parent.firstChild);
            } 
        }
        else
        {
            const newDiv : HTMLParagraphElement = document.createElement('p');
            newDiv.innerHTML = 'Ну издеваться то не надо';
            parent.append(newDiv);
        }
        
    }
}