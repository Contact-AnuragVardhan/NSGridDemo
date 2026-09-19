<div onload="loadHandler();">
	<style>
		.filterContainer{
		  padding: 3px 5px;
		}
		.filter{
			display: table-cell;
		  vertical-align: middle;
		  padding-left: 5px;
		}
		.detail-con {
		    padding: 20px;
		    
		}
		
		.form-con {
			height: 100%;
		    display: flex;
		    align-items: center;
		    justify-content: center;
		}
		
		.form-inline {  
		  display: flex;
		  flex-flow: row wrap;
		  align-items: center;
		  width: 100%;
		  height: 100%;
    	  justify-content: center;
		}
		
		.form-inline label {
		  margin: 5px 10px 5px 0;
		}
		
		.form-inline input {
		  vertical-align: middle;
		  margin: 5px 10px 5px 0;
		  padding: 10px;
		  background-color: #fff;
		  border: 1px solid #ddd;
		}
		
		.form-inline button {
		  padding: 10px 20px;
		  background-color: dodgerblue;
		  border: 1px solid #ddd;
		  color: white;
		  cursor: pointer;
		}
		
		.form-inline button:hover {
		  background-color: royalblue;
		}
		
		@media (max-width: 800px) {
		  .form-inline input {
		    margin: 10px 0;
		  }
		  
		  .form-inline {
		    flex-direction: column;
		    align-items: stretch;
		  }
		}
		
		.loader {
		  border: 4px solid #f3f3f3;
		  border-radius: 50%;
		  border-top: 4px solid #3498db;
		  width: 40px;
		  height: 40px;
		  animation: spin 1s linear infinite;
		}
		
		@keyframes spin {
		  0% {
		    transform: rotate(0deg);
		  }
		  100% {
		    transform: rotate(360deg);
		  }
		}
		
		.hide {
			display: none;
		}

	</style>
	<!-- hierarchical,group,normal -->
	<!-- scroll,pages -->
	<!-- auto,manual -->
	<!-- stack,columnToggle -->
	<div id="dgDemo" style="width:100%;"></div>
	<!--  <ns-grid id="dgDemo" nsTitle="Data Grid Demo" type="hierarchical" renderInCachedMode="false" enableVirtualScroll="true" 
			 enablePagination="false" paginationType="scroll" paginationMode="auto" enableAsyncLoadPagination="false"
			 enableMouseHover="true" enableMultiSelection="true" childField="children" 
	         style="width:90%;height:500px;" groupByField="country,year" columnResizable="true" enableVariableRowHeight="true"
	         columnDraggable="true" pageSize="10" totalRecords="2000" rowHeight="171" leftFixedColumn="0" rightFixedColumn="0"
	         enableContextMenu="false" contextMenuProvider="contextMenuProvider" enableExport="true" enableResponsive="false" responsiveMode="stack">
	</ns-grid> -->
	<br/>
	<br/>
	<button type="button" onclick="expandAll();">Expand</button>
	<button type="button" onclick="collapseAll();">Collapse</button>
	
	<script>
	function ChildComponent() {
	  this.con = null;
	  this.item = null;
	}
	
	ChildComponent.prototype.init = function(params) {
		//console.log("here",params);
		this.con = document.createElement('div');
		this.con.classList.add("form-con");
		this.item = params.masterData;
		var container = params.container;
		//container.classList.add("detail-con");
		this.con.innerHTML = '<div class="loader"></div>\r\n' +
			  '<form class="form-inline hide">\r\n' +
			  '<label for="fname">Hierarchy:</label><br>\r\n' +
			  '<input type="text" id="hierarchy" name="hierarchy" value="' + this.item.hierarchy + '" required><br>\r\n' +
			  '<label for="lname">Employee:</label><br>\r\n' +
			  '<input type="text" id="employees" name="employees" value="' + this.item.employees + '" required><br><br>\r\n' +
			  '<button type="submit">Submit</button>\r\n' +
			'</form> ';
	};
	
	ChildComponent.prototype.getElement = function() {
	  	return this.con;
	};
	
	ChildComponent.prototype.elementAdded = function(params) {
		var form = this.con.querySelector("form");
		form.addEventListener("submit",this.__formSubmitHandler.bind(this));
		this.__showLoadingEffect();
	};
	
	//every second row which has children, detail(children) will be refreshed everytime the detail is expanded
	ChildComponent.prototype.renderEverytime = function(params) {
		if((params.rowIndex % 4) == 0) {
			return true;
		}
		return false;
	};
	//private function
	ChildComponent.prototype.__showLoadingEffect = function() {
		var self = this;
		setTimeout(function () {
			self.con.querySelector(".loader").classList.add("hide");
			self.con.querySelector(".form-inline").classList.remove("hide");
		}, 3000); // The loading effect will last for 3000 milliseconds (3 seconds)
	};
	
	ChildComponent.prototype.__formSubmitHandler = function(event) {
		event.preventDefault();
		var form = event.target;
		var parItem = nsGrid.getItemInfoByKeyField(this.item["id"]);
		parItem.item.hierarchy = form.hierarchy.value;
		parItem.item.employees = form.employees.value;
		nsGrid.updateItemInDataSource(parItem.item);
        nsGrid.updateRowByKeyField(parItem.item["id"]);
		return false;
	};
	
	
	var column = [
		      		{headerText:"Id",dataField:"id",width:"20%",sortable:true,sortDescending:true,draggable:false,resizable:true,minWidth:50,filterRenderer:window["filterRenderer"],priority:1},
		      		{headerText:"Country",dataField:"country",width:"15%",sortable:true,sortDescending:true,draggable:false,resizable:true,filterRenderer:window["filterRenderer"],priority:2},
		      		{headerText:"Hierarchy",dataField:"hierarchy",width:"20%",sortable:true,sortDescending:false,headerTruncateToFit:true,truncateToFit:true,priority:1},
		      		{headerText:"Year",dataField:"year",width:"20%",sortable:true,sortDescending:true,filterRenderer:window["filterRenderer"],priority:3},
		      		{headerText:"Employees",dataField:"employees",width:"20%",sortable:false,sortDescending:true,filterRenderer:window["filterRenderer"],priority:4},
		      		{headerText:"Date",dataField:"date",width:"20%",sortable:true,sortDescending:true,labelFunction:"dateLabelFunction",filterRenderer:window["filterRenderer"],priority:5}
		      	];
	var masterDetailSetting = {hasChildField:"hasChildren",detailRenderer: ChildComponent,detailRendererParam: {label:"Testing Code"},detailHeight: 100};
	var setting = {nsTitle:"Master Detail Grid Demo",type:"masterdetail", masterDetailSetting: masterDetailSetting,enableVirtualScroll:true,enableColumnSetting:true,
		 	   enableFilter:true,enableAdvancedFilter:true,rowKeyField:"id",enableVariableRowHeight:true,enableRowSelection: false,
	           enableExport:true,heightOffset:250,customClass:{nonFirstBodyColumn:"nonFirstGridBodyCell"}};
		
		
		var rowCount = 0;
		var nsGrid = null;
		var arrItems = [];
		window["loadMasterCustomDetailHandler"] = function ()
		{
			arrItems = []; 
			var dgDemo = document.getElementById("dgDemo");
			nsGrid = new NSGrid(dgDemo,setting);
			getDataSource(null,0,arrItems);
			nsGrid.setColumn(column);
			nsGrid.dataSource(arrItems);
		}
		
		window["getDataSource"] = function()
		{
			arrItems = [];
			var numChilds = 500;    
			for (var i = 0; i < numChilds; i++){
				var item = {id: rowCount, hierarchy: 'hierarchy ' + (rowCount+1).toString(), supervisor: null, country: 'US', employees: "Employee" + i, price: '10.90', year: '1985',date:new Date(2018, 11, i + 1),checked:true};
				item.hierarchy = 'hie ' + (rowCount + 1).toString();
				item.hasChildren = ((i % 2) === 0);
				arrItems.push(item);
				rowCount++;
			}
		};
	
		window["dateLabelFunction"] = function (item,dataField,colItem)
		{
			if(item && item[dataField])
			{
				var date = item[dataField];
				return ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
			}
			return "";
		}
	
		window["filterRenderer"] = function (colItem,colIndex)
		{
			var htmlText = "";
			if(colItem)
			{
				if(colItem["dataField"] === "date")
				{
					htmlText = "<div class='filterContainer'><input type='text' class='date filter' field='date' onchange='keyUpHandler(event)'/></div>";
					
				}
				else 
				{
					var field = colItem["dataField"];
					htmlText = "<div class='filterContainer'><input id='txt" + field + "' type='search' results='5' placeholder='Search " + field +"' +   field='" + field + "' class='filter' " +
								   " onkeyup='keyUpHandler(event)'/></div>";
				}
			}
			return htmlText;
		}
		
		window["themeChanged"] = function(theme)
		{
			nsGrid.setTheme(theme);
		}
		
		var timeout = null;
		window["keyUpHandler"] = function (event)
		{
			clearTimeout(timeout);
			timeout = setTimeout(function () {
					filterGrid();
			    }, 500);
		}
		
		window["filterGrid"] = function ()
		{
			var arrID = ["id","country","hierarchy","employees","year","date"];
			 //and condition
			 /*var filter = {};
			 var setting = {};
			 for(var count = 0;count < arrID.length ;count++)
			 {
				 var control = document.querySelector("#txt" + arrID[count]);
				 if(control && control.value)
				 {
					 var key = control.getAttribute("field");
					 if(key === "date")
					 {
						 filter[key] = filterDate;
						 setting[key] = {value:control.value};
					 }
					 else
					 {
						 filter[key] = control.value;
						 setting[key] = {caseSensitive:false,multiline:false,matchType:new NSFilter().CONTAINS};
					 } 
				 }
			 }
			 if(filter && Object.keys(filter).length > 0)
			 {
				 nsGrid.filter(filter,setting);
			 }
			 else
			 {
				 nsGrid.resetFilter();
			 }*/
			 //or condition
			 var filter = [];
			 var setting = {};
			 for(var count = 0;count < arrID.length ;count++)
			 {
				 var control = document.querySelector("#txt" + arrID[count]);
				 if(control && control.value)
				 {
					 var item = {};
					 var key = control.getAttribute("field");
					 if(key === "date")
					 {
						 item[key] = filterDate;
						 setting[key] = {value:control.value};
					 }
					 else
					 {
						 item[key] = control.value;
						 setting[key] = {caseSensitive:false,multiline:false,matchType:new NSFilter().CONTAINS};
					 } 
					 if(item)
					 {
						 filter.push(item);
					 }
				 }
			 }
			 if(filter && filter.length > 0)
			 {
				 nsGrid.filter(filter,setting);
			 }
			 else
			 {
				 nsGrid.resetFilter();
			 }
		}
		
		window["filterDate"] = function (item,setting)
		{
			if(item && setting && setting["value"])
			{
				var value = setting["value"];
				value = value.replace(/\\/g, "");
				var now = moment(item);
				if (moment(value).isAfter(now, 'day'))
				{
					return false;
				}
				return true;
			}
			return false;
		}
		
		window["returnAlphabets"] = function (alphabet,count)
		{
			var retValue = "";
			for(var innerCount= 1;innerCount < count;innerCount++)
			{
				retValue += alphabet;
			}
			return retValue;
		}
	
		window["setData"] = function (renderer,data,dataField,colItem,row)
		{
			if(renderer)
			{
				if(data)
				{
					renderer.rendererBody.chk.onchange = checkBox_changeHandler;
					renderer.rendererBody.chk.checked = data[dataField];
				}
				else
				{
					clearData(renderer);
				}
			}
		}
		
		window["clearData"] = function (renderer)
		{
			if(renderer)
			{
				renderer.rendererBody.chk.checked = false;
			}
		}
		
		window["checkBox_changeHandler"] = function (event) 
		{					
			var checked = event.target.checked ? "checked":"unchecked";
			event.target.data["hierarchy"] = event.target.data["hierarchy"] + "1"; 
			event.target.data["checked"] = checked;
		    alert(event.target.data["id"] + " is " + checked);
		    event.target.row.update();
		    event.stopImmediatePropagation();
		}
		
		window["expandAll"] = function ()
		{
			nsGrid.expandAll();
		}
		
		window["collapseAll"] = function ()
		{
			nsGrid.collapseAll();
		}
		
		//# sourceURL=masterCustomDetailGrid.js
	</script>
</div>