import React, { useEffect, useRef, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Tooltips } from '@material-tailwind/react';
import { TooltipsContent } from '@material-tailwind/react';

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

  const copyRef = useRef()

  return (
    <div className='grid grid-cols-2'>
      <div>
        {title}
        {/* <Button className="bg-red-600 text-amber-100" ripple="light" ref={copyRef}>
          Tooltips
        </Button>

        <Tooltips placement="top" ref={copyRef}>
          <TooltipsContent className="bg-yellow-50">Tio</TooltipsContent>
        </Tooltips> */}
      </div>
      
      <div className='text-right'>
        <CopyToClipboard text={mainLink === undefined ? link : mainLink} onCopy={handleCopy}>
          <div>
            <span ref={copyRef} className='hover:bg-slate-400 hover:rounded-lg hover:p-1 hover:cursor-pointer'>{link}</span>
            
            <Tooltips placement="top" ref={copyRef}>
              {!copied && (
                <TooltipsContent className="bg-black p-1 font-bold text-white">Copy</TooltipsContent>
              )}
              {copied && (
                <TooltipsContent className="bg-black p-1 font-bold text-white">Copied!</TooltipsContent>
              )}
            </Tooltips>
            {/* <div>{copied && <small className='text-sky-600 '>Copied</small>}</div> */}
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
 
export default LinkItem;