<template>
	<presentation>
		<material>
			<mattext texttype="text/html">{{ presentation.mattext }}</mattext>
		</material>
		<response_lid ident="response1" :rcardinality="presentation.rcardinality">
			<render_choice>
				<mfib-response 
					v-for="(response) in presentation.responses" 
					:key="response.ident" 
					:ident="response.ident"
					:mattext="response.mattext"
				/>
			</render_choice>
		</response_lid>
	</presentation>
</template>
<script>
import Response from './Response'
export default {
	components: {
		'mfib-response': Response
	},
	props: ['presentation'],
	data () {
		return {
			correctAnswerID: 0
		}
	}
}
</script>