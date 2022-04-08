import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkItem = (props) => {

  const {title, link, mainLink} = props
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false)
    }, 2000)
  })

  return (
    <div className='grid grid-cols-2'>
      <div>{title}</div>
      
      <div className='text-right'>
        <CopyToClipboard text={mainLink === undefined ? link : mainLink} onCopy={handleCopy}>
          <div>
            <span className='hover:bg-slate-400 hover:rounded-lg hover:p-1 hover:cursor-pointer'>{link}</span>
            <div>{copied && <small className='text-sky-600'>Copied</small>}</div>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
 
export default LinkItem;