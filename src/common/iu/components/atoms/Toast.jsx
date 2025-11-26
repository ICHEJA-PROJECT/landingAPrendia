import { useEffect } from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const Toast = ({ type = 'info', message, onClose, duration = 5000 }) => {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    const icons = {
        success: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
        error: <ExclamationCircleIcon className="w-6 h-6 text-red-500" />,
        warning: <InformationCircleIcon className="w-6 h-6 text-yellow-500" />,
        info: <InformationCircleIcon className="w-6 h-6 text-blue-500" />
    };

    const bgColors = {
        success: 'bg-green-50 border-green-200',
        error: 'bg-red-50 border-red-200',
        warning: 'bg-yellow-50 border-yellow-200',
        info: 'bg-blue-50 border-blue-200'
    };

    const textColors = {
        success: 'text-green-800',
        error: 'text-red-800',
        warning: 'text-yellow-800',
        info: 'text-blue-800'
    };

    return (
        <div className={`fixed bottom-5 right-5 z-50 flex items-start p-4 mb-4 rounded-lg border shadow-lg max-w-md transition-all duration-300 transform translate-y-0 opacity-100 ${bgColors[type]}`}>
            <div className="shrink-0">
                {icons[type]}
            </div>
            <div className={`ml-3 text-sm font-medium ${textColors[type]}`}>
                {message}
            </div>
            <button
                type="button"
                className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${textColors[type]} hover:bg-white/50`}
                onClick={onClose}
                aria-label="Close"
            >
                <span className="sr-only">Close</span>
                <XMarkIcon className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Toast;
