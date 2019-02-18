import * as React from 'react'

export const JobOpeningMeta = (props: any) => {
  return (
    <div className='ant-card-meta'>
      <div className='ant-card-meta-detail'>
        <div className='ant-card-meta-title'>
          {props.title}
        </div>
        <div className='card-meta-subtitle'>
          {props.experience}
        </div>
        <span className='card-meta-label'>
          {props.state}
        </span>
        <div className='ant-card-meta-description truncate-text'>
          {props.content}
        </div>
        <div className='card-meta-date'>
          Expire Date: {props.expiresAt.toDateString()}
        </div>
      </div>
    </div>
  )
}
