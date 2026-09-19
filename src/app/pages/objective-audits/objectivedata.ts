export class objectivedata {


    static objectiveArchive() {
        let values = [

            { Date: '1-11-2021', stattt:'Pending' , VIN: 'HR07 BP0721', AuditType: 'Product Quality Audit', Checkpoints: '510/560', Demerits: '12/510', Location: 'Hyderabad', Auditor: 'Surya', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'High', Colour: 'White', Transmission: 'Manual', Fuel_Type: 'Diesel', Status: true },
            { Date: '12-11-2021',  stattt:'Draft', VIN: 'HR02 BP0421', AuditType: 'Body Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Banglore', Auditor: 'Siva', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Low', Colour: 'Black', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
            { Date: '15-11-2021', stattt:'Pending',  VIN: 'HR07 EP0021', AuditType: 'Paint Audit', Checkpoints: '532/560', Demerits: '26/532', Location: 'Mumbai', Auditor: 'Navin', Model: 'Gloster', Variant: 'Manual', Interior_Trim: 'High', Colour: 'Blue', Transmission: 'DCT', Fuel_Type: 'Petrol', Status: true },
            { Date: '23-10-2021', stattt:'Done' , VIN: 'HR07 RG7218', AuditType: 'Body Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Pune', Auditor: 'Ridhima', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Medium', Colour: 'White', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
            { Date: '5-08-2021', stattt:'Pending' , VIN: 'HR07 FK0770', AuditType: 'Paint Audit', Checkpoints: '502/560', Demerits: '15/502', Location: 'Raipur', Auditor: 'Siva', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'Low', Colour: 'Orange', Transmission: 'Manual', Fuel_Type: 'Hybrid', Status: true },
        ]
        return values;
    }
    static ojectiveAgency() {
        let values = [
            { agency: 'GA', demerit: 1290, issues: 20 },
            { agency: 'Body', demerit: 751, issues: 7 },
            { agency: 'Paint', demerit: 1190, issues: 11 },
            { agency: 'Press', demerit: 32, issues: 9 },
            { agency: 'SQE', demerit: 78, issues: 5 },
        ]
        return values;
    }
    static objectiveLoction() {
        let values = [
            { model: 'Hyderabad', demerit: 1290, issues: 20 },
            { model: 'Vadodara', demerit: 751, issues: 7 },
            { model: 'Mumbai', demerit: 1190, issues: 11 },
            { model: 'Banglore', demerit: 320, issues: 13 },
        ]
        return values;

    }
    static objectiveModel() {
        let values = [
            { model: 'Hector', demerit: 1290, issues: 20 },
            { model: 'Astor', demerit: 751, issues: 7 },
            { model: 'Gloster', demerit: 1190, issues: 11 },
            { model: 'EV', demerit: 320, issues: 13 },

        ]
        return values;

    }
    static objectiveStatue() {
        let values = [
            { Date1: '01-01-2022', Date: '01-11-2021', VIN: 'HR07 BP0721',Taget: '28', AuditType: 'Product Quality Audit', Checkpoints: '510/560', Demerits: '12/510', Location: 'Hyderabad', Auditor: 'Surya', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'High', Colour: 'White', Transmission: 'Manual', Fuel_Type: 'Diesel', Status: true },
            { Date1: '19-01-2022', Date: '12-11-2021', VIN: 'HR02 BP0421',Taget: '70', AuditType: 'Body Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Banglore', Auditor: 'Siva', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Low', Colour: 'Black', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
            { Date1: '21-10-2022', Date: '15-11-2021', VIN: 'HR07 EP0021',Taget: '77', AuditType: 'Paint Audit', Checkpoints: '532/560', Demerits: '26/532', Location: 'Mumbai', Auditor: 'Navin', Model: 'Gloster', Variant: 'Manual', Interior_Trim: 'High', Colour: 'Blue', Transmission: 'DCT', Fuel_Type: 'Petrol', Status: true },
            { Date1: '31-07-2022', Date: '23-10-2021', VIN: 'HR07 RG7218',Taget: '70', AuditType: 'Body Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Pune', Auditor: 'Ridhima', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Medium', Colour: 'White', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
            { Date1: '04-05-2022', Date: '05-08-2021', VIN: 'HR07 FK0770',Taget: '85', AuditType: 'Paint Audit', Checkpoints: '502/560', Demerits: '15/502', Location: 'Raipur', Auditor: 'Siva', Model: 'Hector', Variant: 'Manual', Interior_Trim: 'Low', Colour: 'Orange', Transmission: 'Manual', Fuel_Type: 'Hybrid', Status: true },
            { Date1: '19-01-2022', Date: '12-11-2021', VIN: 'HR02 BP0421',Taget: '68', AuditType: 'Body Audit', Checkpoints: '490/560', Demerits: '34/490', Location: 'Banglore', Auditor: 'Siva', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Low', Colour: 'Black', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },
            { Date1: '21-10-2022', Date: '15-11-2021', VIN: 'HR07 EP0021',Taget: '78' ,AuditType: 'Paint Audit', Checkpoints: '532/560', Demerits: '26/532', Location: 'Mumbai', Auditor: 'Navin', Model: 'Gloster', Variant: 'Manual', Interior_Trim: 'High', Colour: 'Blue', Transmission: 'DCT', Fuel_Type: 'Petrol', Status: true },
            { Date1: '31-07-2022', Date: '23-10-2021', VIN: 'HR07 RG7218',Taget: '28', AuditType: 'Body Audit', Checkpoints: '521/560', Demerits: '19/521', Location: 'Pune', Auditor: 'Ridhima', Model: 'Astor', Variant: 'Automatic', Interior_Trim: 'Medium', Colour: 'White', Transmission: 'AMT', Fuel_Type: 'Petrol', Status: true },

        ]
        return values;
    }



}