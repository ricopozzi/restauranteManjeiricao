import ReactMapGl, { Marker} from 'react-map-gl'
import { useState } from 'react'


export function Map(){

  const [ viewport, setViewport ] = useState({
    width:'100%',
    height: '100%',
    latitude: -23.776502148883484,
    longitude: -45.35731957292647,
    zoom: 12
  })
  return(
    <ReactMapGl
    mapStyle="mapbox://styles/ricopozzi/ckzir90ed000614o4bg6rtgkw"
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onMouseDown={viewp => setViewport(viewp)}
    scrollZoom={true}

    >
      <Marker
      latitude={-23.77686}
      longitude={-45.35770}

      >

      </Marker>

    </ReactMapGl>
  )
}