import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-unrelated-component',
  shadow: true,
})
export class MyUnrelatedComponent {
  render() {
    return <div>😃</div>;
  }
}
