export const users =
    [
        {
            userId: 1,
            userName: 'Vamshi B',
            email: 'vamshi@optionmatrix.com',
            password: 'Vamshi@123',
            permissions: [
                {
                    screenId: 1, menuId: 1, screenName: 'Dashboard', moduleId: 1, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 2, menuId: 2, screenName: 'Clients', moduleId: 2, canRead: true, canDelete: true, canUpdate: true, canCreate: false,
                },
                {
                    screenId: 3, menuId: 0, screenName: 'Project Grid', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 4, menuId: 0, screenName: 'Project Kanban', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 5, menuId: 0, screenName: 'Project Handover', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 6, menuId: 0, screenName: 'Project Reports', moduleId: 3, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 7, menuId: 401, screenName: 'Roles Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 8, menuId: 401, screenName: 'Users Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 9, menuId: 402, screenName: 'Handover', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 10, menuId: 402, screenName: 'States', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 11, menuId: 404, screenName: 'kanban', moduleId: 4, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 12, menuId: 403, screenName: 'Lookup', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
            ]
        },
        {
            userId: 2,
            userName: 'Admin',
            email: 'admin@intex.com',
            password: 'intex@123',
            permissions: [
                {
                    screenId: 1, menuId: 1, screenName: 'Dashboard', moduleId: 1, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 2, menuId: 2, screenName: 'Clients', moduleId: 2, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 3, menuId: 0, screenName: 'Project Grid', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 4, menuId: 0, screenName: 'Project Kanban', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 5, menuId: 0, screenName: 'Project Handover', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 6, menuId: 0, screenName: 'Project Reports', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 7, menuId: 401, screenName: 'Roles Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 8, menuId: 401, screenName: 'Users Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 9, menuId: 402, screenName: 'Handover', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 10, menuId: 402, screenName: 'States', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 11, menuId: 404, screenName: 'kanban', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 12, menuId: 403, screenName: 'Lookup', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
            ]
        },
        {
            userId: 3,
            userName: 'Admin',
            email: 'admin@optionmatrix.com',
            password: 'admin@123',
            permissions: [
                {
                    screenId: 1, menuId: 1, screenName: 'Dashboard', moduleId: 1, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 2, menuId: 2, screenName: 'Clients', moduleId: 2, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 3, menuId: 0, screenName: 'Project Grid', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 4, menuId: 0, screenName: 'Project Kanban', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 5, menuId: 0, screenName: 'Project Handover', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 6, menuId: 0, screenName: 'Project Reports', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 7, menuId: 401, screenName: 'Roles Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 8, menuId: 401, screenName: 'Users Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 9, menuId: 402, screenName: 'Handover', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 10, menuId: 402, screenName: 'States', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 11, menuId: 404, screenName: 'kanban', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 12, menuId: 403, screenName: 'Lookup', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
            ]
        },
        {
            userId: 4,
            userName: 'Satya',
            email: 'satya@optionmatrix.com',
            password: 'Satya@143',
            permissions: [
                {
                    screenId: 1, menuId: 1, screenName: 'Dashboard', moduleId: 1, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 2, menuId: 2, screenName: 'Clients', moduleId: 2, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 3, menuId: 0, screenName: 'Project Grid', moduleId: 3, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 4, menuId: 0, screenName: 'Project Kanban', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 5, menuId: 0, screenName: 'Project Handover', moduleId: 3, canRead: true, canDelete: true, canUpdate: false, canCreate: true,
                },
                {
                    screenId: 6, menuId: 0, screenName: 'Project Reports', moduleId: 3, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },

                {
                    screenId: 7, menuId: 401, screenName: 'Roles Grid', moduleId: 4, canRead: true ,canDelete: true, canUpdate: true, canCreate: false,
                },
                {
                    screenId: 8, menuId: 401, screenName: 'Users Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: false,
                },
                {
                    screenId: 9, menuId: 402, screenName: 'Handover', moduleId: 4, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 10, menuId: 402, screenName: 'States', moduleId: 4, canRead: false, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 11, menuId: 404, screenName: 'kanban', moduleId: 4, canRead: true, canDelete: true, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 12, menuId: 403, screenName: 'Lookup', moduleId: 4, canRead: false, canDelete: false, canUpdate: true, canCreate: true,
                },
            ]
        },
        {
            userId: 5,
            userName: 'Cliet',
            email: 'client@optionmatrix.com',
            password: 'client@123',
            isClient: true,
            permissions: [
                {
                    screenId: 1, menuId: 1, screenName: 'Dashboard', moduleId: 1, canRead: false, canDelete: true, canUpdate: true, canCreate: false,
                },
                {
                    screenId: 2, menuId: 2, screenName: 'Clients', moduleId: 2, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 3, menuId: 0, screenName: 'Project Grid', moduleId: 3, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 4, menuId: 0, screenName: 'Project Kanban', moduleId: 3, canRead: true, canDelete: true, canUpdate: true, canCreate: false,
                },

                {
                    screenId: 5, menuId: 0, screenName: 'Project Handover', moduleId: 3, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 6, menuId: 0, screenName: 'Project Reports', moduleId: 3, canRead: false, canDelete: true, canUpdate: false, canCreate: true,
                },

                {
                    screenId: 7, menuId: 401, screenName: 'Roles Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: false, canCreate: true,
                },
                {
                    screenId: 8, menuId: 401, screenName: 'Users Grid', moduleId: 4, canRead: true, canDelete: true, canUpdate: false, canCreate: true,
                },
                {
                    screenId: 9, menuId: 402, screenName: 'Handover', moduleId: 4, canRead: true, canDelete: true, canUpdate: false, canCreate: true,
                },
                {
                    screenId: 10, menuId: 402, screenName: 'States', moduleId: 4, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 11, menuId: 404, screenName: 'kanban', moduleId: 4, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
                {
                    screenId: 12, menuId: 403, screenName: 'Lookup', moduleId: 4, canRead: true, canDelete: false, canUpdate: true, canCreate: true,
                },
            ]
        }
    ];

