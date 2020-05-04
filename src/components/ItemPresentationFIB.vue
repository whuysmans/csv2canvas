<template>
	<presentation>
		<material>
			<mattext texttype="text/html">{{ presentation.mattext }}</mattext>
		</material>
		<response_str ident="response1" :rcardinality="presentation.rcardinality">
			<render_fib>
				<response_label ident="answer1" rshuffle="No" />
			</render_fib>
		</response_str>
	</presentation>
</template>
<script>
export default {
	props: ['presentation'],
	created () {
		console.log('pres created')
	}
}
</script>