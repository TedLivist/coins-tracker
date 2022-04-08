import React, { useEffect, useState } from 'react';
import { blockchainExtract } from '../../helpers/blockchainExtract';
import LinkItem from './LinkItem';

const HomeLinks = (props) => {

  const { website, blockchainSites, chatUrls, telegramhandle, twitterhandle } = props

  const [formattedUrls, setFormattedUrls] = useState([])

  useEffect(() => {
    setFormattedUrls(blockchainExtract(blockchainSites))
  }, [])

  return (
    <div>
      <LinkItem title='Website' link={website} />
      <h2>Blockchain Links</h2>
      {formattedUrls.map((url) => (
        <div key={url.cappedName}>
          <LinkItem title={url.cappedName} link={url.shortUrl} mainLink={url.url} />
        </div>
      ))}
      {chatUrls[0] !== '' && (
        <div>
          <h2 className='text-lg font-bold'>Chat Links</h2>
          {chatUrls.map((chatUrl) => {
            if (chatUrl !== '') {
              return <LinkItem title='Chat' key={chatUrl} link={chatUrl} />
            }
          })}
        </div>
      )}
      {(twitterhandle !== '' || telegramhandle !== '') && (
        <h2 className='font-bold text-lg'>Socials</h2>
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