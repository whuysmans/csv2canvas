<template>
	<presentation>
		<material>
			<mattext texttype="text/html">{{ presentation.mattext }}</mattext>
		</material>
		<response_lid v-for="( response, index ) in groupedResponses" :key="index" :ident="response[0].name">
			<material>
				<mattext>{{ response[0].placeholder }}</mattext>
			</material>
			<render_choice >
				<response v-for="resp in response" :key="resp.ident" :ident="resp.ident" :mattext="resp.mattext" />
			</render_choice>
		</response_lid>
	</presentation>
</template>
<script>
import { groupBy } from '../utils/helperfunctions'
import Response from './Response'

export default {
	props: [ 'presentation' ],
	components: {
		'response': Response
	},
	data () {
		return {
			groupedResponses: groupBy( this.presentation.responses, 'iteration' )
		}
	}
}
</script>