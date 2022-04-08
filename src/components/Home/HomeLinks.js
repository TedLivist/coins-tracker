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
    </div>
  );
}
 
export default HomeLinks;