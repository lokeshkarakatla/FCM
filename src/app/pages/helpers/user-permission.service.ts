import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { users } from './data';
@Injectable({
    providedIn: 'root'
})

export class UserPermissionService {

    constructor(private _http: HttpClient) { }


    static fnGetReadPermissions(screenId: number): boolean {
        let userId = JSON.parse(localStorage.getItem('userId'));

        let user = users.find(x => x.userId == userId);
        return user.permissions.find(x => x.screenId == screenId).canRead;
    }

    static fnGetCreatePermissions(screenId: number): boolean {
        let userId = JSON.parse(localStorage.getItem('userId'));
        let user = users.find(x => x.userId == userId);
        return user.permissions.find(x => x.screenId == screenId)?.canRead;
    }

    static fnGetUpdatePermissions(screenId: number): boolean {
        let userId = JSON.parse(localStorage.getItem('userId'));
        let user = users.find(x => x.userId == userId);
        return user.permissions.find(x => x.screenId == screenId)?.canUpdate;
    }

    static fnGetDeletePermissions(screenId: number): boolean {
        let userId = JSON.parse(localStorage.getItem('userId'));
        let user = users.find(x => x.userId == userId);
        return user.permissions.find(x => x.screenId == screenId)?.canDelete;
    }

    static fnGetUserModuleMenu(): any {
        let userId = JSON.parse(localStorage.getItem('userId'));
        if (!userId)
            return []
        return users.find(x => x.userId == userId).permissions.filter(x => x.canRead).map(x => x.moduleId)
    }
    static fnGetUserSubMenu(): Array<number> {
        let userId = JSON.parse(localStorage.getItem('userId'));
        if (!userId)
            return []
        return users.find(x => x.userId == userId).permissions.filter(x => x.canRead).map(x => x.menuId)
    }

}