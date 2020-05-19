const groupBy = ( arr, property ) => {
	return arr.reduce( ( acc, cur ) => {
		acc[ cur[ property ] ] = [ ...acc[ cur[ property ] ] || [], cur ];
		return acc;
	}, {});
}

const trimQuotes = ( str ) => {
	return str.replace( /^"(.*?)"$/g, '$1' )
}

export { groupBy, trimQuotes }