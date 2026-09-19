<div>
	<!-- hierarchical,group,normal -->
	<!-- scroll,pages -->
	<!-- auto,manual -->
	<!-- stack,columnToggle -->
	<div id="dgDemo">
	</div> 
	<br/>
	<br/>
	<button type="button" onclick="showHideLoader();">Show/Hide Loader</button>
	<button type="button" onclick="dataSourceRefreshHandler();">Change DataSource</button>
	<button type="button" onclick="columnRefreshHandler();">Change Column</button>
	<button type="button" onclick="addColumn();">Add Column</button>
	<button type="button" onclick="hideColumn();">Remove Column</button>
	<button type="button" onclick="swapColumns();">Swap Column</button>
	<button type="button" onclick="moveColumn();">Move Column</button>
	<button type="button" onclick="sort();">Sort</button>
	<button type="button" onclick="changeFontSize();">Change Font Size</button>
	<button type="button" onclick="saveState();">Save State</button>
	<button type="button" onclick="resetState();">Reset State</button>
	<button type="button" onclick="selectRows();">Select Rows</button>
	<button type="button" onclick="fixedLeftColumn();">Fixed Left Column</button>
	<button type="button" onclick="fixedColumn();">Fixed Column</button>
	<br/>
	<br/>
	<script>
		var column = [
		      		{headerText:"Id",dataField:"id",width:"200px",sortable:true,sortDescending:true,draggable:false,resizable:true,minWidth:50,priority:1,showMenu:true,
		      		 filter:{advancedFilterType:"number"},extraRowHeaderRenderer:"extraRowHeaderRenderer"},
		      		{headerText:"Country",dataField:"country",width:"200px",sortable:true,sortDescending:true,draggable:false,resizable:true,priority:2,showMenu:true,
		      					filter:{enableAdvancedFilter:true},autoSize:false},
		      		{headerText:"Employees",dataField:"employees",width:"200px",sortable:false,sortDescending:true,headerTruncateToFit:true,
		      			      	truncateToFit:true,toolTipRenderer:"employeeToolTipRenderer",priority:4,showMenu:true,
		      			      	filter:{advancedFilterType:"list"}},//toolTipRenderer:employeeToolTipRenderer
		      		{headerText:"Price",dataField:"price",toolTipField:"price",width:"200px",sortable:true,sortDescending:true,priority:5
			      					,showMenu:true,itemRenderer:"priceItemRenderer",enableFilter:false},
		      		{headerText:"Hierarchy",dataField:"hierarchy",width:"200px",sortable:true,sortDescending:false,priority:1,showMenu:true,
		      					filter:{enableAdvancedFilter:true,advancedFilterType:"list"},multiSelectionEditor:NSGrid.MULTI_SELECTION_EDITORS_TEXTAREA},
		      		{headerText:"Year",dataField:"year",width:"200px",sortable:true,sortDescending:true,priority:3,showMenu:true,
		      						filter:{advancedFilterType:"number"},extraRowHeaderRenderer:"extraRowHeaderRenderer"},
		      		{headerText:"Date",dataField:"date",width:"200px",sortable:true,sortDescending:true,labelFunction:"dateLabelFunction",priority:5,showMenu:true}
		      	];
		var multiCellSelectionSetting = {scrollableElement:null,enableFillHandle:false,enableKeyboardNavigation:true,enableCopy:true,enablePaste:true,cellClass:null,areaClass:null};
		var setting = {nsTitle:"Grid With Extra Header Demo",type:"",renderInCachedMode:false,enableVirtualScroll:false,enableDataRefreshOnScrollEnd:false,dataRefreshfireDelay:100, 
					   enableMouseHover:false,enableColumnMouseHover:false,headerExtraRowCount:1,enableFilter:true,enableAdvancedFilter:true,enablePagination:false,paginationType:"scroll",enableAsyncLoadPagination:false, 
				 	   paginationMode:"auto",enableMultipleSelection:false,childField:"children",rowKeyField:"id",
			           customScrollerRequired:false,groupByField:"country,year",columnResizable:true,enableVariableRowHeight:true,
			           columnDraggable:true,pageSize:100,fetchRecordCallBack:"addRows",totalRecords:600,rowHeight:30,leftFixedColumn:0,rightFixedColumn:1,
			           enableFixedColumnAnimation:false,enableRowMove:false,isSameTableMove:false,rowMoverDropEndHandler:"rowDropEndHandler",
			           enableContextMenu:false,contextMenuProvider:"contextMenuProvider",enableExport:true,enableResponsive:true,responsiveMode:"stack",
			           heightOffset:250,customClass:{bodyCell:""},theme:"White",enableCellSelection:false,enableRowSelection:false,columnAutoSize:true,
			           enableMultiCellSelection:true,multiCellSelectionSetting:multiCellSelectionSetting,enableColumnSetting:true};
		var nsGrid = null;
		var arrItems = [];
		window["loadGridWithExtraHeaderRows"] = function ()
		{
			var dgDemo = document.getElementById("dgDemo");
			nsGrid = new NSGrid(dgDemo,setting);
			arrItems = [];
			var item = {};
			//var dgDemoDest = document.getElementById("dgDemoDest");
			var totalRecords = parseInt(nsGrid.getAttribute("totalRecords"));
			if(nsGrid.getAttribute("enablePagination") === "true" && nsGrid.getAttribute("paginationMode") === "manual")
			{
				totalRecords = 250;
			}
			for(var count = 0;count < totalRecords;count++)
			{
				item = {id: count, hierarchy: 'Hierarchy ' + count, supervisor: "Supervisor " + count, country: 'UK', employees: "EmployeesEmployeesEmployees" + count, price: (10 * count), year: 1985 + count,checked:false};
				if((count % 2) === 0)
				{
					item["country"] = "US";
				}
				var date = new Date();
		        date.setFullYear(2015, Math.floor(Math.random() * 12), Math.floor(Math.random() * 27));
		        date.setHours(Math.floor(Math.random()*23), Math.floor(Math.random()*59), Math.floor(Math.random()*59), 0);
		        item["date"] = date;
				arrItems.push(item);
			}
			nsGrid.setColumn(column);
			var util = nsGrid.util;
			var localStorageUtil = new util.localStorage();
			var state = localStorageUtil.getData("nsGrid");
			nsGrid.setGridState(state);
			nsGrid.dataSource(arrItems);
			nsGrid.util.addEvent(dgDemo,NSGrid.ROW_SELECTED,itemSelectHandler);
			nsGrid.util.addEvent(dgDemo,NSGrid.ROW_UNSELECTED,itemUnSelectHandler);
			nsGrid.util.addEvent(dgDemo,NSGrid.ROW_CLICKED,itemClickHandler);
			nsGrid.fixFixedHeader();
			window["updatePrices"]();
		}
	
		window["dateLabelFunction"] = function (item,dataField,colItem)
		{
			if(item && item[dataField])
			{
				var date = item[dataField];
				return ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
			}
			return "";
		}
		
		window["employeeToolTipRenderer"] = function (item,dataField)
		{
			if(item && item[dataField])
			{
				return "<span>" + item[dataField] + "</span>";// );
			}
			return null;
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
		
		window["extraRowHeaderRenderer"] = function(dataField,colItem,source,rowIndex,colIndex,cell,row)
		{
			var total = 0;
			if(source && source.length > 0)
			{
				var item = {};
				for(var count = 0;count < source.length;count++)
				{
					item = source[count];
					total += item[dataField];
				}
			}
			var htmlText = "" + total;
			return htmlText;
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
			 var dgDemo = document.getElementById("dgDemo");
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
				 dgDemo.filter(filter,setting);
			 }
			 else
			 {
				 dgDemo.resetFilter();
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
		
		window["itemRenderer"] = function (data,dataField,rowIndex,columnIndex,row)
		{
			/*var selected = data[dataField];
			//row.update();
			if(selected)
			{
				return '<input type="checkbox" checked>';
			}
			else
			{
				return '<input type="checkbox">';
			}*/
			if(data["checked"])
			{
				return "<a href=# class='purple' onclick='anchorClick(event," + rowIndex +"," + data["id"] +")'>" + returnAlphabets("a",rowIndex + 1) + "</a>";
			}
			else
			{
				return "<a href=# onclick='anchorClick(event," + rowIndex +"," + data["id"] +")'>" + returnAlphabets("a",rowIndex + 1) + "</a>";
			}
			/*if(data["checked"])
			{
				return "<a href=# class='purple' onclick='anchorClick(event," + rowIndex +"," + data["id"] +")'>" + "Visit W3Schools.com!" + "</a>";
			}
			else
			{
				return "<a href=# onclick='anchorClick(event," + rowIndex +"," + data["id"] +")'>" + "Visit W3Schools.com!" + "</a>";
			}*/
			
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
		
		window["anchorClick"] = function (event,rowIndex,keyValue)
		{
			//alert(rowIndex);
			 var objItem = nsGrid.getItemInfo(event);
			 objItem["item"]["checked"] = true;
			 nsGrid.updateCellByIndex(rowIndex,"checked");
			 //nsGrid.updateCellByKeyField(keyValue,"checked");
			 //nsGrid.updateRowByKeyField(keyValue);
			 console.log(objItem.rowIndex + "," + rowIndex);
			 event.preventDefault();
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
		
		window["moveColumn"] = function ()
		{
			nsGrid.moveColumn(4,1);
		}
		
		window["saveState"] = function ()
		{
			var state = nsGrid.getGridState();
			var util = nsGrid.util;
			var localStorageUtil = new util.localStorage();
			localStorageUtil.setData("nsGrid",state);
		}
		
		window["resetState"] = function ()
		{
			var util = nsGrid.util;
			var localStorageUtil = new util.localStorage();
			localStorageUtil.removeData("nsGrid");
		}
		
		window["selectRows"] = function ()
		{
			nsGrid.setSelectedIndexes([3,4,5]);
		}
		
		window["sort"] = function ()
		{
			nsGrid.sortBy("year");
		}
		
		window["addRows"] = function (fromRecord,toRecord,pageSize)
		{
			console.log("In addRows with fromRecord::" + fromRecord + ",toRecord::" + toRecord + ",pageSize::" + pageSize);
			var arrItems = [];
			var item = null;
			for(var count = fromRecord;count <= toRecord;count++)
			{
				item = {id: count, hierarchy: 'Hierarchy ' + count, supervisor: "Supervisor " + count, country: 'UK', employees: "Employees " + count, price: (10 * count), year: 1985 + count,checked:false};
				arrItems.push(item);
			}
			nsGrid.addRows(arrItems);
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
		
		window["menuClickHandler"] = function (target,item)
		{
			if(item)
			{
				console.log("Menu with text " + item.title + " was selected for Target " + target.nodeName + " with text as "  + target.innerHTML);			
			}
		}
		//https://github.com/NeXTs/Clusterize.js/blob/master/clusterize.js
		window["itemSelectHandler"] = function (event)
		{
			console.log("Item Selected with details::" + event.detail + " with hierarchy " + event.detail.hierarchy);
			//console.log("Item Selected with details::" + event.detail + " with index " + event.index);
		}
		
		window["itemUnSelectHandler"] = function (event)
		{
			console.log("Item Unselected with details::" + event.detail  + " with hierarchy " + event.detail.hierarchy);
		}
		
		window["itemClickHandler"] = function (event)
		{
			console.log("Row Clicked with details::" + event.detail + " with hierarchy " + event.detail.hierarchy);
			//console.log("Item Selected with details::" + event.detail + " with index " + event.index);
		}
		
		window["fixedLeftColumn"] = function (event)
		{
			setting["leftFixedColumn"] = 1;
			var dgDemo = document.getElementById("dgDemo");
			dgDemo.innerHTML = "";
			window["loadFlatHandler"]();
			nsGrid.fixFixedHeader();
		}
		
		window["fixedColumn"] = function (event)
		{
			setting["rightFixedColumn"] = 1;
			setting["leftFixedColumn"] = 1;
			var dgDemo = document.getElementById("dgDemo");
			dgDemo.innerHTML = "";
			window["loadFlatHandler"]();
			nsGrid.fixFixedHeader();
			/*nsGrid = new NSGrid(dgDemo,setting);
			nsGrid.dataSource(arrItems,true);*/
		}
		
		window["generateRandomNumbers"] = function()
		{
			return Math.floor(Math.random() * 90 + 10);
		}
		
		var priceInterval = null;
		window["updatePrices"] = function()
		{
			clearInterval(priceInterval);
			for(var count = 0;count < 45;count++)
			{
				var price = window["generateRandomNumbers"]();
				nsGrid.getItemInfo(count)["item"]["price"] = price;
				nsGrid.updateCellByIndex(count,"price");
			}
			priceInterval = setInterval(window["updatePrices"], 1000);
		}
		
		window["priceItemRenderer"] = function(data,dataField,rowIndex,columnIndex,row)
		{
			var div = document.createElement("DIV"); 
			var text = "";
			if(data)
			{
				text = data[dataField] ? data[dataField] : "";
				if(text && text != "")
				{
					div.appendChild(document.createTextNode(text));
				}
				div.style.textAlign = "center";
				div.style.backgroundColor = "";
				if(parseInt(text) > 40 && parseInt(text) < 70)
				{
					div.style.backgroundColor = "#FF9900";
				}
				else if(parseInt(text) >= 70 && parseInt(text) < 100)
				{
					div.style.backgroundColor = "#FF0000";
				}
				else
				{
					div.style.backgroundColor = "#00FF00";
				}
			}
			return div;
		};
		
		window["themeChanged"] = function(theme)
		{
			nsGrid.setTheme(theme);
		}
		
		//# sourceURL=gridWithExtraHeaderRows.js
	</script>
</div>