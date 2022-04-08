import React, { useEffect, useState } from 'react';
import { blockchainExtract } from '../../helpers/blockchainExtract';

const HomeLinks = (props) => {

  const { homepage, blockchainSites, chatUrls } = props

  const [formattedUrls, setFormattedUrls] = useState([])

  useEffect(() => {
    setFormattedUrls(blockchainExtract(blockchainSites))
  }, [])

  return (
    <div>Haha</div>
  );
}
 
export default HomeLinks;