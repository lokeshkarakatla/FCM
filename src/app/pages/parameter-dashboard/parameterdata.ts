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
            { fuel_type: 'Strong Hybrid', demerit: "98%", issues: 6 },
        ]
        return values;
    }
    static model() {
        let values = [
            { model: 'Toyota Fortuner 4x4', demerit: "89%", issues: 20 },
            { model: 'Hyundai Creta SX', demerit: "97%", issues: 7 },
            { model: 'Mahindra XUV700 AX7', demerit: "90%", issues: 11 },
            { model: 'Tata Nexon EV Max', demerit: "98%", issues: 13 },
            { model: 'Toyota Camry Hybrid', demerit: "96%", issues: 6 },
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
            { variant: '2.8L 4x4 AT', demerit: "89%", issues: 20 },
            { variant: '1.5L Turbo DCT', demerit: "85%", issues: 7 },
            { variant: 'AX7L AWD Diesel', demerit: "90%", issues: 11 },
            { variant: 'Empowered Plus LR', demerit: "97%", issues: 9 },
            { variant: '2.5L Hybrid e-CVT', demerit: "96%", issues: 6 },
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