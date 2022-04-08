import { Tooltip } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkItem = (props) => {

  const {title, link, mainLink} = props
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
  }

  return (
    <div className='grid grid-cols-2'>
      <div>{title}</div>
      
      <div className='text-right'>
        <CopyToClipboard text={mainLink === undefined ? link : mainLink} onCopy={handleCopy}>
          <div>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{timeout: 600}}
              title={copied ? 'Copied' : 'Copy'}
            >
              <span className='hover:bg-slate-400 hover:rounded-lg hover:p-1 hover:cursor-pointer'>{link}</span>
            </Tooltip>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
 
export default LinkItem;