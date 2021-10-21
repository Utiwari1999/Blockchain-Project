import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'


const LoadingComponent = () => (
    <>
  <PlaceholderLoading shape="rect" width={1400} height={10} colorStart={"#D9D3D2"} colorEnd={"#7B7776"}/>
  <br/>
  </>
)
export default function LoadComponent() {
    return (
    
            <>
                              <LoadingComponent/>
                              <LoadingComponent/>
                              <LoadingComponent/>
                              <LoadingComponent/>
                              <LoadingComponent/>
                              <LoadingComponent/>
                              <LoadingComponent/>
            </>
        
        
    )
}
