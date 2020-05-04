<template>
	<resprocessing>
		<outcomes>
			<decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal" />
		</outcomes>
		<respcondition continue="No">
			<conditionvar>
				<varequal v-for="( response, index ) in responses" :key="index" respident="response1">
					{{ response.mattext }}
				</varequal>
			</conditionvar>
			<setvar action="Set" varname="SCORE">100</setvar>
		</respcondition>
	</resprocessing>
</template>
<script>
export default {
	props: ['responses']
}
</script>