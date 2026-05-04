import { useEffect } from 'react';

const FORM_EMBED_SCRIPT_SRC = 'https://link.msgsndr.com/js/form_embed.js';
const FORM_ID = 'IlR1NFfnUvT1ZjzbF9jB';
const IFRAME_ID = `inline-${FORM_ID}`;

/**
 * LeadConnector / GoHighLevel inline form embed.
 *
 * The accompanying form_embed.js script auto-resizes the iframe to fit
 * its content. We load it once per session and reuse for any instance.
 */
const LeadConnectorForm = () => {
  useEffect(() => {
    // Avoid loading the script more than once.
    if (document.querySelector(`script[src="${FORM_EMBED_SCRIPT_SRC}"]`)) {
      return;
    }
    const script = document.createElement('script');
    script.src = FORM_EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
      style={{ width: '100%', height: '857px', border: 'none', borderRadius: '8px' }}
      id={IFRAME_ID}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="divinelabworx form"
      data-height="857"
      data-layout-iframe-id={IFRAME_ID}
      data-form-id={FORM_ID}
      title="divinelabworx form"
    />
  );
};

export default LeadConnectorForm;
