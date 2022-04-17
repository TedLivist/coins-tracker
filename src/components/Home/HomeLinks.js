import React, { useEffect, useState } from 'react';
import { blockchainExtract } from '../../helpers/blockchainExtract';
import LinkItem from './LinkItem';

const HomeLinks = (props) => {

  const { website, blockchainSites, chatUrls, telegramhandle, twitterhandle } = props

  const [formattedUrls, setFormattedUrls] = useState([])

  useEffect(() => {
    setFormattedUrls(blockchainExtract(blockchainSites))
  }, [blockchainSites])

  return (
    <div className='px-3 mt-5 mb-5'>
      <h2 className='text-center'>Links</h2>
      <LinkItem title='Website' link={website} />
      <h4 className='border-b-2 border-black mt-3'>Explorers</h4>
      {formattedUrls.map((url) => (
        <div key={url.cappedName}>
          <LinkItem title={url.cappedName} link={url.shortUrl} mainLink={url.url} />
        </div>
      ))}
      {chatUrls[0] !== '' && (
        <div>
          <h4 className='border-b-2 border-black mt-4'>Chat Links</h4>
          {chatUrls.map((chatUrl) => {
            if (chatUrl !== '') {
              return <LinkItem title='Chat' key={chatUrl} link={chatUrl} />
            }
          })}
        </div>
      )}
      {(twitterhandle !== '' || telegramhandle !== '') && (
        <h5 className='border-b-2 border-black mt-3'>Socials</h5>
      )} 
      {twitterhandle !== '' && (
        <div>
          <LinkItem title="Twitter" link={twitterhandle} mainLink={`twitter.com/${twitterhandle}`} />
        </div>
      )}
      {telegramhandle !== '' && (
        <div>
          <LinkItem title="Telegram" link={telegramhandle} mainLink={`t.me/${telegramhandle}`} />
        </div>
      )}
    </div>
  );
}
 
export default HomeLinks;