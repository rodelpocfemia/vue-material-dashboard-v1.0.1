<!-- xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com -->
<template>
<div class="content">
	<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
		<div class="row"><div class="col-xs-12">
			<form class="form-inline">
				<div class="form-group">
					<upload-btn
						id="file"
						title="Upload"
						color="green"
						class="white--text" 
						:fileChangedCallback="_fileChanged"
						>
						<template slot="icon">
							<v-icon right dark>cloud_upload</v-icon>
						</template>
					</upload-btn>
				</div>
			</form>
		</div></div>
		<div class="row"><div class="col-xs-12">
			<md-button :disabled="data.length ? false : true" class="md-success" @click="_export">Export</md-button>
		</div></div>
		<div class="row"><div class="col-xs-12">
			<div class="table-responsive">
				<table class="table table-striped">
					<thead><tr>
						<th v-for="c in cols" :key="c.key">{{c.name}}</th>
					</tr></thead>
					<tbody>
						<tr v-for="(r, key) in data" :key="key">
							<td v-for="c in cols" :key="c.key"> {{ r[c.key] }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div></div>
	</div>
</div>
</template>

<script>
import XLSX from 'xlsx'
import UploadButton from 'vuetify-upload-button'

const make_cols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x,i) => ({name:XLSX.utils.encode_col(i), key:i}));

const _SheetJSFT = [
	"xlsx", "xlsb", "xlsm", "xls", "xml", "csv", "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");

export default {
	data() {
		return {
			data: ["SheetJS".split(""), "1234567".split("")],
			cols: [
				{name:"A", key:0},
				{name:"B", key:1},
				{name:"C", key:2},
				{name:"D", key:3},
				{name:"E", key:4},
				{name:"F", key:5},
				{name:"G", key:6},
			],
			SheetJSFT: _SheetJSFT,
			loader: null,
			loading: false,
			loading2: false,
			loading3: false,
			loading4: false
	}; },
	methods: {
		_fileChanged (file) {
			this._file(file);
		},
		_suppress(evt) { evt.stopPropagation(); evt.preventDefault(); },
		_drop(evt) {
			evt.stopPropagation(); evt.preventDefault();
			const files = evt.dataTransfer.files;
			if(files && files[0]) this._file(files[0]);
		},
		_change(evt) {
			const files = evt.target.files;
			if(files && files[0]) this._file(files[0]);
		},
		_export(evt) {
			/* convert state to workbook */
			const ws = XLSX.utils.aoa_to_sheet(this.data);
			const wb = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
			/* generate file and send to client */
			XLSX.writeFile(wb, "sheetjs.xlsx");
		},
		_file(file) {
			/* Boilerplate to set up FileReader */
			const reader = new FileReader();
			reader.onload = (e) => {
				/* Parse data */
				const bstr = e.target.result;
				const wb = XLSX.read(bstr, {type:'binary'});
				/* Get first worksheet */
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
				const data = XLSX.utils.sheet_to_json(ws, {header:1});

				/* Update state */
				this.data = data;
				this.cols = make_cols(ws['!ref']);

				//console.log(JSON.stringify(this.data))
				this._convertToJson(JSON.stringify(this.data))
				//console.log(this.data)				
			};
			reader.readAsBinaryString(file);		
				
		},
		_convertToJson(data)
		{
			//console.log(data);
			var arr = JSON.parse(data)			
			var labels = arr[0]
			
			var output = arr.slice(1).map(item => item.reduce((obj, val, index) => {
			obj[labels[index]] = val
			return obj
			}, {}))
			
			console.log(JSON.stringify(output))
		}
	},
	components: {
      'upload-btn': UploadButton
	}
};
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>