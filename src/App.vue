<template>
	<div id="app">
		<h2>CSV to Canvas converter</h2>
		<h4>csv format:</h4>
		<img src="./assets/csv-sample.png" alt="csv-sample" />
		<div class="uploader">
			<label class="text-reader">
				<input type="file" id="fileInput" @change.prevent="handleUpload" class="btn btn-primary">
			</label>
		</div>
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

<style>
html,body,* { box-sizing: border-box; font-size: 16px;}
html,body   { height: 100%; text-align: center;}
body        { padding: 2rem; background: #f8f8f8;}

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