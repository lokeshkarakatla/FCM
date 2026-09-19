export class admindata {


    static GetD7tData() {
        let values = [
            { check: '1. Are the correct Best People Practice Sheets/JES/ALBS/posted/available?', isChecked: '', },
            { check: '2. Are the completed vehicle inspection sheets/quality standardsidentified and followed?', isChecked: '', },
            { check: '3. Are the operators job instructions being followed?', isChecked: '', },
            { check: '4. Are there visual aids present, current and being followed?', isChecked: '', },
            { check: '5. If there is a mandatory sequence identified, Is it being followed?', isChecked: '', },
            { check: '6. Was the operator properly trained on this operation?', isChecked: '', },
            { check: '7. Can the operator detect the issue/problem?', isChecked: '', },
            { check: '8. Does Operator know how to communicate issues/problems?', isChecked: '', },

        ]
        return values;
    }
    static escalation() {
        let values = [
            { level: 'Level 0', Recipient: 'User', Remarks: 'Lorm Ipsum Lorm Ipsum', Deley: '0' },
            { level: 'Level 1', Recipient: 'User', Remarks: 'Lorm Ipsum Lorm Ipsum', Deley: '1' },
            { level: 'Level 2', Recipient: 'Manager', Remarks: 'Lorm Ipsum Lorm Ipsum', Deley: '3' },
            { level: 'Level 3', Recipient: 'Director', Remarks: 'Lorm Ipsum Lorm Ipsum', Deley: '5' },

        ]
        return values;
    }
    static lookUp() {
        let values = [
            { vcStatus: true, CodeMasterName: "Side View", LookupName: "LH", },
            { vcStatus: true, CodeMasterName: "Side View", LookupName: "RH", },
            { vcStatus: true, CodeMasterName: "Side View", LookupName: "BH", },
            { vcStatus: true, CodeMasterName: "Face View", LookupName: "FT", },
            { vcStatus: true, CodeMasterName: "Face View", LookupName: "RR", },
            { vcStatus: true, CodeMasterName: "Face View", LookupName: "BH", },
            { vcStatus: true, CodeMasterName: "Demerit", LookupName: "1", },
            { vcStatus: true, CodeMasterName: "Demerit", LookupName: "5", },
            { vcStatus: true, CodeMasterName: "Demerit", LookupName: "10", },
            { vcStatus: true, CodeMasterName: "Demerit", LookupName: "20", },
            { vcStatus: true, CodeMasterName: "Demerit", LookupName: "50" }

        ]
        return values;
    }
    static eventLog() {
        let values = [
            { Eventname: "Escalation Matrix : Viewed Records", Username: "Satya", createddate: "20/03/2022, 6:30 A:M", Module: "	Admin", Userrole: "Admin", ip: "	192.168.0.115", eventtype: "	Create" },
            { Eventname: "Viewed Roles Screen", Username: "Surya", createddate: "12/03/2022, 4:00 A:M", Module: "	Admin", Userrole: "Manager", ip: "	192.168.0.115", eventtype: "	Update" },
            { Eventname: "Viewed Users Screen", Username: "Sagar", createddate: "24/03/2022, 2:30 A:M", Module: "	Admin", Userrole: "Admin", ip: "	192.168.0.222", eventtype: "	Delete" },
            { Eventname: "Dashboard : Viewed the screen", Username: "Sai", createddate: "30/03/2022, 3:00 A:M", Module: "	Admin", Userrole: "Admin", ip: "	192.168.0.115", eventtype: "	Create" },
            { Eventname: "Viewed Roles Screen", Username: "Mohan", createddate: "10/03/2022, 7:10 A:M", Module: "	Admin", Userrole: "Admin", ip: "	192.168.0.115", eventtype: "	Delete" },


        ]
        return values;
    }
    static preferance() {
        let values = [


            {
                intSettingsId: 1,
                name: "Grid Length",
                description: "Default Grid Length",
                old_value: "10",
            },
            {
                intSettingsId: 2,
                name: "Notification Email",
                description: "Default Admin Notification Email	",
                old_value: "mg@optionmatrix.com",
            },
            {
                intSettingsId: 3,
                name: "Email of the Director",
                description: "Email Address of the Director",
                old_value: "abc@mgmotor.com",
            },
            {
                intSettingsId: 4,
                name: "Audit Approval",
                description: "Manager will approve the Audit",
                old_value: "Auditor",
            },

        ]
        return values;

    }

    static user() {
        let values = [
            { UserName: "Admin", Manager: 'Navin Malik, Surya', UserEmail: "Admin@optionmatrix.com", UserPhone: "9834578945", RoleName: "	Admin", rolescreens: "30", totalscreens: "35", splperm: "16", totalspl: "16", IsActive: 'true' },
            { UserName: "Test Pavan", Manager: 'Sai Kumar', UserEmail: "Pavan@optionmatrix.com", UserPhone: "9584672150", RoleName: "	Tester", rolescreens: "21", totalscreens: "35", splperm: "16", totalspl: "16" },
            { UserName: "Satya", Manager: 'Satya, Abhishek', UserEmail: "Satya@optionmatrix.com", UserPhone: "7070938861", RoleName: "Developer", rolescreens: "22", totalscreens: "35", splperm: "16", totalspl: "16", IsActive: 'true' },
            { UserName: "Surya", Manager: 'Vamshi', UserEmail: "Surya@optionmatrix.com", UserPhone: "9365874152", RoleName: "Developer", rolescreens: "27", totalscreens: "35", splperm: "16", totalspl: "16" },


        ]
        return values;
    }
    static role() {
        let values = [
            { RoleName: "Admin", NoofUsers: "11", TotalUsers: "59", permissionCount: "35", totalPermissionCount: "35" },
            { RoleName: "Manager", NoofUsers: "12", TotalUsers: "59", permissionCount: "35", totalPermissionCount: "35" },
            { RoleName: "SalesHead", NoofUsers: "31", TotalUsers: "59", permissionCount: "35", totalPermissionCount: "35" },
        ]
    }

}