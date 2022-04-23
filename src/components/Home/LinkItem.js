import { Tooltip } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const useStyles = makeStyles(theme => ({
  customTooltip: {
    backgroundColor: 'black',
  },
  customArrow: {
    color: 'black',
  },
}))

const LinkItem = (props) => {

  const classes = useStyles()

  const {title, link, mainLink} = props
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
  }

  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false)
    }, 5000)
  })

  return (
    <div className='flex-col md:grid md:grid-cols-2 mb-2 text-xl'>
      <div className='font-bold'>{title.toUpperCase()}</div>
      
      <div className='mt-2 mb-4 break-words md:text-right'>
        <CopyToClipboard text={mainLink === undefined ? link : mainLink} onCopy={handleCopy}>
          <div>
            <Tooltip
              classes={{
                tooltip: classes.customTooltip,
                arrow: classes.customArrow
              }}
              TransitionComponent={Fade}
              TransitionProps={{timeout: 600}}
              title={<span className='font-bold text-base'>{copied ? 'Copied' : 'Copy'}</span>}
              placement="top"
              arrow
            >
              <span className='hover:bg-slate-400 hover:p-1 hover:cursor-pointer'>{link}</span>
            </Tooltip>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
 
export default LinkItem;