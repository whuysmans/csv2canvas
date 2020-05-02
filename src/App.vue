<template>
	<div id="app">
		<label class="text-reader">
			<input type="file" id="fileInput" @change.prevent="handleUpload">
		</label>
		<assessment v-show="false" :items="items" ref="assessment" />
	</div>
</template>

<script>
import Assessment from './components/Assessment'
import Papa from 'papaparse'
import { createItems } from './utils/csv'

export default {
	name: 'App',
	components: {
		'assessment': Assessment
	},
	data () {
		return {
			json: '',
			items: null
		}
	},
	computed: {
	},
	methods: {
		handleUpload( e ) {
			const reader = new FileReader()
			const file = e.target.files[0]
			reader.readAsText( file )
			reader.onload = ( event ) => {
				this.getCSVData( event.target.result )
			}
			reader.onerror = ( e ) => {
				console.log( e )
			}
		},
		getCSVData ( file ) {
			Papa.parse( file, {
				header: true,
				complete: ( results ) => {
					this.json = results
					this.items = createItems( results.data )
				},
				error: function ( error ) {
					console.log( error )
				}
			} )
		}
	}
}
</script>