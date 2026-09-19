export class parameterdata {


    static audittype() {
        let values = [
            { audtitype: "C - Rating", issues: "95%" },
            { audtitype: "D - Rating", issues: "89%" }

        ]
        return values;
    }
    static category() {
        let values = [
            { Category: 'Exterior', demerit: "90%", issues: 20 },
            { Category: 'Interior', demerit: "96%", issues: 7 },

        ]
        return values;
    }
    static fueltype() {
        let values = [
            { fuel_type: 'Petrol', demerit: "90%", issues: 20 },
            { fuel_type: 'Diesel', demerit: "85%", issues: 7 },
            { fuel_type: 'EV', demerit: "95%", issues: 11 },

        ]
        return values;
    }
    static model() {
        let values = [
            { model: 'Hector', demerit: "89%", issues: 20 },
            { model: 'Astor', demerit: "97%", issues: 7 },
            { model: 'Gloster', demerit: "90%", issues: 11 },
            { model: 'EV', demerit: "98%", issues: 13 },
        ]
        return values;
    }
    static transmision() {
        let values = [
            { transmission_type: 'Manual', demerit: "90%", issues: 20 },
            { transmission_type: 'Semi-Automatic', demerit: "87%", issues: 7 },
            { transmission_type: 'Automatic', demerit: "99%", issues: 11 },

        ]
        return values;
    }
    static variant() {
        let values = [
            { variant: 'VDI', demerit: "89%", issues: 20 },
            { variant: 'SXI', demerit: "85%", issues: 7 },
            { variant: 'SXI(o)', demerit: "90%", issues: 11 },
            { variant: 'LDI', demerit: "97%", issues: 9 },


        ]
        return values;
    }
    // static audittype() {
    //     let values = [
    //         { audtitype: "C - Rating", issues: 20 },
    //         { audtitype: "D - Rating", issues: 7 }

    //     ]
    //     return values;
    // }
    // static audittype() {
    //     let values = [
    //         { audtitype: "C - Rating", issues: 20 },
    //         { audtitype: "D - Rating", issues: 7 }

    //     ]
    //     return values;
    // }
    // static audittype() {
    //     let values = [
    //         { audtitype: "C - Rating", issues: 20 },
    //         { audtitype: "D - Rating", issues: 7 }

    //     ]
    //     return values;
    // }
    // static audittype() {
    //     let values = [
    //         { audtitype: "C - Rating", issues: 20 },
    //         { audtitype: "D - Rating", issues: 7 }

    //     ]
    //     return values;
    // }

}