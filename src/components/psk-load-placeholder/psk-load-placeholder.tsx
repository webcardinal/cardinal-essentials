import { Component, h, State, Element } from "@stencil/core";
import { CustomTheme } from "@cardinal/internals";

/**
 * @disable cheatsheet
 */
@Component({
  tag: 'psk-load-placeholder',
  shadow: true
})
export class PskLoadPlaceholder {
  @Element() htmlElement: HTMLElement;

  @CustomTheme()
  @State() shouldBeRendered: boolean = false;

  componentDidLoad() {
    setTimeout(()=>{
      this.shouldBeRendered = true
    },0);

  }

  render() {
    if(!this.htmlElement.isConnected) return null;
    
    if (this.shouldBeRendered) {
      return (
        <slot/>
      );
    }
  }
}
