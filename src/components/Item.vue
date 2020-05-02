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
		<item-processing :respident="item.respident"></item-processing>
	</item>
</template>
<script>
import ItemPresentation from './ItemPresentation'
import ItemProcessing from './ItemProcessing'
export default {
	components: {
		'item-presentation': ItemPresentation,
		'item-processing': ItemProcessing
	},
	props: ['item'],
	created () {
		console.log( 'item created' )
	}
}
</script>