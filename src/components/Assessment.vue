<template>
	<questestinterop :xmlns="xmlns" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
		<assessment :ident="assessmentIdent" :title="getFilename()">
			<qtimetadata>
				<qtimetadatafield>
					<fieldlabel>cc_maxattempts</fieldlabel>
					<fieldentry>1</fieldentry>
				</qtimetadatafield>
			</qtimetadata>
			<section ident="root_section">
				<assessment-item v-for="(item, index) in items" :key="index" :item="item" />
			</section>
		</assessment>
	</questestinterop>
</template>
<script>
import Item from './Item'
import { saveAs } from 'file-saver'
import { getRandomIdent } from '../utils/csv'
import JSZip from 'jszip'
import { getAssessmentMeta, getIMSManifest } from '../utils/helpfiles'
import { mapGetters } from 'vuex'

export default {
	components: {
		'assessment-item': Item
	},
	data () {
		return {
			xmlns: 'http://www.imsglobal.org/xsd/ims_qtiasiv1p2',
			assessmentIdent: getRandomIdent(),
			firstTime: true
		}
	},
	props: ['items'],
	mounted () {
	},
	updated () {
		
		this.firstTime = false
		let zip = new JSZip()
		const fileName = getRandomIdent()
		zip.folder( 'import' )
		zip.folder( `import/${ fileName }` )
		zip.file( `import/${ fileName }/${ fileName }.xml`, this.$el.outerHTML )
		zip.file( `import/${ fileName }/assessment_meta.xml`, getAssessmentMeta( fileName, this.getFilename(), this.assessmentIdent ) )
		zip.file( 'import/imsmanifest.xml', getIMSManifest( fileName ) )
		zip.generateAsync({type:"blob"})
			.then( ( content ) => {
				// see FileSaver.js
				saveAs( content, "import.zip");
		});
		// console.log( this.$el.outerHTML )
	},
	methods: {
		...mapGetters([
			'getFilename'
		])
	}
}
</script>