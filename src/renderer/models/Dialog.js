// @flow
import { makeMandatory } from '../store/utils';
import { App, BaseModel } from './index';

export default class Dialog extends BaseModel {
  static get entity () {
    return 'dialog';
  }

  static fields () {
    return {
      id: this.attr(null, makeMandatory('id')),
      appId: this.attr(null, makeMandatory('appId')),
      inDisplay: this.string(null).nullable(),
      contextType: this.string(null),
      contextId: this.string(null)
    };
  }

  get parent () {
    return App.query().whereId(this.appId).first();
  }
}
