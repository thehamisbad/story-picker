import * as React from 'react';
import { throttle } from 'lodash';
const classnames = require('classnames');

import './scrollShadows.scss';

export interface ScrollShadowsProps {
    scrollId: string;
}

interface ScrollShadowsState {
    showLeft: boolean;
    showRight: boolean;
}

class ScrollShadows extends React.Component<ScrollShadowsProps, ScrollShadowsState> {

    constructor(props: ScrollShadowsProps) {
        super(props);
        this.state = {
            showLeft: false,
            showRight: false,
        }
    }

    componentDidMount() {
        const scrollElement = document.getElementById(this.props.scrollId);
        this.showShadows(scrollElement);
        const showShadowsThrottled = throttle(this.showShadows.bind(this), 250);
        scrollElement.addEventListener('scroll', () => {
            showShadowsThrottled(scrollElement);
        });

        window.addEventListener('resize', () => {
            showShadowsThrottled(scrollElement);
        });
    }

    showShadows(scrollWrapper: Element) {
        const scroll = scrollWrapper.firstElementChild;
        console.log(scrollWrapper.clientWidth, scrollWrapper.scrollLeft, scroll.clientWidth);

        if (scrollWrapper.scrollLeft > 10) {
            this.setState({ showLeft: true })
        } else {
            this.setState({ showLeft: false });
        }

        if (scroll.clientWidth - (scrollWrapper.clientWidth + scrollWrapper.scrollLeft) > 10) {
            this.setState({ showRight: true });
        } else {
            this.setState({ showRight: false });
        }
    }

    render() {
        return (
            <div className='ScrollShadows'>
                { this.props.children }
                <div className={
                    classnames('ScrollShadow--left', this.state.showLeft ? 'showShadow' : '')
                    }></div>
                <div className={
                    classnames('ScrollShadow--right', this.state.showRight ? 'showShadow' : '')
                    }></div>
            </div>
        )
    }
}

export default ScrollShadows;