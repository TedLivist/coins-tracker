import React, { useEffect, useState } from 'react';
import { blockchainExtract } from '../../helpers/blockchainExtract';
import LinkItem from './LinkItem';

const HomeLinks = (props) => {

  const { website, blockchainSites, chatUrls, telegramhandle, twitterhandle } = props

  const [formattedUrls, setFormattedUrls] = useState([])

  useEffect(() => {
    setFormattedUrls(blockchainExtract(blockchainSites))
    console.log(chatUrls)
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
          <h2>Chat Links</h2>
          {chatUrls.map((chatUrl) => {
            if (chatUrl !== '') {
              return <LinkItem title='Chat' key={chatUrl} link={chatUrl} />
            }
          })}
        </div>
      )}
      {(twitterhandle !== '' || telegramhandle !== '') && (
        <h2>Socials</h2>
      )} 
      {twitterhandle !== '' && (
        <div>
          <LinkItem title="Twitter" link={twitterhandle} />
        </div>
      )}
      {telegramhandle !== '' && (
        <div>
          <LinkItem title="Telegram" link={telegramhandle} />
        </div>
      )}
    </div>
  );
}
 
export default HomeLinks;