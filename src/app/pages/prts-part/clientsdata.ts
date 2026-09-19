export class ClientsData {
    static PiechartData1() {
        const single = [
            { 'name': "D1", 'value': 1 },
            { 'name': "D2", 'value': 2 },
            { 'name': "D3a", 'value': 1 },
            { 'name': "D3b", 'value': 1 },
            { 'name': "D4a", 'value': 1 },
            { 'name': "D4b", 'value': 1 },
        ];
        return single;;
    }

    static PiechartData12() {
        const single = [
            { 'name': "Initiated", 'value': 1 },
            { 'name': "Under Process", 'value': 2 },
            { 'name': "On Hold", 'value': 1 },
            { 'name': "Done", 'value': 1 },

        ];
        return single;;
    }

    static PieChartData2() {
        const multi = [
            {
                name: 'GA',
                value: 45
            },
            {
                name: 'Paint',
                value: 70
            },
            {
                name: 'Body',
                value: 94
            },
            {
                name: 'SQE',
                value: 64
            },
        ];
        return multi;

    }

    static PieChartData21() {
        const multi = [
            {
                name: 'Hector',
                value: 45
            },
            {
                name: 'Astor',
                value: 70
            },
            {
                name: 'Gloster',
                value: 94
            },
            {
                name: 'ZESV',
                value: 64
            },
        ];
        return multi;

    }

    static PieChartData3() {
        const triple = [
            {
                name: '1-30 Days',
                value: 147
            },
            {
                name: '31-60 Days',
                value: 224
            },
            {
                name: '61-120 Days',
                value: 224
            },
        ];
        return triple;
    }
    static alert() {
        let values = [
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '6' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '10' },
            { date: '11 oct 2022,4:44pm', action: 'Subject 1', Stage: 'D1:Process', assing: 'VamshiKrishna', context: 'Checklist', escalated: 'Vamshikrishna', due: '25 dec 2022', deley: '5' },

        ]
        return values;
    }

}