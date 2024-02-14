import React, { Component } from 'react'
import './ErrorBoundary.css'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }


    render() {
        if (this.state.hasError) {
            if (this.props.earth) {
                return (
                    <div className='retry'>
                        <h2>Failed to fetch the model!</h2>
                        <button style={{ background: this.props.mode ? '#000' : '#fff', color: this.props.mode ? '#dadada' : '#252525' }} onClick={() => {
                            this.setState({ hasError: false })
                            this.props.setReload(true)
                        }}>
                            Retry
                        </button>
                    </div>
                )
            }
            else return (
                <div className='error-div'>
                    <h1>Oops, something went wrong!</h1>
                    <button style={{ background: this.props.mode ? '#000' : '#fff', color: this.props.mode ? '#dadada' : '#252525' }} onClick={() => window.location.reload()}>
                        Refresh Page
                    </button>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
