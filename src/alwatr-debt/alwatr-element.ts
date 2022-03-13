import {css, LitElement} from 'lit';
import {createLogger} from '@alwatr/logger';
import type {PropertyValues, CSSResultGroup} from 'lit';

// @TODO: refactor to separate mixins
export class AlwatrElement extends LitElement {
  static override styles: CSSResultGroup = css`
    :host {
      display: block;
    }
  `;

  protected _logger = createLogger(`<${this.tagName}>`);

  constructor() {
    super();
    this._logger.logMethod('constructor');
  }

  override connectedCallback(): void {
    this._logger.logMethod('connectedCallback');
    super.connectedCallback();
  }

  override disconnectedCallback(): void {
    this._logger.logMethod('disconnectedCallback');
    super.disconnectedCallback();
  }

  protected override update(_changedProperties: PropertyValues): void {
    this._logger.logMethod('update');
    super.update(_changedProperties);
  }

  protected override firstUpdated(_changedProperties: PropertyValues): void {
    this._logger.logMethod('firstUpdated');
    super.firstUpdated(_changedProperties);
  }

  override dispatchEvent(event: CustomEvent | Event): boolean {
    this._logger.logMethodArgs('dispatchEvent', {type: event.type});
    return super.dispatchEvent(event);
  }
}