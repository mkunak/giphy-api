import { Component, ErrorInfo, ReactNode } from 'react';

import WindowCover from '../WindowCover';

import ErrorGear from '../../assets/images/gear.gif';
import { toaster } from '../../utils/Toaster';

type TState = {
  hasError: boolean,
  info: null | ErrorInfo,
  error: null | Error,
}

type TProps = {
  children?: ReactNode
}

class ErrorBoundary extends Component<TProps> {
  state: TState = {
    hasError: false,
    info: null,
    error: null,
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      info,
      error,
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      toaster.onError(this.state.error?.message);
      console.log('ErrorInfo | stack:', this.state.info?.componentStack);
      return (
        <WindowCover>
          <div className="d-flex bg-warning p-5">
            <img src={ErrorGear} width="135" height="150" alt="gear"/>
            <div className="w-100 pt-4">
              <h2 className="text-center text-danger">BOOM!</h2>
              <p className="text-center text-dark">Something went wrong.</p>
            </div>
          </div>
        </WindowCover>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
