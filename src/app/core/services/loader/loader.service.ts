import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { LoadingOptions } from '@ionic/core';

interface Loader {
  id: string;
}
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadersSubject = new BehaviorSubject<Loader[]>([]);
  loaders$ = this.loadersSubject.asObservable();

  loadingPromise: Promise<HTMLIonLoadingElement> | undefined = undefined;

  LoadingOptions: LoadingOptions = {
    translucent: true,
    backdropDismiss: false,
    spinner: 'crescent',
  };

  constructor(private loadingCtrl: LoadingController) {
    this.loaders$.subscribe((loaders) => {
      if (loaders.length > 0) {
        this.presentLoading();
      } else {
        this.dismissLoading();
      }
    });
  }

  addLoaderAndGetId(): string {
    const loader: Loader = {
      id: this.generateId(),
    };

    const currentLoaders = this.loadersSubject.value;

    this.loadersSubject.next([...currentLoaders, loader]);

    return loader.id;
  }

  generateId(): string {
    return crypto.randomUUID();
  }

  removeLoaderById(id: string): void {
    const currentLoaders = this.loadersSubject.value.filter(
      (loader) => loader.id !== id
    );
    this.loadersSubject.next(currentLoaders);
  }

  async presentLoading() {
    this.loadingPromise = this.loadingCtrl.create(this.LoadingOptions);
    (await this.loadingPromise).present();
  }

  async dismissLoading() {
    const currentLoaders = await this.loadingPromise;
    if (currentLoaders) {
      await currentLoaders.dismiss();
    }
  }
}
