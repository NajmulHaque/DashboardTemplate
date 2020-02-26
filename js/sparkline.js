var Script = function () {
    $("#sparkline").sparkline([8,3,1,5,4,8,9,6,5,7,10,5,8,9], {
    type: 'bar',
    height:'75',
    barWidth: 7,
    barSpacing: 9,
    zeroAxis: false,
    barColor: '#afb1d1',
    stackedBarColor: ['gray']
    });
    $("#sparkline2").sparkline([2,3,4,5,6,6,7,8,9,10,11,12,13,14], {
    type: 'bar',
    height:'75',
    barWidth: 7,
    barSpacing: 9,
    zeroAxis: false,
    barColor: '#afb1d1',
    stackedBarColor: ['gray']
    });

    $("#linechart").each(function(){
        var $data = $(this).data();
        $data.valueSpots = {'0:': $data.spotColor};
        $(this).sparkline( $data.data || "html", $data,
        {
            tooltipFormat: '<span style="display:block;">' +
            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
        });
    });
    $("#linechart2").each(function(){
        var $data = $(this).data();
        $data.valueSpots = {'0:': $data.spotColor};
        $(this).sparkline( $data.data || "html", $data,
        {
            tooltipFormat: '<span style="display:block;">' +
            '<span style="color: {{color}}">&#9679;</span> {{offset:names}} ({{percent.1}}%)</span>'
        });
    });
}();