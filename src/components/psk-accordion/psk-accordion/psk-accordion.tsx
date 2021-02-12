import { Component, Element, h, Prop } from '@stencil/core';
import { CustomTheme, TableOfContentProperty } from '@cardinal/internals';

@Component({
  tag: 'psk-accordion',
  styleUrls: {
    default: './styles/psk-accordion.default.css',
    layout: './styles/psk-accordion.layout.css'
  },
  shadow: true,
})

export class PskAccordion {
  @CustomTheme()

  @Element() private __host: HTMLElement;

  @TableOfContentProperty({
    description: `This property decides if you can toggle more then one item of the accordion.`,
    isMandatory: false,
    propertyType: `boolean`,
    defaultValue: `false`
  })
  @Prop() multiple: boolean = false;

  @TableOfContentProperty({
    description: [
      `There is one alternative for this attribute: "default". If other value is passed, fallback plan is also the default value.`,
      `According to this property, the appearance of the component items are changing.`,
      `Future layouts will be developed soon.`
    ],
    isMandatory: false,
    propertyType: `string`,
    defaultValue: `default`
  })
  @Prop({ reflect: true, mutable: true }) layout: string = 'default';

  private __items: HTMLCollection;

  componentWillLoad() {
    this.layout = this.__getAccordionItemLayout();
  }

  componentDidLoad() {
    let parent: Element = this.__host;
    let tagName = 'psk-accordion-item'.toUpperCase();

    while (parent && parent.firstElementChild) {
      if (parent.firstElementChild.tagName === tagName) {
        this.__items = parent.children;
        break;
      }
      parent = parent.firstElementChild;
    }

    for (let i = 0; i < this.__items.length; i++) {
      this.__items[i].setAttribute('layout', this.layout);
      this.__items[i].addEventListener('psk-accordion-item:toggle', e => this.__toggleAccordionItem(e, i))
    }
  }

  __getAccordionItemLayout() {
    switch (this.layout) {
      default:
        return 'default'
    }
  }

  __getAccordionItemStatus(item) {
    if (!item.hasAttribute('opened')) return false;
    const opened = item.getAttribute('opened');
    return ['opened', 'true', ''].includes(opened);
  }

  __toggleAccordionItem(e, index) {
    e.stopImmediatePropagation();

    if (this.multiple === false) {
      for (let i = 0; i < this.__items.length; i++) {
        if (i === index) continue;
        this.__items[i].removeAttribute('opened');
      }
    }

    const item = this.__items[index];
    if (this.__getAccordionItemStatus(item)) {
      item.removeAttribute('opened');
    } else {
      item.setAttribute('opened', 'opened');
    }
  }

  render() {
    return <slot />;
  }
}
