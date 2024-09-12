import React from 'react';
import cogoToast from 'cogo-toast'; // Import Cogo Toast

const App = () => {
  // Function to handle toast notifications
  const showToast = (type) => {
    switch (type) {
      case 'success':
        cogoToast.success('This is a success message!', { position: 'top-right' });
        break;
      case 'info':
        cogoToast.info('This is an info message!', { position: 'top-right' });
        break;
      case 'loading':
        const { hide } = cogoToast.loading('Loading...', { position: 'top-right' });
        // Simulate an async operation, then hide the toast
        setTimeout(() => {
          hide(); // Manually hide the loading toast
          cogoToast.success('Loaded successfully!', { position: 'top-right' });
        }, 2000);
        break;
      case 'warn':
        cogoToast.warn('This is a warning message!', { position: 'top-right' });
        break;
      case 'error':
        cogoToast.error('This is an error message!', { position: 'top-right' });
        break;
      default:
        cogoToast.info('This is a default info message!', { position: 'top-right' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello, React with Cogo Toast!</h1>
      {/* Buttons to trigger different types of toasts */}
      <button onClick={() => showToast('success')} style={{ margin: '5px' }}>
        Show Success Toast
      </button>
      <button onClick={() => showToast('info')} style={{ margin: '5px' }}>
        Show Info Toast
      </button>
      <button onClick={() => showToast('loading')} style={{ margin: '5px' }}>
        Show Loading Toast
      </button>
      <button onClick={() => showToast('warn')} style={{ margin: '5px' }}>
        Show Warning Toast
      </button>
      <button onClick={() => showToast('error')} style={{ margin: '5px' }}>
        Show Error Toast
      </button>
    </div>
  );
};

export default App;
