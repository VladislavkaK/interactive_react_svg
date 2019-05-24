import * as React from 'react';

/**
 * Карта России
 * @param mapData
 */

export const MapRussia = (props: any) => {
    const {
        mapData,
        className,
        onMouseMove,
        onMouseHover,
        onMouseOut,
        hover,
        nameRegion,
        leftMouse,
        topMouse
    } = props;

    return (
        <React.Fragment>
            <svg width="100%" height="100%" viewBox={mapData.viewBox} version="1.1" >

                <g transform="scale(0.68) translate(0, 0)" fill="none">

                    {mapData.locations.map((location: any) => {
                        return (
                            <path
                                className={className}
                                id={location.id}
                                name={location.name}
                                d={location.d}
                                stroke={location.stroke}
                                strokeWidth={location.strokeWidth}
                                key={location.id}
                                onMouseMove={(e) => onMouseMove(e)}
                                onMouseOver={(e) => onMouseHover(e)}
                                onMouseOut={onMouseOut} />
                        )
                    })}

                </g>

            </svg>

            <div className={`description_data ${hover}`} style={{ left: leftMouse, top: topMouse }}  >{nameRegion}</div>
        </React.Fragment>

    )
}

export default MapRussia;