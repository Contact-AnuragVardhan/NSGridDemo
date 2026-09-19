<div>
	<!-- hierarchical,group,normal -->
	<!-- scroll,pages -->
	<!-- auto,manual -->
	<!-- stack,columnToggle -->
	<div id="dgDemo">
	</div> 
	<br/>
	<br/>
	<br/>
	<script>
		var column = [
		      		{headerText:"Id",dataField:"id",width:"200px",sortable:true,sortDescending:true,draggable:true,resizable:true,minWidth:50,priority:1,showMenu:true,
		      		 filter:{advancedFilterType:"number"},footerRenderer:"footerRenderer"},
		      		{headerText:"Country",dataField:"country",width:"200px",sortable:true,sortDescending:true,draggable:true,resizable:true,priority:2,showMenu:true,
		      					filter:{enableAdvancedFilter:true},autoSize:false},
		      		{headerText:"Employees",dataField:"employees",width:"200px",sortable:false,sortDescending:true,headerTruncateToFit:true,
		      			      	truncateToFit:true,toolTipRenderer:"employeeToolTipRenderer",priority:4,showMenu:true,
		      			      	filter:{advancedFilterType:"list"}},//toolTipRenderer:employeeToolTipRenderer
		      		{headerText:"Price",dataField:"price",toolTipField:"price",width:"200px",sortable:true,sortDescending:true,priority:5
			      					,showMenu:true,enableFilter:false,footerRenderer:"footerRenderer"},
		      		{headerText:"Hierarchy",dataField:"hierarchy",width:"200px",sortable:true,sortDescending:false,priority:1,showMenu:true,
		      					filter:{enableAdvancedFilter:true,advancedFilterType:"list"},multiSelectionEditor:NSGrid.MULTI_SELECTION_EDITORS_TEXTAREA},
		      		{headerText:"Year",dataField:"year",width:"200px",sortable:true,sortDescending:true,priority:3,showMenu:true,
		      						filter:{advancedFilterType:"number"},footerRenderer:"footerRenderer"},
		      		{headerText:"Date",dataField:"date",width:"200px",sortable:true,sortDescending:true,labelFunction:"dateLabelFunction",priority:5,showMenu:true}
		      	];
		var setting = {nsTitle:"Grid With Footer Demo",enableFilter:true,enableAdvancedFilter:true,rowKeyField:"id",columnResizable:true,enableVariableRowHeight:true,
			           columnDraggable:true,rowHeight:30,enableResponsive:true,responsiveMode:"stack",heightOffset:250,customClass:{bodyCell:""},theme:"White",columnAutoSize:true,
			           leftFixedColumn:1,rightFixedColumn:1,enableFooter:true
			           };
		var nsGrid = null;
		var arrItems = [];
		window["loadFooterHandler"] = function ()
		{
			var dgDemo = document.getElementById("dgDemo");
			nsGrid = new NSGrid(dgDemo,setting);
			arrItems = [];
			var item = {};
			for(var count = 0;count < 600;count++)
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
			nsGrid.dataSource(arrItems);
			nsGrid.fixFixedHeader();
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
		
		window["footerRenderer"] = function(dataField,colItem,source,rowIndex,colIndex,cell,row)
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
		
		window["themeChanged"] = function(theme)
		{
			nsGrid.setTheme(theme);
		}
		
		//# sourceURL=footerGrid.js
	</script>
</div>