import React, { useState } from 'react'
import * as styles from './index.module.scss';

export default () => {

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    e.stopPropagation()
    // @ts-ignore
    console.log(e.target.href)
    // @ts-ignore
    window.open(e.target.href, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
  }

  return <>
    <p>Tima Ramazanov Main</p>
    <p>some dataaaa </p>
    <div><a
    onClick={onClickHandler}
    href="https://twitter.com/intent/tweet?text=Join%20me%20at%20Lorem%20%0A&url=http%3A%2F%2Florem.uscreendev.com%3A3000%2F%3Freferral_code%3DcaD">twitter</a></div>
    <div><a onClick={onClickHandler} href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Florem.uscreendev.com%3A3000%2F%3Freferral_code%3DcaD&title=Join%20me%20at%20Lorem%20%0A&description=&quote=Join%20me%20at%20Lorem%20%0A&hashtag=">facebook</a></div>
  </>
}