import { Component, Prop, Element } from '@stencil/core';
import { BindModel, TableOfContentProperty} from "@cardinal/internals";

@Component({
  tag: 'psk-echo'
})

export class PskEcho {
  @Element() htmlElement: HTMLElement;
  @BindModel() modelHandler;

  @TableOfContentProperty({
    description: `This property is a string that will permit the developer to print a bound value from controller.`,
    propertyType: `string | null`,
    isMandatory: true,
    defaultValue: `null`
  })
  @Prop() value: string | null = null;

  render() {
    if(!this.htmlElement.isConnected) return null;
    return (this.value ? this.value : null);
  }
}
