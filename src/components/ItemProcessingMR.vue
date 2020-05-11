<template>
	<resprocessing>
		<outcomes>
			<decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal" />
		</outcomes>
		<respcondition continue="No">
			<conditionvar>
				<and>
					<not v-for="( resp ) in respident_incorrect" :key="resp">
						<varequal respident="response1">{{ resp }}</varequal>
					</not>
					<varequal v-for="( resp ) in respident_correct" :key="resp" respident="response1">{{ resp }}</varequal>
				</and>
			</conditionvar>
			<setvar action="Set" varname="SCORE">100</setvar>
		</respcondition>
	</resprocessing>
</template>
<script>
export default {
	props: ['respident_correct', 'respident_incorrect']
}
</script>