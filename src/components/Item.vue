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
					<fieldentry>{{ item.original_answer_ids.length > 0 ? item.original_answer_ids : '' }}</fieldentry>
				</qtimetadatafield>
				<qtimetadatafield>
					<fieldlabel>assessment_question_identifierref</fieldlabel>
					<fieldentry>{{ item.assessment_question_identifierref }}</fieldentry>
				</qtimetadatafield>
			</qtimetadata>
		</itemmetadata>
		<item-presentation v-if="isMC || isMR" :presentation="item.presentation" :respident="item.respident"></item-presentation>
		<item-presentation-fib v-else-if="isFIB" :presentation="item.presentation" />
		<item-presentation-essay v-else-if="isESSAY" :presentation="item.presentation" />
		<item-presentation-mfib v-else-if="isMFIB" :presentation="item.presentation" />
		<item-processing v-if="isMC" :respident="item.respident"></item-processing>
		<item-processing-mr 
			v-else-if="isMR" 
			:respident_correct="item.respident_correct" 
			:respident_incorrect="item.respident_incorrect"
		/>
		<item-processing-fib v-else-if="isFIB" :responses="item.resprocessing.responses" />
		<item-processing-mfib v-else-if="isMFIB" :responses="item.presentation.responses" />
		<item-processing-essay v-else-if="isESSAY" />
	</item>
</template>
<script>
import ItemPresentation from './ItemPresentation'
import ItemProcessing from './ItemProcessing'
import ItemProcessingMR from './ItemProcessingMR'
import ItemPresentationFIB from './ItemPresentationFIB'
import ItemProcessingFIB from './ItemProcessingFIB'
import ItemPresentationMFIB from './ItemPresentationMFIB'
import ItemProcessingMFIB from './ItemProcessingMFIB'
import ItemPresentationEssay from './ItemPresentationEssay'
import ItemProcessingEssay from './ItemProcessingEssay'

export default {
	components: {
		'item-presentation': ItemPresentation,
		'item-processing': ItemProcessing,
		'item-processing-mr': ItemProcessingMR,
		'item-presentation-fib': ItemPresentationFIB,
		'item-processing-fib': ItemProcessingFIB,
		'item-presentation-mfib': ItemPresentationMFIB,
		'item-processing-mfib': ItemProcessingMFIB,
		'item-presentation-essay': ItemPresentationEssay,
		'item-processing-essay': ItemProcessingEssay
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
		},
		isFIB () {
			return this.item.type === 'short_answer_question'
		},
		isMFIB () {
			return this.item.type === 'fill_in_multiple_blanks_question'
		},
		isESSAY () {
			return this.item.type === 'essay_question'
		}
	}
}
</script>