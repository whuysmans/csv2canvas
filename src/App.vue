<template>
	<div id="app">
		<h2>CSV to Canvas converter</h2>
		<h4>Export as csv with encoding utf-8. CSV filename becomes questionbank name. Do not forget the header! Excel format:</h4>
		<!-- <img src="./assets/csv-sample.png" alt="csv-sample" /> -->
		<table>
			<thead>
				<tr>
					<th>type</th>
					<th>question</th>
					<th>points</th>
					<th>correct</th>
					<th>ans1</th>
					<th>ans2</th>
					<th>ans3</th>
					<th>ans4</th>
					<th>ans5</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>MC</td>
					<td>Wie schreef Misdaad en Straf?</td>
					<td>1</td>
					<td>ans1</td>
					<td>Dostojewski</td>
					<td>Poetin</td>
					<td>Belarus</td>
					<td>Gogol</td>
					<td></td>
				</tr>
				<tr>
					<td>MC</td>
					<td>Welke Amerikaanse president werd niet vermoord?</td>
					<td>1</td>
					<td>ans2</td>
					<td>Lincoln</td>
					<td>Johnson</td>
					<td>Garfield</td>
					<td>Kennedy</td>
					<td></td>
				</tr>
				<tr>
					<td>MR</td>
					<td>Welke steden liggen in Noord-Amerika?</td>
					<td>1</td>
					<td>ans2 ans3 ans4</td>
					<td>Bogota</td>
					<td>Denver</td>
					<td>Oklahoma</td>
					<td>Paris</td>
					<td>Riga</td>
				</tr>
				<tr>
					<td>FIB</td>
					<td>De inverse van een afgeleide is...</td>
					<td>1</td>
					<td></td>
					<td>de integraal</td>
					<td>een integraal</td>
					<td>integraal</td>
					<td></td>
					<td></td>
				</tr>
				<tr>
					<td>MFIB</td>
					<td>De 2de grootste stad van Italië is [stad1] en de 3de [stad2].</td>
					<td>1</td>
					<td></td>
					<td>Milaan</td>
					<td></td>
					<td>Napels</td>
					<td>Napoli</td>
					<td></td>
				</tr>	
			</tbody>
		</table>
		<div class="uploader">
			<p>Make sure that you include the header row, all in lowercase. The question types MC, FIB, etc. should be all capital letters.</p>
			<p><a href="https://docs.google.com/spreadsheets/d/17PBwCYCCimmAdLunbslrw9U2x5PFOToElQohmwgSByQ/edit?usp=sharing" target="_blank">Here you can download a sample Excel sheet.</a></p>
			<label class="text-reader">
				<input type="file" id="fileInput" @change.prevent="handleUpload" class="btn btn-primary" accept=".csv">
			</label>
		</div>
		<assessment v-show="false" :items="items" ref="assessment" />
	</div>
</template>

<script>
import Assessment from './components/Assessment'
import Papa from 'papaparse'
import { createItems } from './utils/csv'
import { mapActions } from 'vuex'

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
			this.setFilename( file.name.slice(0, -4) )
			reader.readAsText( file )
			reader.onload = ( event ) => {
				console.log( event )
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
		},
		...mapActions([
			'setFilename'
		])
	}
}
</script>

<style>
html,body,* { box-sizing: border-box; font-size: 16px;}
html,body   { height: 100%; text-align: center;}
body        { padding: 2rem; background: #f8f8f8;}

table {
	table-layout: auto;
	width: 90%;
	border: 1px solid #5f6982;
	border-spacing: 5px 1rem;
	margin-bottom: 20px;
	margin-left: 5%;
	margin-right: 5%;
}

h2 {
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  line-height: 1;
  color: #454cad;
  margin-bottom: 0;
}
p {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #5f6982;
}
// Upload Demo
// 
.uploader {
  display: block;
  clear: both;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;

  label {
    float: left;
    clear: both;
    width: 100%;
    padding: 2rem 1.5rem;
    text-align: center;
    background: #fff;
    border-radius: 7px;
    border: 3px solid #eee;
    transition: all .2s ease;
    user-select: none;

    &:hover {
      border-color: #454cad;
    }
    &.hover {
      border: 3px solid #454cad;
      box-shadow: inset 0 0 0 6px #eee;
    }
  }

  #file-image {
    display: inline;
    margin: 0 auto .5rem auto;
    width: auto;
    height: auto;
    max-width: 180px;
    &.hidden {
      display: none;
    }
  }
  
  #notimage {
    display: block;
    float: left;
    clear: both;
    width: 100%;
    &.hidden {
      display: none;
    }
  }

  input[type="file"] {
    display: none;
  }

  div {
    margin: 0 0 .5rem 0;
    color: #5f6982;
  }
  .btn {
    display: inline-block;
    margin: .5rem .5rem 1rem .5rem;
    clear: both;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    text-transform: initial;
    border: none;
    border-radius: .2rem;
    outline: none;
    padding: 0 1rem;
    height: 36px;
    line-height: 36px;
    color: #fff;
    transition: all 0.2s ease-in-out;
    box-sizing: border-box;
    background: #454cad;
    border-color: #454cad;
    cursor: pointer;
  }
}
</style>