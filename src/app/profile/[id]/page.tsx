import { color } from 'html2canvas/dist/types/css/types/color'
import React from 'react'

export default function UserProfile({params}:any) {
  return (
    <div>UserProfile 
        <span >{params.id} </span></div>
  )
}
