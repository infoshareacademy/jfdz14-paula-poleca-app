import React, { Component } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";
import {
  FacebookShareCount,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
 } from "react-share";

import './Share.css';

export default class Share extends Component {
  render() {
    const shareUrl = 'http://app.paulapoleca.jfdz14.is-academy.pl/';
    const title = 'Paula Poleca App';

    return (
      <div className="Share__container">
        <div className="Share__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Share__some-network__share-button"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl} className="Share__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
        </div>

        <div className="Share__some-network">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Share__some-network__share-button"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <div className="Share__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Share__some-network">
          <LinkedinShareButton url={shareUrl} className="Share__some-network__share-button">
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
        </div>

      </div>
    );
  }
}



