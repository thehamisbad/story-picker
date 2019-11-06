import * as React from 'react';

import './modal.scss';

export interface ModalProperties {
    content: JSX.Element;
    buttonText: string;
}

interface ModalState {
    open: boolean;
}

class Modal extends React.Component<ModalProperties, ModalState> {

    divRef: HTMLDivElement;

    constructor(props: ModalProperties) {
        super(props);
        this.state = {
            open: false,
        };
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this));
    }

    handleClickOutside(event:any) {
        if (this.divRef && !this.divRef.contains(event.target)) {
            this.closeModal();
        }
    }

    bindRef(node: HTMLDivElement) {
        this.divRef = node;
    }

    openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    render() {
        const modal = this.state.open ? (
            <div className='Modal'>
                <div className='Modal-content' ref={ this.bindRef.bind(this) }>
                    <span className="Modal-close" onClick={ this.closeModal.bind(this) }>&times;</span>
                    { this.props.content }
                </div>
            </div>
        ) : '';
        return (
            <div className='Modal-container'>
                <button 
                    className='Modal-button'
                    onClick={ this.openModal.bind(this) }
                >
                    { this.props.buttonText }
                </button>

                { modal }
            </div>
        )
    }
}

export default Modal;