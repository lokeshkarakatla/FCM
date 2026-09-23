export class auditdata {

    static objectiveArchive() {
        let values = [
            { Date: '14-08-2025', VIN: 'MBH45K23N0P721094', AuditType: 'Product Quality Audit (PDI)', Checkpoints: '510/560', Demerits: '12/510', Location: 'Bidadi Auto Facility - Plant 1', Auditor: 'Surya N.', Model: 'Toyota Fortuner 4x4', Variant: 'ZX 4x4 AT', Interior_Trim: 'High', Colour: 'Attitude Black Mica', Transmission: '6-Speed AT', Fuel_Type: 'Diesel BS-VI', Status: true },
            { Date: '19-08-2025', VIN: 'MALH581CLPM042183', AuditType: 'Body-in-White Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Sriperumbudur Car Assembly', Auditor: 'Siva K.', Model: 'Hyundai Creta SX', Variant: 'SX(O) Turbo 7-DCT', Interior_Trim: 'Medium', Colour: 'Abyss Black', Transmission: '7-Speed DCT', Fuel_Type: 'Petrol TGDi', Status: true },
            { Date: '23-08-2025', VIN: 'MAT625458N0021578', AuditType: 'Cathodic Paint Audit (CED)', Checkpoints: '532/560', Demerits: '26/532', Location: 'Chakan Auto Mega Facility', Auditor: 'Navin R.', Model: 'Mahindra XUV700 AX7', Variant: 'AX7 AWD Luxury Pack', Interior_Trim: 'High', Colour: 'Platinum White Pearl', Transmission: '6-Speed AT', Fuel_Type: 'Diesel BS-VI', Status: true },
            { Date: '28-08-2025', VIN: 'MAT622118N0072189', AuditType: 'Chassis Dyno & Roller Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Sanand Passenger Car Plant', Auditor: 'Ridhima P.', Model: 'Tata Nexon EV Max', Variant: 'Empowered+ LR', Interior_Trim: 'Medium', Colour: 'Daytona Grey EV', Transmission: 'Single-Speed EV', Fuel_Type: 'BEV 400V Electric', Status: true },
            { Date: '05-09-2025', VIN: 'MBH45K23N0P077032', AuditType: 'Monsoon Shower Leak Audit', Checkpoints: '502/560', Demerits: '15/502', Location: 'Bidadi Auto Facility - Plant 1', Auditor: 'Siva K.', Model: 'Toyota Camry Hybrid', Variant: 'Dynamic Hybrid e-CVT', Interior_Trim: 'High', Colour: 'Silver Metallic', Transmission: 'e-CVT', Fuel_Type: 'Strong Hybrid SHEV', Status: true },
        ];
        return values;
    }

    static ojectiveAgency() {
        let values = [
            { agency: 'Trim, Chassis & Final (TCF)', demerit: 1290, issues: 20 },
            { agency: 'Body-in-White (BIW)', demerit: 751, issues: 7 },
            { agency: 'CED Paint Quality', demerit: 1190, issues: 11 },
            { agency: 'Stamping & Press Shop', demerit: 32, issues: 9 },
            { agency: 'Supplier Quality (SQM)', demerit: 78, issues: 5 },
        ];
        return values;
    }

    static objectiveLoction() {
        let values = [
            { model: 'Bidadi Auto Facility - Plant 1', demerit: 1290, issues: 20 },
            { model: 'Sriperumbudur Car Assembly', demerit: 751, issues: 7 },
            { model: 'Chakan Auto Mega Facility', demerit: 1190, issues: 11 },
            { model: 'Sanand Passenger Car Plant', demerit: 320, issues: 13 },
        ];
        return values;
    }

    static objectiveModel() {
        let values = [
            { model: 'Toyota Fortuner 4x4', demerit: 250, issues: '94%' },
            { model: 'Toyota Camry Hybrid', demerit: 210, issues: '96%' },
            { model: 'Hyundai Creta SX', demerit: 751, issues: '92%' },
            { model: 'Hyundai Verna Turbo', demerit: 680, issues: '90%' },
            { model: 'Mahindra XUV700 AX7', demerit: 1190, issues: '95%' },
            { model: 'Tata Safari Dark', demerit: 890, issues: '93%' },
            { model: 'Tata Nexon EV Max', demerit: 410, issues: '97%' },
            { model: 'Honda Elevate ZX', demerit: 520, issues: '91%' }
        ];
        return values;
    }

    static objectiveStatue() {
        let values = [
            { Date: '14-08-2025', VIN: 'MBH45K23N0P721094', AuditType: 'Product Quality Audit (PDI)', Checkpoints: '510/560', Demerits: '12/510', Location: 'Bidadi Auto Facility - Plant 1', Auditor: 'Surya N.', Model: 'Toyota Fortuner 4x4', Variant: 'ZX 4x4 AT', Interior_Trim: 'High', Colour: 'Attitude Black Mica', Transmission: '6-Speed AT', Fuel_Type: 'Diesel BS-VI', Status: true },
            { Date: '19-08-2025', VIN: 'MALH581CLPM042183', AuditType: 'Body-in-White Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Sriperumbudur Car Assembly', Auditor: 'Siva K.', Model: 'Hyundai Creta SX', Variant: 'SX(O) Turbo 7-DCT', Interior_Trim: 'Medium', Colour: 'Abyss Black', Transmission: '7-Speed DCT', Fuel_Type: 'Petrol TGDi', Status: true },
            { Date: '23-08-2025', VIN: 'MAT625458N0021578', AuditType: 'Cathodic Paint Audit (CED)', Checkpoints: '532/560', Demerits: '26/532', Location: 'Chakan Auto Mega Facility', Auditor: 'Navin R.', Model: 'Mahindra XUV700 AX7', Variant: 'AX7 AWD Luxury Pack', Interior_Trim: 'High', Colour: 'Platinum White Pearl', Transmission: '6-Speed AT', Fuel_Type: 'Diesel BS-VI', Status: true },
            { Date: '28-08-2025', VIN: 'MAT622118N0072189', AuditType: 'Chassis Dyno & Roller Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Sanand Passenger Car Plant', Auditor: 'Ridhima P.', Model: 'Tata Nexon EV Max', Variant: 'Empowered+ LR', Interior_Trim: 'Medium', Colour: 'Daytona Grey EV', Transmission: 'Single-Speed EV', Fuel_Type: 'BEV 400V Electric', Status: true },
            { Date: '05-09-2025', VIN: 'MBH45K23N0P077032', AuditType: 'Monsoon Shower Leak Audit', Checkpoints: '502/560', Demerits: '15/502', Location: 'Bidadi Auto Facility - Plant 1', Auditor: 'Siva K.', Model: 'Toyota Camry Hybrid', Variant: 'Dynamic Hybrid e-CVT', Interior_Trim: 'High', Colour: 'Silver Metallic', Transmission: 'e-CVT', Fuel_Type: 'Strong Hybrid SHEV', Status: true },
        ];
        return values;
    }

}