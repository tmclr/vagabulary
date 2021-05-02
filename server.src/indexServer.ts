import Express from 'express';
import { resolve } from 'path';

import BodyParser from 'body-parser';
import { readFile, writeFile } from 'fs/promises';

const rootPath = resolve( __dirname, '..' );
process.chdir( rootPath );

const app = Express();
app.listen( 8002 );






const jsonParser = BodyParser.json();
const feedbacksFile = resolve( rootPath, 'feedback.json' );

type FormFeedbackData = {
	main: string;
	fem: string;
};

app.post(
	'/api/form/feedback',
	jsonParser,
	async ( request: Express.Request, _response: Express.Response ) =>
	{
		const data = request.body as FormFeedbackData;
		let feedbacks: FormFeedbackData[];
		
		try
		{
			const content = await readFile( feedbacksFile, 'utf8' );
			
			feedbacks = JSON.parse( content );
		}
		catch ( _error )
		{
			feedbacks = [];
		}
		
		feedbacks.push( data );
		
		await writeFile(
			feedbacksFile,
			JSON.stringify( feedbacks ),
			'utf8',
		);
		
		//response.send( 'OK' );
	},
);