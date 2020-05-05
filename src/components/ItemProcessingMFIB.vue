<template>
	<resprocessing>
		<outcomes>
			<decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="DECIMAL" />
		</outcomes>
		<respcondition v-for="responses in groupedResponses" :key="responses[0].ident">
			<conditionvar>
				<varequal :respident="responses[0].name">{{ responses[0].ident }}</varequal>
			</conditionvar>
			<setvar varname="SCORE" action="Add">{{ score }}</setvar>
		</respcondition>
	</resprocessing>
</template>
<script>
import { groupBy } from '../utils/helperfunctions'
export default {
	props: [ 'responses' ],
	data () {
		return {
			groupedResponses: groupBy( this.responses, 'iteration' )
		}
	},
	computed: {
		score () {
			return Math.floor( 100 / Object.keys( this.groupedResponses ).length )
		}
	}
}
</script>