const createItems = ( json ) => {
	console.log( json )
	let items = []
	json.forEach( element => {
		if ( element.type === 'MC' ) {
			const item = createMCItem( element )
			items.push( item )
		} else if ( element.type === 'MR' )	{
			const item = createMRItem( element )
			items.push( item )
		} else if ( element.type === 'FIB' ) {
			const item = createFIBItem( element )
			items.push( item )
		}
	});
	return items
}

const createMCItem = ( element ) => {
	let item = {}
	item['ident'] = getRandomIdent()
	item['type'] = 'multiple_choice_question'
	item['points'] = element.points
	item['presentation'] = {}
	item['presentation']['mattext'] = element.question
	item['presentation']['rcardinality'] = 'Single'
	item['presentation']['responses'] = []
	item['assessment_question_identifierref'] = getRandomIdent()
	const keys = Object.keys( element )
	const answerKeys = keys.filter( ( key ) => {
		return key.includes( 'ans' ) && element[key] !== ''
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
	return item
}

const createMRItem = ( element ) => {
	let item = {}
	item['ident'] = getRandomIdent()
	item['type'] = 'multiple_answers_question'
	item['points'] = element.points
	item['presentation'] = {}
	item['presentation']['mattext'] = element.question
	item['presentation']['rcardinality'] = 'Multiple'
	item['presentation']['responses'] = []
	item['assessment_question_identifierref'] = getRandomIdent()
	const keys = Object.keys( element )
	const answerKeys = keys.filter( ( key ) => {
		return key.includes( 'ans' ) && element[key] !== ''
	} )
	const original_answer_ids = []
	let correct_ids = []
	let incorrect_ids = []
	answerKeys.forEach( ( key ) => {
		const id = getAnswerId()
		original_answer_ids.push( id )
		console.log( element.correct )
		if ( element.correct.trim().toLowerCase().split( ' ' ).includes( key.trim().toLowerCase() ) ){
			correct_ids.push( id )
		} else {
			incorrect_ids.push( id )
		}
		
		let response = {}
		response['ident'] = id
		response['mattext'] = element[key]
		item['presentation']['responses'].push( response )
	})
	item['respident_correct'] = correct_ids
	item['respident_incorrect'] = incorrect_ids
	item['original_answer_ids'] = original_answer_ids.join()
	return item	
}

const createFIBItem = ( element ) => {
	let item = {}
	item['ident'] = getRandomIdent()
	item['type'] = 'short_answer_question'
	item['points'] = element.points
	item['presentation'] = {}
	item['presentation']['mattext'] = element.question
	item['presentation']['rcardinality'] = 'Single'
	item['resprocessing'] = {}
	item['resprocessing']['responses'] = []
	item['assessment_question_identifierref'] = getRandomIdent()
	const keys = Object.keys( element )
	const answerKeys = keys.filter( ( key ) => {
		return key.includes( 'ans' ) && element[key] !== ''
	} )
	const original_answer_ids = []
	answerKeys.forEach( ( key ) => {
		const id = getAnswerId()
		original_answer_ids.push( id )
		let response = {}
		response['ident'] = id
		response['mattext'] = element[key]
		item['resprocessing']['responses'].push( response )
	})
	item['original_answer_ids'] = original_answer_ids.join()
	return item
}

const getAnswerId = () => {
	return Math.floor( ( Math.random() * 90000 ) + 10000 )
}

const getRandomIdent = () => {
	const array = new Uint32Array( 4 )
	return 'i' + window.crypto.getRandomValues(array).join('')
}

export { createItems, getRandomIdent }