"use client";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar, Download, Phone } from 'lucide-react';
import { downloadServicePdfWithFallback } from '@/lib/downloadService';
import ThankYouPopup from '@/components/ThankYouPopup';

/**
 * QuickActions component displays a set of action buttons for a regulatory service.
 * Props:
 * - actions: array of { label, icon, onClick, href, variant }
 * - serviceKey: string - The regulatory service key for PDF mapping
 * - serviceName: string - The display name of the service
 */
const iconMap = {
  Calendar,
  Download,
  Phone,
};

const buttonClass = variant =>
  variant === 'primary'
    ? 'text-white font-semibold rounded px-4 py-2 w-full flex items-center justify-center gap-2 mb-2 shadow'
    : variant === 'secondary'
    ? 'font-semibold rounded px-4 py-2 w-full flex items-center justify-center gap-2 mb-2 bg-white dark:bg-black shadow'
    : 'font-medium rounded px-4 py-2 w-full flex items-center justify-center gap-2 hover:underline';

const QuickActions = ({ actions, serviceKey, serviceName }) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [downloadedFilename, setDownloadedFilename] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    console.log('Download button clicked!', { serviceKey, serviceName });
    
    if (!serviceKey || !serviceName) {
      console.error('Service key or name not provided for PDF download');
      alert('Service information not available for download.');
      return;
    }

    setIsDownloading(true);
    
    try {
      console.log('Starting PDF download...');
      const result = await downloadServicePdfWithFallback(serviceKey, serviceName);
      console.log('Download result:', result);
      
      if (result.success) {
        setDownloadedFilename(result.filename);
        setShowThankYou(true);
        console.log('Download successful, showing thank you popup');
      } else {
        console.error('Download failed:', result.error);
        alert(`Download failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Download error:', error);
      alert('An unexpected error occurred during download.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div className="bg-white dark:bg-black rounded-xl shadow p-6 md:p-8 mb-6">
        <h2 className="text-lg font-semibold mb-4" style={{ color: '#139A93' }}>Quick Actions</h2>
        <div className="flex flex-col gap-2">
          {actions.map((action, idx) => {
            const Icon = iconMap[action.icon] || null;
            const getButtonStyle = (variant) => {
              if (variant === 'primary') {
                return { backgroundColor: '#139A93', color: 'white' };
              } else if (variant === 'secondary') {
                return { border: '1px solid #139A93', color: '#139A93' };
              } else {
                return { color: '#139A93' };
              }
            };

            // Handle download button specially
            const isDownloadButton = action.label.toLowerCase().includes('download') && action.icon === 'Download';
            const buttonOnClick = isDownloadButton ? handleDownload : action.onClick;
            const buttonDisabled = isDownloadButton && isDownloading;

            // For download buttons, always render as button regardless of href
            if (isDownloadButton) {
              return (
                <button
                  key={idx}
                  onClick={buttonOnClick}
                  className={buttonClass(action.variant)}
                  style={{
                    ...getButtonStyle(action.variant),
                    ...(buttonDisabled && { opacity: 0.6, cursor: 'not-allowed' })
                  }}
                  type="button"
                  disabled={buttonDisabled}
                >
                  {Icon && <Icon className="w-5 h-5" />} 
                  {isDownloading ? 'Downloading...' : action.label}
                </button>
              );
            }

            return action.href ? (
              <a
                key={idx}
                href={action.href}
                target={action.target || '_self'}
                rel="noopener noreferrer"
                className={buttonClass(action.variant)}
                style={getButtonStyle(action.variant)}
              >
                {Icon && <Icon className="w-5 h-5" />} {action.label}
              </a>
            ) : (
              <button
                key={idx}
                onClick={buttonOnClick}
                className={buttonClass(action.variant)}
                style={{
                  ...getButtonStyle(action.variant),
                  ...(buttonDisabled && { opacity: 0.6, cursor: 'not-allowed' })
                }}
                type="button"
                disabled={buttonDisabled}
              >
                {Icon && <Icon className="w-5 h-5" />} 
                {isDownloading && isDownloadButton ? 'Downloading...' : action.label}
              </button>
            );
          })}
        </div>
      </div>

      <ThankYouPopup
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        filename={downloadedFilename}
        serviceName={serviceName}
      />
    </>
  );
};

QuickActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
      onClick: PropTypes.func,
      href: PropTypes.string,
      variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
      target: PropTypes.string,
    })
  ).isRequired,
  serviceKey: PropTypes.string,
  serviceName: PropTypes.string,
};

export default QuickActions; 