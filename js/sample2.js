window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer3", {
	animationEnabled: true,
	theme: "light2",
	axisX:{
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function(){
            return " ";
        }
	},
	axisY: {
        gridThickness: 0,
        tickLength: 0,
        lineThickness: 0,
        labelFormatter: function(){
            return " ";
        }
	},
	backgroundColor:['#1bbae1'],
	// toolTip:{
	// 	shared:true
	// },  

	data: [{
		type: "line",
		markerType: "square",
		color: "lightgray",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 350 },
			{ x: new Date(2017, 0, 4), y: 400 },
			{ x: new Date(2017, 0, 5), y: 410 },
			{ x: new Date(2017, 0, 6), y: 358 },
			{ x: new Date(2017, 0, 7), y: 434 },
			{ x: new Date(2017, 0, 8), y: 563 },
			{ x: new Date(2017, 0, 9), y: 447 },
			{ x: new Date(2017, 0, 10), y: 453 },
			{ x: new Date(2017, 0, 11), y: 469 },
			{ x: new Date(2017, 0, 12), y: 543 },
			{ x: new Date(2017, 0, 13), y: 570 },
			{ x: new Date(2017, 0, 14), y: 469 },
			{ x: new Date(2017, 0, 15), y: 490 },
			{ x: new Date(2017, 0, 16), y: 530 }
		]
	},
	{
		type: "line",
		markerType: "circle",
		color: "#222",
		dataPoints: [
			{ x: new Date(2017, 0, 3), y: 110 },
			{ x: new Date(2017, 0, 4), y: 160 },
			{ x: new Date(2017, 0, 5), y: 140 },
			{ x: new Date(2017, 0, 6), y: 158 },
			{ x: new Date(2017, 0, 7), y: 144 },
			{ x: new Date(2017, 0, 8), y: 180 },
			{ x: new Date(2017, 0, 9), y: 200 },
			{ x: new Date(2017, 0, 10),y: 210 },
			{ x: new Date(2017, 0, 11), y:220 },
			{ x: new Date(2017, 0, 12), y:230 },
			{ x: new Date(2017, 0, 13), y: 240 },
			{ x: new Date(2017, 0, 14), y: 250 },
			{ x: new Date(2017, 0, 15), y: 260 },
			{ x: new Date(2017, 0, 16), y: 270 }
		]
	}]
});

chart.render();

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	} else{
		e.dataSeries.visible = true;
	}
	chart.render();
}

CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "gray",
                "gray",
                "gray",
                "gray",
                "gray"                
                ]);

        var chart = new CanvasJS.Chart("chartContainer2",
        {
            animationEnabled: true,
            dataPointWidth: 5,
            axisX:{
                maximum: 19,
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                labelFormatter: function(){
                    return " ";
                }
            },
            axisY:{
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                labelFormatter: function(){
                    return " ";
                }
            },
            colorSet: "greenShades",
            data: [
            {        
                type: "column",
                dataPoints: [
                    { x: 2, y: 2, label: "apple" },
                    { x: 4, y: 4 },
                    { x: 6, y: 6 },
                    { x: 8, y: 8 },
                    { x: 10, y: 10 },
                    { x: 12, y: 12 },
                    { x: 14, y: 14 },
                    { x: 16, y: 16 },
                    { x: 18, y: 18 }
                ]
            }
            ]
        });

        chart.render();

        CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "gray",
                "gray",
                "gray",
                "gray",
                "gray"                
                ]);

        var chart = new CanvasJS.Chart("chartContainer",
        {
            animationEnabled: true,
            dataPointWidth: 5,
            axisX:{
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                labelFormatter: function(){
                    return " ";
                }
            },
            axisY:{
                gridThickness: 0,
                tickLength: 0,
                lineThickness: 0,
                labelFormatter: function(){
                    return " ";
                }
            },
            colorSet: "greenShades",
            data: [
            {        
                type: "column",
                dataPoints: [
                    { x: 11, y: 17},
                    { x: 19, y: 21 },
                    { x: 21, y: 25 },
                    { x: 23, y: 29 },
                    { x: 27, y: 30 },
                    { x: 13, y: 15 },
                    { x: 55, y: 37 },
                    { x: 33, y: 11 },
                    { x: 41, y: 39 },
                    { x: 43, y: 40 }
                ]
            }
            ]
        });

        chart.render();
}