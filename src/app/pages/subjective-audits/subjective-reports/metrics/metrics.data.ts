import * as Highcharts from "highcharts";

export class metricsData {

    static agency() {
        let values = [

            { agency: 'GA', demerit: 1290, issues: 20 },
            { agency: 'Body', demerit: 751, issues: 7 },
            { agency: 'Paint', demerit: 1190, issues: 11 },
            { agency: 'Press', demerit: 32, issues: 9 },
            { agency: 'SQE', demerit: 78, issues: 5 },

        ]
        return values;
    }

    static agencyGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Agency',
                align: 'center'
            },
            xAxis: {
                categories: ['GA', 'Body', 'paint', 'Press', 'SQE',]
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228, 356]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240, 367]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250, 400]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33, 376.32],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

    static auditGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Audit Type',
                align: 'center'
            },
            xAxis: {
                categories: ['Product Quality Audit', 'Paint Audit', 'Body Audit', 'Others']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

    static audittype() {
        let values = [

            { audtitype: "Product Quality Audit", issues: 20 },
            { audtitype: "Body Audit", issues: 7 },
            { audtitype: "Paint Audit", issues: 11 },
            { audtitype: "Product Quality Audit", issues: 9 },
            { audtitype: "Body Audit", issues: 5 },
            { audtitype: "Paint Audit", issues: 15 },

        ]
        return values;
    }
    public static fuel() {
        let values = [

            { fuel_type: 'Petrol', demerit: 1290, issues: 20 },
            { fuel_type: 'Diesel', demerit: 751, issues: 7 },
            { fuel_type: 'EV', demerit: 1190, issues: 11 }
        ]
        return values;
    }


    public static fuelGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Fuel Type',
                align: 'center'
            },
            xAxis: {
                categories: ['Petrol', 'Diesel', 'EV', 'Others']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }


    static model() {
        let values = [

            { model: 'Hector', demerit: 1290, issues: 20 },
            { model: 'Astor', demerit: 751, issues: 7 },
            { model: 'Gloster', demerit: 1190, issues: 11 },
            { model: 'EV', demerit: 320, issues: 13 },
        ]
        return values;
    }


    static modelGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Model',
                align: 'center'
            },
            xAxis: {
                categories: ['Hector', 'Astor', 'Gloster', 'EV']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }


    static module() {
        let values = [

            { module: 'BSO', function: "Aesthetics", defect: "Damage/ Scratch/ Chip", demerit: 1290, issues: 20 },
            { module: 'Door', function: "Mutilation", defect: "Scratch", demerit: 751, issues: 7 },
            { module: 'Rear Bumper', function: "Aesthetics", defect: "Improper assembly", demerit: 1190, issues: 11 },
            { module: 'Fuel Flap', function: "Aesthetics", defect: "Ding", demerit: 32, issues: 9 },
            { module: 'Upper Trim', function: "Mutilation", defect: "Uneven/Excess Gap/ Flushness", demerit: 78, issues: 5 },

        ]
        return values;
    }

    static moduleGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Module',
                align: 'center'
            },
            xAxis: {
                categories: ['BSO', 'Door', 'Rear Bumper', 'Fuel Flap', 'Upper Trim']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228, 345]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240, 300]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250, 400]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33, 321.21],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }



    static sevierty() {
        let values = [
            { severity: '1-Minor', issues: '90%' },
            { severity: '5-Small', issues: '80%' },
            { severity: '10-Moderate', issues: '87%' },
            { severity: '20 - Major', issues: '70%' },
            { severity: '50-Critical', issues: '99%' },
        ]
        return values;
    }

    static seviertyGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Severity',
                align: 'center'
            },
            xAxis: {
                categories: ['Product Quality Audit', 'Paint Audit', 'Body Audit', 'Others']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

    static transition() {
        let values = [

            { transmission_type: 'Manual', demerit: 129, issues: 20 },
            { transmission_type: 'Semi-Automatic', demerit: 75, issues: 7 },
            { transmission_type: 'Automatic', demerit: 119, issues: 11 },

        ]
        return values;
    }


    static transitionGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Transmission',
                align: 'center'
            },
            xAxis: {
                categories: ['Manual', 'Semi-Automatic', 'Automatic', 'Others']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }


    static variant() {
        let values = [

            { variant: 'VDI', demerit: 129, issues: 20 },
            { variant: 'SXI', demerit: 75, issues: 7 },
            { variant: 'SXI(o)', demerit: 119, issues: 11 },
            { variant: 'LDI', demerit: 32, issues: 9 }
        ]
        return values;
    }

    static variantGraph() {
        Highcharts.chart('container', {
            title: {
                text: 'Averge Demerit Distribution by Variant',
                align: 'center'
            },
            xAxis: {
                categories: ['VDI', 'SXI', 'SXI(o)', 'LDI']
            },
            yAxis: {
                title: {
                    text: 'Averge Demerit'
                }
            },
            tooltip: {
                valueSuffix: 'Averge Demerit'
            },
            series: [{
                type: 'column',
                name: '2020',
                data: [59, 83, 65, 228]
            }, {
                type: 'column',
                name: '2021',
                data: [24, 79, 72, 240]
            }, {
                type: 'column',
                name: '2022',
                data: [58, 88, 75, 250]
            },
            {
                type: 'spline',
                name: 'Average',
                data: [47, 83.33, 70.66, 239.33],
                marker: {
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[3],
                    fillColor: 'white'
                }
            }, {
                type: 'pie',
                name: 'Total',
                data: [{
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px'
                        }
                    }
                }, {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1] // 2021 color
                }, {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2] // 2022 color
                }],
                center: [75, 65],
                size: 100,
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            }]
        });
    }

}