import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PageHeaderService {
    private _backCallback: (() => void) | null = null;
    private _visible$ = new BehaviorSubject<boolean>(false);

    readonly backBtnVisible$ = this._visible$.asObservable();

    showBackButton(callback: () => void): void {
        this._backCallback = callback;
        this._visible$.next(true);
    }

    hideBackButton(): void {
        this._backCallback = null;
        this._visible$.next(false);
    }

    triggerBack(): void {
        if (this._backCallback) {
            this._backCallback();
        }
    }
}
