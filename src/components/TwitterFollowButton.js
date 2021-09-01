import styles from "./TwitterFollowButton.scss";

import React from 'react'
import PropTypes from 'prop-types'

const TwitterFollowButton = ({ username, showUsername, showCount, large }) => {
  const props = {}
  if (!showUsername) {
    props[ 'data-show-screen-name' ] = 'false'
  }
  if (!showCount) {
    props[ 'data-show-count' ] = 'false'
  }
  if (large) {
    props[ 'data-size' ] = 'large'
  }
  return (
    <a href={`https://twitter.com/${username}`} className={styles.twitterFollowButton} {...props}>
      Follow @{username}
    </a>
  )
}

TwitterFollowButton.propTypes = {
  username: PropTypes.string.isRequired,
  showUserName: PropTypes.bool,
  showCount: PropTypes.bool,
  large: PropTypes.bool
}

export default TwitterFollowButton
