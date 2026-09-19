
export class checklistdata {


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
    static fuel() {
        let values = [

            { fuel_type: 'Petrol', demerit: 1290, issues: 20 },
            { fuel_type: 'Diesel', demerit: 751, issues: 7 },
            { fuel_type: 'EV', demerit: 1190, issues: 11 },


        ]
        return values;
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
    static sevierty() {
        let values = [
            { severity: 1, issues: 20 },
            { severity: 5, issues: 7 },
            { severity: 10, issues: 11 },
            { severity: 15, issues: 9 },
            { severity: 19, issues: 5 },
            { severity: 6, issues: 1 },


        ]
        return values;
    }
    static transition() {
        let values = [

            { transmission_type: 'Manual', demerit: 129, issues: 20 },
            { transmission_type: 'Semi-Automatic', demerit: 75, issues: 7 },
            { transmission_type: 'Automatic', demerit: 119, issues: 11 },

        ]
        return values;
    }
    static variant() {
        let values = [

            { variant: 'VDI', demerit: 129, issues: 20 },
            { variant: 'SXI', demerit: 75, issues: 7 },
            { variant: 'SXI(o)', demerit: 119, issues: 11 },
            { variant: 'LDI', demerit: 32, issues: 9 },


        ]
        return values;
    }

}