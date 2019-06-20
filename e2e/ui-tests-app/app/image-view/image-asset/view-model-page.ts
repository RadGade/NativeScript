﻿import * as dialogs from "tns-core-modules/ui/dialogs";
import * as observable from "tns-core-modules/data/observable";
import * as imageAssetModule from "tns-core-modules/image-asset";
import { ImageSource } from "tns-core-modules/image-source";

let _cameraImageAsset = null;
let _cameraImageSrc = null;

export class ImageViewModel extends observable.Observable {

    constructor() {
        super();
        let asset = new imageAssetModule.ImageAsset("~/resources/images/splashscreen.png");
        asset.options = {
            width: 300,
            height: 300,
            keepAspectRatio: true
        };
        let source = new ImageSource();
        source.fromAsset(asset).then((source) => {
            this.set("cameraImageAsset", asset);
            this.set("cameraImageSrc", source);
        }, (error) => {
            console.log(error);
        });
    }

    get cameraImageAsset(): string {
        return _cameraImageAsset;
    }

    set cameraImageAsset(value: string) {
        _cameraImageAsset = value;
    }

    get cameraImageSrc(): string {
        return _cameraImageSrc;
    }

    set cameraImageSrc(value: string) {
        _cameraImageSrc = value;
    }
}
export var imageViewModel = new ImageViewModel();
