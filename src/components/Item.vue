<template>
	<item :ident="item.ident" title="Question">
		<itemmetadata>
			<qtimetadata>
				<qtimetadatafield>
					<fieldlabel>question_type</fieldlabel>
					<fieldentry>{{ item.type }}</fieldentry>
				</qtimetadatafield>
				<qtimetadatafield>
					<fieldlabel>points_possible</fieldlabel>
					<fieldentry>{{ item.points }}</fieldentry>
				</qtimetadatafield>
				<qtimetadatafield>
					<fieldlabel>original_answer_ids</fieldlabel>
					<fieldentry>{{ item.original_answer_ids }}</fieldentry>
				</qtimetadatafield>
				<qtimetadatafield>
					<fieldlabel>assessment_question_identifierref</fieldlabel>
					<fieldentry>{{ item.assessment_question_identifierref }}</fieldentry>
				</qtimetadatafield>
			</qtimetadata>
		</itemmetadata>
		<item-presentation :presentation="item.presentation" :respident="item.respident"></item-presentation>
		<item-processing v-if="isMC" :respident="item.respident"></item-processing>
		<item-processing-mr 
			v-else-if="isMR" 
			:respident_correct="item.respident_correct" 
			:respident_incorrect="item.respident_incorrect"
		/>
	</item>
</template>
<script>
import ItemPresentation from './ItemPresentation'
import ItemProcessing from './ItemProcessing'
import ItemProcessingMR from './ItemProcessingMR'
export default {
	components: {
		'item-presentation': ItemPresentation,
		'item-processing': ItemProcessing,
		'item-processing-mr': ItemProcessingMR
	},
	props: ['item'],
	created () {
		console.log( 'item created' )
	},
	computed: {
		isMC () {
			return this.item.type === 'multiple_choice_question'
		},
		isMR () {
			return this.item.type === 'multiple_answers_question'
		}
	}
}
</script>