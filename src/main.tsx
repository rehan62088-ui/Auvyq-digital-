import { StrictMode, Component, ReactNode, ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error('[Root Error Boundary Caught]:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          backgroundColor: '#1a0505',
          color: '#ffdddd',
          padding: '24px',
          fontFamily: 'monospace, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box'
        }}>
          <div style={{
            maxWidth: '850px',
            width: '100%',
            backgroundColor: '#2a0808',
            border: '2px solid #e11d48',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 25px 60px rgba(0,0,0,0.85)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ backgroundColor: '#e11d48', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold' }}>
                  React Render Exception
                </span>
                <span style={{ fontSize: '13px', color: '#fda4af' }}>AUVYQ Digital Diagnostic</span>
              </div>
            </div>

            <h2 style={{ fontSize: '18px', color: '#ffffff', margin: '0 0 12px 0', lineHeight: 1.4 }}>
              {this.state.error?.name || 'Error'}: {this.state.error?.message || 'Unknown component render error'}
            </h2>

            {this.state.error?.stack && (
              <pre style={{
                backgroundColor: '#110303',
                border: '1px solid #7f1d1d',
                color: '#ff8888',
                padding: '14px',
                borderRadius: '8px',
                overflowX: 'auto',
                fontSize: '12px',
                lineHeight: '1.5',
                whiteSpace: 'pre-wrap',
                maxHeight: '280px'
              }}>
                {this.state.error.stack}
              </pre>
            )}

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #7f1d1d', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#e11d48',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                ↻ Reload Application
              </button>
              <button
                onClick={() => {
                  try {
                    localStorage.clear();
                    sessionStorage.clear();
                    window.location.reload();
                  } catch {
                    window.location.reload();
                  }
                }}
                style={{
                  backgroundColor: '#4c0519',
                  color: '#fda4af',
                  border: '1px solid #9f1239',
                  padding: '10px 18px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                Clear Cache &amp; Reload
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </StrictMode>,
);
