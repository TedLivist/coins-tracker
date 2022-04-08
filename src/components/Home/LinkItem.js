import { Tooltip } from '@material-ui/core';
import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
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

  return (
    <div className='grid grid-cols-2'>
      <div>{title}</div>
      
      <div className='text-right'>
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
              <span className='hover:bg-slate-400 hover:rounded-lg hover:p-1 hover:cursor-pointer'>{link}</span>
            </Tooltip>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
 
export default LinkItem;