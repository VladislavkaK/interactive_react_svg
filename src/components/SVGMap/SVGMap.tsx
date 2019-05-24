import * as React from 'react';
import MapRussia from '../../svg/MapRussia';
import dataRussia from '../../data/dataRussia';
import '../../styles/map.css';
import { useState } from 'react';

const SVGMap = () => {

    const [hover, setHover] = useState("");
    const [nameRegion, setNameRegion] = useState("");
    const [leftMouse, setLeftMouse] = useState("");
    const [topMouse, setTopMouse] = useState("");

    const onMouseMove = (e: any) => {
        e.target.style.left = e.pageX; 
        e.target.style.top = e.pageY - 70; 
        setLeftMouse(e.target.style.left)
        setTopMouse(e.target.style.top)
    }

    const onMouseHover = (e: any) => {
        setNameRegion(e.target.id);
        setHover("active");
    }

    const onMouseOut = () => {
        setNameRegion("");
        setHover("");
    }
    
    return (
        <div className="map_russia">
            <MapRussia 
                mapData={dataRussia} 
                className="popup"
                onMouseMove={onMouseMove}
                onMouseHover={onMouseHover}
                onMouseOut={onMouseOut}
                hover={hover}
                nameRegion={nameRegion}
                leftMouse={leftMouse}
                topMouse={topMouse} />
            
        </div>
    )
}

export default SVGMap;
