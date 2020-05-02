<template>
	<resprocessing>
		<outcomes>
			<decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal" />
		</outcomes>
		<respcondition continue="No">
			<conditionvar>
				<varequal respident="response1">{{ respident }}</varequal>
			</conditionvar>
			<setvar action="Set" varname="SCORE">100</setvar>
		</respcondition>
	</resprocessing>
</template>
<script>
export default {
	props: ['respident']
}
</script>