<template>
	<presentation>
		<material>
			<mattext texttype="text/html">{{ presentation.mattext }}</mattext>
		</material>
		<response_lid ident="response1" :rcardinality="presentation.rcardinality">
			<render_choice>
				<response 
					v-for="(response, index) in presentation.responses" 
					:key="index" 
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
		response: Response
	},
	props: ['presentation'],
	data () {
		return {
			correctAnswerID: 0
		}
	}
}
</script>