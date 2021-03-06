/**
 * ScrollTarget Higher Order Component
 * Scroll functionality in one place for use on any component
 */

import React from 'react';
const scrollToComponent = require('react-scroll-to-component');

// This function takes a component...
export function withScrollTarget(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    duration = 1000;

    componentDidMount() {
      // wait for next event loop to finish render
      setTimeout(() => {
        if (this.props.active) {
          this.scrollToComponent();
        }
      }, 0);
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevProps !== this.props && this.props.active) {
        this.scrollToComponent();
      }
    }

    scrollToComponent() {
      scrollToComponent(this.wrapper, {
        offset: this.props.scrollOffset || 0,
        align: 'top',
        duration: this.duration
      });
    }

    render() {
      return (
        <WrappedComponent
          ref={ref => {
            this.wrapper = ref;
          }}
          {...this.props}
        />
      );
    }
  };
}

export default withScrollTarget;
