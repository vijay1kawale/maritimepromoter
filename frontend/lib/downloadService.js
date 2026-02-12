/**
 * Download Service
 * Handles PDF downloads with error handling and success tracking
 */

/**
 * Downloads a file from a given URL
 * @param {string} url - The URL to download from
 * @param {string} filename - The filename for the downloaded file
 * @returns {Promise<boolean>} - True if download was successful, false otherwise
 */
export async function downloadFile(url, filename) {
  try {
    console.log('Attempting to download:', url, 'as', filename);
    
    // Method 1: Try fetch + blob download (more reliable)
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
      
      console.log('Download completed successfully via fetch method');
      return true;
    } catch (fetchError) {
      console.log('Fetch method failed, trying direct link method:', fetchError);
      
      // Method 2: Direct link method (fallback)
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.target = '_blank';
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('Download link clicked via direct method');
      return true;
    }
  } catch (error) {
    console.error('All download methods failed:', error);
    return false;
  }
}

/**
 * Downloads a PDF for a given regulatory service
 * @param {string} serviceKey - The regulatory service key
 * @param {string} serviceName - The display name of the service
 * @returns {Promise<{success: boolean, filename?: string, error?: string}>}
 */
export async function downloadServicePdf(serviceKey, serviceName) {
  try {
    console.log('Looking up PDF for service:', serviceKey, serviceName);
    
    // Import the PDF mapping
    const { getPdfDownloadUrl, getPdfFilename } = await import('./pdfMapping');
    
    const url = getPdfDownloadUrl(serviceKey);
    const filename = getPdfFilename(serviceKey);
    
    console.log('PDF mapping result:', { url, filename });
    
    if (!url || !filename) {
      console.log('No PDF mapping found for service key:', serviceKey);
      return {
        success: false,
        error: `No PDF available for ${serviceName}`
      };
    }
    
    // Try to download the file directly without HEAD request check
    // This is more reliable for PDF downloads
    const downloadSuccess = await downloadFile(url, filename);
    
    if (downloadSuccess) {
      return {
        success: true,
        filename: filename
      };
    } else {
      return {
        success: false,
        error: `Failed to download PDF for ${serviceName}`
      };
    }
    
  } catch (error) {
    console.error('PDF download error:', error);
    return {
      success: false,
      error: `Download failed: ${error.message}`
    };
  }
}

/**
 * Downloads a PDF with a fallback to a generic checklist
 * @param {string} serviceKey - The regulatory service key
 * @param {string} serviceName - The display name of the service
 * @returns {Promise<{success: boolean, filename?: string, error?: string}>}
 */
export async function downloadServicePdfWithFallback(serviceKey, serviceName) {
  const result = await downloadServicePdf(serviceKey, serviceName);
  
  // If specific PDF not found, try to download a generic checklist
  if (!result.success) {
    try {
      const genericUrl = '/pdfs/Generic-Regulatory-Checklist.pdf';
      const genericFilename = 'Generic-Regulatory-Checklist.pdf';
      
      console.log('Falling back to generic PDF:', genericUrl);
      const downloadSuccess = await downloadFile(genericUrl, genericFilename);
      
      if (downloadSuccess) {
        return {
          success: true,
          filename: genericFilename
        };
      }
    } catch (error) {
      console.error('Generic PDF download error:', error);
    }
  }
  
  return result;
}
