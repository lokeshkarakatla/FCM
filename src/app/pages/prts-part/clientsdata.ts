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
                name: 'Fortuner 4x4',
                value: 45
            },
            {
                name: 'Creta SX',
                value: 70
            },
            {
                name: 'XUV700 AX7',
                value: 94
            },
            {
                name: 'Nexon EV Max',
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
            { date: '12-Aug-2025 09:30 AM', action: '7-DCT Transmission Judder Containment', Stage: 'D3: Interim Containment', assing: 'Rajesh Sharma', context: 'Batch Quarantine', escalated: 'Vikram Mehta', due: '20-Aug-2025', deley: '2' },
            { date: '15-Aug-2025 11:15 AM', action: 'ADAS Camera Drift Sensor Calibration', Stage: 'D4: Root Cause Analysis', assing: 'Dr. Anand Verma', context: '5-Why Fishbone', escalated: 'Vikram Mehta', due: '25-Aug-2025', deley: '4' },
            { date: '18-Aug-2025 02:45 PM', action: 'EV Battery BMS CAN Timeout Diagnostics', Stage: 'D5: Permanent Action', assing: 'Priya Sundaram', context: 'Firmware Validation', escalated: 'Deepak Nair', due: '30-Aug-2025', deley: '0' },
            { date: '21-Aug-2025 10:00 AM', action: 'Monsoon Shower Tailgate Water Leak', Stage: 'D3: Interim Containment', assing: 'Kiran Patel', context: 'Gasket Rework', escalated: 'Vikram Mehta', due: '28-Aug-2025', deley: '1' },
            { date: '25-Aug-2025 04:20 PM', action: 'Turbocharger Oil Line Pressure Drift', Stage: 'D4: Root Cause Analysis', assing: 'Manoj Tiwari', context: 'Metallurgical Bench', escalated: 'Deepak Nair', due: '05-Sep-2025', deley: '3' },
            { date: '28-Aug-2025 01:10 PM', action: 'Electronic Power Steering Calibration', Stage: 'D6: Verification', assing: 'Suresh Menon', context: 'Cut-off VIN Audit', escalated: 'Vikram Mehta', due: '10-Sep-2025', deley: '0' },
        ];
        return values;
    }

}