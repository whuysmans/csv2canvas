<template>
	<response_label :ident="ident">
		<material>
			<mattext texttype="text/plain">{{ mattext }}</mattext>
		</material>
	</response_label>
</template>
<script>
export default {
	props: ['mattext', 'ident']
}
</script>