<div onload="loadHandler();">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
	<style>
		.filterContainer{
		  padding: 3px 5px;
		}
		.filter{
			display: table-cell;
		  vertical-align: middle;
		  padding-left: 5px;
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
	<button type="button" onclick="showHideLoader();">Show/Hide Loader</button>
	<button type="button" onclick="dataSourceRefreshHandler();">Change DataSource</button>
	<button type="button" onclick="columnRefreshHandler();">Change Column</button>
	<button type="button" onclick="addColumn();">Add Column</button>
	<button type="button" onclick="hideColumn();">Remove Column</button>
	<button type="button" onclick="swapColumns();">Swap Column</button>
	<button type="button" onclick="expandAll();">Expand</button>
	<button type="button" onclick="collapseAll();">Collapse</button>
	<button type="button" onclick="sort();">Sort</button>
	<button type="button" onclick="changeFontSize();">Change Font Size</button>
	
	<script>
	var column = [
		      		{headerText:"Id",dataField:"id",width:"20%",sortable:true,sortDescending:true,draggable:false,resizable:true,minWidth:50,showMenu:true,filterRenderer:window["filterRenderer"],priority:1},
		      		{headerText:"Country",dataField:"country",width:"15%",sortable:true,sortDescending:true,draggable:false,resizable:true,showMenu:true,filterRenderer:window["filterRenderer"],priority:2},
		      		{headerText:"Hierarchy",dataField:"hierarchy",width:"20%",sortable:true,sortDescending:false,headerTruncateToFit:true,showMenu:true,truncateToFit:true,priority:1},
		      		{headerText:"Year",dataField:"year",width:"20%",sortable:true,sortDescending:true,showMenu:true,filterRenderer:window["filterRenderer"],priority:3},
		      		{headerText:"Employees",dataField:"employees",width:"20%",sortable:false,sortDescending:true,showMenu:true,filterRenderer:window["filterRenderer"],priority:4},
		      		{headerText:"Date",dataField:"date",width:"20%",sortable:true,sortDescending:true,showMenu:true,labelFunction:"dateLabelFunction",filterRenderer:window["filterRenderer"],priority:5}
		      	];
	var  icons = {
			menu: '<i class="fa fa-bars" aria-hidden="true" />',
	        filter: '<i class="fa fa-filter" aria-hidden="true" />',
	        sortAscending: '<i class="fa fa-long-arrow-down" aria-hidden="true" />',
	        sortDescending: '<i class="fa fa-long-arrow-up" aria-hidden="true" />',
	        exportButton: '<i class="fa fa-file-excel-o" aria-hidden="true" />',
	        columnMove: '<i class="fa fa-arrows" aria-hidden="true" />',
	        rowExpanded: '<i class="fa fa-arrow-circle-down" aria-hidden="true" />',
	        rowCollapsed: '<i class="fa fa-arrow-circle-right" aria-hidden="true" />'
    };
	var setting = {nsTitle:"Hierarchical Grid Demo",type:"hierarchical",enableVirtualScroll:true,
		 	   enableFilter:true,enableAdvancedFilter:true,enableMouseHover:true,enableMultipleSelection:true,
		 	   childField:"children",rowKeyField:"id",columnResizable:true,enableVariableRowHeight:false,
	           columnDraggable:true,rowHeight:22,leftFixedColumn:0,rightFixedColumn:0,
	           enableExport:true,enableResponsive:true,responsiveMode:"stack",enableMultiSort:true,
	           heightOffset:250,customClass:{nonFirstBodyColumn:"nonFirstGridBodyCell"},icons: icons};
		
		var numRows = 10000;
		var numLevels = 2;
		
		var rowCount = 0;
		var nsGrid = null;
		var arrItems = [];
		window["loadCustomIconsHandler"] = function ()
		{
			arrItems = []; 
			var dgDemo = document.getElementById("dgDemo");
			nsGrid = new NSGrid(dgDemo,setting);
			getDataSource(null,0,arrItems);
			nsGrid.setColumn(column);
			nsGrid.dataSource(arrItems);
				
			nsGrid.util.addEvent(dgDemo,NSGrid.ROW_SELECTED,itemSelectHandler);
			nsGrid.util.addEvent(dgDemo,NSGrid.ROW_UNSELECTED,itemUnSelectHandler);
		}
		
		window["getDataSource"] = function (parentRow, level,arrItems)
		{
			if (level > numLevels)
				return;
				
			var numChilds = getRandomNumber(level);    
			for (var i = 0; i < numChilds; i++){
				if (rowCount < numRows)
				{
					var item = {id: rowCount, hierarchy: 'hierarchy ' + (rowCount+1).toString(), supervisor: null, country: 'US', employees: null, price: '10.90', year: '1985',checked:true};
					if(level === 1)
					{
						item.hierarchy = 'hie ' + (rowCount+1).toString()
					}
					if(level === 2)
					{
						item.hierarchy = 'hier ' + (rowCount+1).toString()
					}
					if(parentRow)
					{
						if(!parentRow["children"])
						{
							parentRow["children"] = [];
						}
						parentRow["children"].push(item);
					}
					else
					{
						arrItems.push(item);
					}
					rowCount++;
					getDataSource(item, level + 1,arrItems);
				}
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
		
		
		var numRows = 50;
		var numLevels = 2;
		
		var rowCount = 0;
	    
		window["getRandomNumber"] = function (level){
			var nCount = 1 + Math.floor(Math.random() * 10);
			
			if (level === 0)
			{
				if (numLevels == 0)
					nCount = numRows;
				else
				{
					var derivative = 1;
					for (var k = 1; k <= numLevels; k++)
						derivative = (derivative * nCount) + 1;

					nCount = numRows / derivative + 1;
					if (nCount < 1000)
						nCount = 1000;
				}
			}
			
			return nCount;
		}

		
		
		var showingLoader = false;
		window["showHideLoader"] = function ()
		{
			if(showingLoader)
			{
				nsGrid.hideLoader();
			}
			else
			{
				nsGrid.showLoader();
			}
			showingLoader = !showingLoader;
		}
		
		window["dataSourceRefreshHandler"] = function ()
		{
			nsGrid.dataSource(arrItems);
		}
		
		window["columnRefreshHandler"] = function ()
		{
			nsGrid.setColumn(column);
			dataSourceRefreshHandler();
		}
		
		window["changeFontSize"] = function ()
		{
			nsGrid.setFontSize("14px");
		}
		
		var isReflowView = false;
		window["changeGridView"] = function ()
		{
			isReflowView = !isReflowView;
			nsGrid.changeDeviceView(isReflowView);
		}
		
		window["addColumn"] = function ()
		{
			var column = {};
			column.headerText = "Price";
			column.dataField = "price";
			column.width = "100px";
			column.sortable = true;
			column.sortDescending = true;
			
			nsGrid.addColumn(column);
			
		}
		
		window["hideColumn"] = function ()
		{
			nsGrid.hideColumn("country");
		}
		
		window["swapColumns"] = function ()
		{
			nsGrid.swapColumns(3,4);
		}
		
		window["expandAll"] = function ()
		{
			nsGrid.expandAll();
		}
		
		window["collapseAll"] = function ()
		{
			nsGrid.collapseAll();
		}
		
		window["sort"] = function ()
		{
			nsGrid.sortBy("year");
		}
		
		window["contextMenuProvider"] = function (item,columnIndex,rowIndex)
		{
			console.log(item + "," + columnIndex + "," + rowIndex);
			var index = columnIndex + rowIndex;
			var source = [];
			for(var count = index;count < index + 5;count++)
			{
				source.push({title: 'Menu ' + count,iconHTML: '<i class="fa fa-folder-open"></i>',handler: menuClickHandler});
			}
			return source;
		}
		
		window["menuClickHandler"] = function(target,item)
		{
			if(item)
			{
				console.log("Menu with text " + item.title + " was selected for Target " + target.nodeName + " with text as "  + target.innerHTML);			
			}
		}
		//https://github.com/NeXTs/Clusterize.js/blob/master/clusterize.js
		window["itemSelectHandler"] = function(event)
		{
			console.log("Item Selected with details::" + event.detail + " with hierarchy " + event.detail.hierarchy);
			//console.log("Item Selected with details::" + event.detail + " with index " + event.index);
		}
		
		window["itemUnSelectHandler"] = function(event)
		{
			console.log("Item Unselected with details::" + event.detail  + " with hierarchy " + event.detail.hierarchy);
		}
		//# sourceURL=customIconsGrid.js
	</script>
</div>