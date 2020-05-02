const createItems = ( json ) => {
	console.log( json )
	let items = []
	json.forEach( element => {
		let item = {}
		item['ident'] = getRandomIdent()
		item['type'] = element.type === 'MC' ? 'multiple_choice_question' : ''
		item['points'] = element.points
		item['presentation'] = {}
		item['presentation']['mattext'] = element.question
		item['presentation']['rcardinality'] = 'Single'
		item['presentation']['responses'] = []
		item['assessment_question_identifierref'] = getRandomIdent()
		const keys = Object.keys( element )
		const answerKeys = keys.filter( ( key ) => {
			return key.includes( 'ans' )
		} )
		const original_answer_ids = []
		answerKeys.forEach( ( key ) => {
			const id = getAnswerId()
			original_answer_ids.push( id )
			if ( element.correct.trim().toLowerCase() === key.trim().toLowerCase() ) {
				item['respident'] = id
			}
			let response = {}
			response['ident'] = id
			response['mattext'] = element[key]
			item['presentation']['responses'].push( response )
		})
		item['original_answer_ids'] = original_answer_ids.join()
		items.push( item )
	});
	return items
}

const getAnswerId = () => {
	return Math.floor( ( Math.random() * 90000 ) + 10000 )
}

const getRandomIdent = () => {
	const array = new Uint32Array( 4 )
	return 'i' + window.crypto.getRandomValues(array).join('')
}

export { createItems, getRandomIdent }