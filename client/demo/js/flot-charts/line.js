'use strict';

$(document).ready(function(){

    var data = [];
    var totalPoints = 20;
    var updateInterval = 300;

    // Make some random data for Flot Line Chart
    var data1 = [[1,60], [2,30], [3,50], [4,100], [5,10], [6,90], [7,85]];
    //var data2 = [[1,20], [2,90], [3,60], [4,40], [5,100], [6,25], [7,65]];
    //var data3 = [[1,100], [2,20], [3,60], [4,90], [5,80], [6,10], [7,5]];

    // Create an Array push the data + Draw the bars
    /*var barData = [
        {
            label: 'Tokyo',
            data: data1,
            color: '#edeff0'
        },
        {
            label: 'Seoul',
            data: data2,
            color: '#8a99a0'
        },
        {
            label: 'Beijing',
            data: data3,
            color: '#415158'
        }
    ]*/


    function getRandomData() {
        if (data.length > 0)
            data = data.slice(1);

        while (data.length < totalPoints) {
    
            var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
            if (y < 0) {
                y = 0;
            } else if (y > 90) {
                y = 90;
            }

            data.push(y);
        }

        var res = [];
        res.data = [];
        for (var i = 0; i < data.length; ++i) {
            res.data.push([i, data[i]])
        }

        res.label = 'Tokyo';
        res.color = "#edeff0";
        return res;
    }


    /*function getRandomData(){
        return [[1,1], [2, 2], [3, 3], [4, 4], [5, 5]];
    }*/

    /* Update chart */
    function update() {
        plot.setData([getRandomData()]);
        // Since the axes don't change, we don't need to call plot.setupGrid()

        plot.draw();
        setTimeout(update, updateInterval);
    }


    // Let's create the chart
    if ($('#chart-line')[0]) {
        
        /*$.plot($("#chart-line"), barData, {
            series: {
                shadowSize: 0
            },
            grid : {
                borderWidth: 1,
                borderColor: '#31424b',
                show : true,
                hoverable : true
            },

            yaxis: {
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            xaxis: {
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            legend:{
                container: '.flot-chart-legend--line',
                noColumns: 5
            }
        });*/

        var plot = $.plot($("#chart-line"), [getRandomData()], {
            series: {
                shadowSize: 0
            },
            grid : {
                borderWidth: 1,
                borderColor: '#31424b',
                show : true,
                hoverable : true
            },

            yaxis: {
                min:0,
                max:100,
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            xaxis: {
                tickColor: '#31424b',
                tickDecimals: 0,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "#98a7ac"
                },
                shadowSize: 0
            },

            legend:{
                container: '.flot-chart-legend--line',
                noColumns: 5
            }
        });
        update();

    }

    // Tooltips for Flot Charts

    if ($('.flot-chart')[0]) {
        $('.flot-chart').bind('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $('.flot-tooltip').html(item.series.label + ' of ' + x + ' = ' + y).css({top: item.pageY+5, left: item.pageX+5}).show();
            }
            else {
                $(".flot-tooltip").hide();
            }
        });

        $("<div class='flot-tooltip'></div>").appendTo("body");
    }
});
