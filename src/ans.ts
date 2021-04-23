
export class answer{
    text : HTMLInputElement;
    x : number= 0;
    count : number = 0;
    
    constructor(button: HTMLElement, input: HTMLInputElement){
        this.text = input;
        button.addEventListener('click', ()=>this.checkAnswer());
    }

    checkAnswer(){
       let parent = document.getElementById('comment'); //не пишу : HTMLElement, тк проверяю следующей строчкой
       if (!(parent instanceof HTMLElement))
            return ;
        if (this.x>=9)
        {
            let cid = document.getElementById('count');
            if (!(cid instanceof HTMLElement))
                return ;
            cid.innerHTML = 'Ваш счет:';
            let wid = document.getElementById('word');
            if (!(wid instanceof HTMLElement))
                return ;
            wid.innerHTML = `${this.count}`;
            if (this.count<20)
            {
                let c = document.createElement('p');
                c.innerHTML = 'Судя по всему, вы только недавно открыли для себя мир феминитивов. Но ничего, язык меняется, а мы не всегда за ним успеваем. Мы уверенны, что после небольшой практики вы справитесь лучше. А пока можете поискать интересуешие вас слова на сайте.';
                parent.append(c);
            }
            else if (this.count>70)
            {
                let c = document.createElement('p');
                c.innerHTML = 'Сразу видно, тест проходил профессионал! Вы уже давно интересуетесь феминитивами и хорошо ориентируетесь в пограничных ситуациях. Но если что, вы всегда можете изучить чуть больше на нашем сайте.';
                parent.append(c);
            }
            else
            {
                let c = document.createElement('p');
                c.innerHTML = 'Кажется, вы слышите про феминитивы не в первый раз, но не интересовались темой подробной. Что ж, у вас хорошая наслышанность, но если вдруг будет интересно, заходите на наш сайт и изучайте вопрос по-новому.';
                parent.append(c);
            }
            let bid = document.getElementById('back_button');
            if (!(bid instanceof HTMLElement))
                return ;
            bid.classList.remove('hidden');
            let bbid = document.getElementById('b');
            if (!(bbid instanceof HTMLElement))
                return ;
            bbid.classList.add('hidden');
            let aaid = document.getElementById('a');
            if (!(aaid instanceof HTMLElement))
                return ;
            aaid.classList.add('hidden');
        }
       else
       {
           let a = this.text.value;

       switch(this.x){
           case 0:
            if (a === 'Адвокатесса' || a === 'адвокатесса'){
                this.count+=10;

                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else if (a === 'Адвокатка' || a === 'адвокатка' ){
                this.count+=5;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Так конечно говорят, но редко.';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Адвокатесса.';
                parent.append(c);
            }
            break;
            case 1:
            if (a === 'Няня' || a === 'няня'){
                this.count+=10;

                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Это было просто:)';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Жаль.. Подвоха не было.';
                parent.append(c);
            }
            break;
            case 2:
            if (a === 'Докторка' || a === 'докторка'){
                this.count+=10;
              
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else if (a === 'Докторесса' || a === 'докторесса' ){
                this.count+=5;
     
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Так конечно говорят, но редко.';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Докторка.';
                parent.append(c);
            }
            break;
            case 3:
            if (a === 'Хирургиня' || a === 'хирургиня'){
                this.count+=10;
       
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Хирургиня.';
                parent.append(c);
            }
            break;
            case 4:
            if (a === 'Математикиня' || a === 'математикиня'){
                this.count+=10;

                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Математикиня.';
                parent.append(c);
            }
            break;
            case 5:
            if (a === 'Кокесса' || a === 'кокесса'){
                this.count+=10;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Кокесса.';
                parent.append(c);
            }
            break;
            case 6:
            if (a === 'Врачиня' || a === 'врачиня'){
                this.count+=10;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else if (a === 'Врачиха' || a === 'врачиха' ){
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Пожалуйста, не говори так. Правильно представительныц данной профессии называть врачинями.';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Врачиня.';
                parent.append(c);
            }
            break;
            case 7:
            if (a === 'Певица' || a === 'певица'){
                this.count+=10;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Подвоха не было:)';
                parent.append(c);
            }
            break;
            case 8:
            if (a === 'Официантка' || a === 'официантка'){
                this.count+=10;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Ну же, немного усилий!';
                parent.append(c);
            }
            break;
            case 9:
            if (a === 'Бартендерка' || a === 'бартендерка'){
                this.count+=10;
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Хорошая работа!';
                parent.append(c);
            }
            else{
                let c : HTMLParagraphElement = document.createElement('p');
                c.innerHTML = 'Увы, правильный ответ — Бартендерка.';
                parent.append(c);
            }
            break;
        }
    }
        this.x+=1;
        let s  = document.getElementsByClassName('play');
        let i = s.length;
        
        while(i--){
           s[i].classList.toggle('hidden');
        }
        let pid = document.getElementById('play_input');
        if (!(pid instanceof HTMLElement))
            return ;
        pid.textContent = '';
        pid.classList.toggle('hidden');
        
    }
}

export class check{
    x1 = 0;
    constructor(button: HTMLElement){
        button.addEventListener('click', ()=>this.nextQuestion());
    }

    nextQuestion(){
        if (this.x1<10){
       let arr = ['Адвокат', 'Нянь', 'Доктор', 'Хирург', 'Математик', 'Кок', 'Врач', 'Певец', 'Официант', 'Бартендер'];
       let parent = document.getElementById('comment');
       if (!(parent instanceof HTMLElement))
            return ;
       while (parent.firstChild)
            {
            parent.removeChild(parent.firstChild);
            } 
       let s = document.getElementsByClassName('play');
        let i = s.length;
        while(i--){
           s[i].classList.toggle('hidden');
        }
        this.x1+=1;
        let pid = document.getElementById('play_input');
        if (!(pid instanceof HTMLElement))
            return ;
        pid.classList.toggle('hidden');
        const cid = document.getElementById('count');
        if (!(cid instanceof HTMLElement))
            return ;
        cid.innerHTML = `${this.x1+1}/10`;
        const wid = document.getElementById('word');
        if (!(wid instanceof HTMLElement))
            return ;
        wid.innerHTML = arr[this.x1];}
        else
        {
            this.x1=0;
            const ain = document.getElementById('a');
            const pid = document.getElementById('play_input');
            if (!(pid instanceof HTMLInputElement))
                return ;
            if (!(ain instanceof HTMLElement))
                return ;
            new answer(ain, pid);
        }
    }
}