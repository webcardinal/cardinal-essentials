import { Component, h, State } from "@stencil/core";
import { CustomTheme } from "@cardinal/internals";

@Component({
  tag: 'psk-load-placeholder',
  shadow: true
})
export class PskLoadPlaceholder {
  @CustomTheme()
  @State() shouldBeRendered: boolean = false;

  componentDidLoad() {
    setTimeout(()=>{
      this.shouldBeRendered = true
    },0);

  }

  render() {
    if (this.shouldBeRendered) {
      return (
        <slot/>
      );
    }
  }
}
