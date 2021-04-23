import {link} from './main.js';
import {start} from './startf.js';
import {answer, check} from './ans.js';
import {control} from './controlf.js';

function main(){
    const aid = document.getElementById('add');
    if (!(aid instanceof HTMLElement))
                return ;
    new link(aid, 1);

    const pid = document.getElementById('logo_pic');
    if (!(pid instanceof HTMLElement))
                return ;
    new link(pid, 2);

    const gid = document.getElementById('get_test');
    if (!(gid instanceof HTMLElement))
                return ;
    new link(gid, 3);

    const awid = document.getElementById('add_words');
    if (!(awid instanceof HTMLElement))
                return ;
    new link(awid, 4);

    const bid = document.getElementById('back_to_main');
    if (!(bid instanceof HTMLElement))
                return ;
    new link(bid, 2);

    const bbid = document.getElementById('back_button');
    if (!(bbid instanceof HTMLElement))
                return ;
    new link(bbid, 2);

    const sid = document.getElementById('start');
    if (!(sid instanceof HTMLElement))
                return ;
    new start(sid);

    const anid = document.getElementById('a');
    const piid = (<HTMLInputElement>document.getElementById('play_input'));
    if (!(anid instanceof HTMLElement))
        return ;
    if (!(piid instanceof HTMLElement))
        return ;
    new answer(anid, piid);

    const biid = document.getElementById('b')
    if (!(biid instanceof HTMLElement))
        return ;
    new check(biid);

    
    const mid = document.getElementById('main_button');
    const miid = (<HTMLInputElement>document.getElementById('main_input'));
    const rid = document.getElementById('results');
    const fid = document.getElementById('filter_button');
    if (!(mid instanceof HTMLElement))
        return ;
    if (!(miid instanceof HTMLElement))
        return ;
    if (!(rid instanceof HTMLElement))
        return ;
    if (!(fid instanceof HTMLElement))
        return ;
    new control(mid, miid, rid);
    new control(fid, miid, rid);

	const form = document.forms.namedItem( 'feedback' );
    if(! form)
       return;
	form.addEventListener(
		'submit',
		async ( event ) =>
		{
			event.preventDefault();
			
			const nameField = form.elements.namedItem( 'main' );
			const messageField = form.elements.namedItem( 'fem' );
			
            if(!(nameField instanceof HTMLInputElement) || !(messageField instanceof HTMLInputElement))
                return;

			const data = {
				name: nameField.value,
				message: messageField.value,
			};
			
			await fetch(
				form.action,
				{
					method: form.method,
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify( data ),
				},
			);
			
			nameField.value = '';
			messageField.value = '';
		}
	);

}

main();