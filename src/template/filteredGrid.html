<div>
	<!-- hierarchical,group,normal -->
	<!-- scroll,pages -->
	<!-- auto,manual -->
	<!-- stack,columnToggle -->
	<div id="dgDemo">
	</div> 
	<br/>
	<br/>
	<script>
		var nsGrid = null;
		var arrItems = [];
		window["loadFilteredHandler"] = function ()
		{
			var column = [
				      		{headerText:"Id",dataField:"id",width:"200px",sortable:true,sortDescending:true,draggable:false,resizable:true,minWidth:50,priority:1,showMenu:true,
				      		 filter:{advancedFilterType:"number"},extraRowHeaderRenderer:"extraRowHeaderRenderer"},
				      		{headerText:"Country",dataField:"country",width:"200px",sortable:true,sortDescending:true,draggable:false,resizable:true,priority:2,showMenu:true,
				      					filter:{enableAdvancedFilter:true},autoSize:false},
				      		{headerText:"DOJ",dataField:"doj",width:"200px",sortable:true,sortDescending:true,priority:5,
					      			showMenu:true,filter:{type:NSGrid.FILTER_TYPE_DATE,advancedFilterType:NSGrid.ADVANCED_FILTER_DATE,
					      				config:{dateOutputFormat:"yyyy-MM-dd",cellFormat:["yyyy-MM-dd","yyyy-M-dd","yyyy-M-d","yyyy-MM-d"]}}},
				      		{headerText:"Employees",dataField:"employees",width:"200px",sortable:false,sortDescending:true,headerTruncateToFit:true,
				      			      	truncateToFit:true,toolTipRenderer:"employeeToolTipRenderer",priority:4,showMenu:true,
				      			      	filter:{advancedFilterType:"list"}},//toolTipRenderer:employeeToolTipRenderer
				      		{headerText:"Price",dataField:"price",toolTipField:"price",width:"200px",sortable:true,sortDescending:true,priority:5
					      					,showMenu:true,itemRenderer:"priceItemRenderer",enableFilter:false},
				      		{headerText:"Hierarchy",dataField:"hierarchy",width:"200px",sortable:true,sortDescending:false,priority:1,showMenu:true,
				      					filter:{enableAdvancedFilter:true,advancedFilterType:"list"},multiSelectionEditor:NSGrid.MULTI_SELECTION_EDITORS_TEXTAREA},
				      		{headerText:"Date",dataField:"date",width:"200px",sortable:true,sortDescending:true,labelFunction:"dateLabelFunction",priority:5,
				      					showMenu:true,filter:{type:NSGrid.FILTER_TYPE_DATE,advancedFilterType:NSGrid.ADVANCED_FILTER_DATE}},
				      		{headerText:"Year",dataField:"year",width:"200px",sortable:true,sortDescending:true,priority:3,showMenu:true,
				      						filter:{advancedFilterType:"number"},extraRowHeaderRenderer:"extraRowHeaderRenderer"},
				      	];
			var setting = {nsTitle:"Flat Grid Demo",type:"",enableFilter:true,enableAdvancedFilter:true,rowKeyField:"id",columnResizable:true,
					           columnDraggable:true,totalRecords:600,enableExport:true,enableResponsive:true,responsiveMode:"stack",
					           heightOffset:250,customClass:{bodyCell:""},theme:"White",columnAutoSize:true};
			
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
		        item["doj"] = date.getFullYear() + "-" + (date.getMonth() + 1) + '-' + date.getDate();
				arrItems.push(item);
			}
			nsGrid.setColumn(column);
			var util = nsGrid.util;
			var localStorageUtil = new util.localStorage();
			var state = localStorageUtil.getData("nsGrid");
			nsGrid.setGridState(state);
			nsGrid.dataSource(arrItems);
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
	
		window["generateRandomNumbers"] = function()
		{
			return Math.floor(Math.random() * 90 + 10);
		}
		
		window["updatePrices"] = function()
		{
			for(var count = 0;count < 45;count++)
			{
				var price = window["generateRandomNumbers"]();
				nsGrid.getItemInfo(count)["item"]["price"] = price;
				nsGrid.updateCellByIndex(count,"price");
			}
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
		
		//# sourceURL=filteredGrid.js
	</script>
</div>