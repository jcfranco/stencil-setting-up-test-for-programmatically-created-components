import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: true,
})
export class MyComponent {
  @Prop() date: Date;

  render() {
    return (<div>
        <div class="internal">provided date is {this.date.toString()}</div>
      </div>);
  }
}
