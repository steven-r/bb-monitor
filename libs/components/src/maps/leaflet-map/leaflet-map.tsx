import { Children, FC, FunctionComponent, PropsWithChildren, ReactChild, ReactText } from "react";
import { LayoutProps } from "@stevenr/shared";
import L from "leaflet";
import {
    MapContainer,
    TileLayer,
    Marker as MarkerComponent,
    Popup,
    Circle,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapBoxAccessKey } from "@stevenr/shared/data";
import { StyledMap } from "./style";

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface IProps extends LayoutProps {
    /**
     * Required. Pass google maps latitude
     */
    lat: number;
    /**
     * Required. Pass google maps longitude
     */
    lng: number;
    /**
     * 	The initial Map zoom level. Required. Valid values: Integers between zero, and up to the supported maximum zoom level.
     */
    zoom?: number;
    /**
     * Pass `true` to make map zoomable
     */
    scrollWheelZoom?: boolean;
}

type IChild = Exclude<ReactChild, ReactText>;

export const LeafletMap: FC<PropsWithChildren<IProps>> = ({
    width,
    height,
    lat,
    lng,
    zoom,
    scrollWheelZoom,
    children,
}) => {
    const RenderChild = Children.map(children, (el) => {
        const child = el as IChild;
        if (child !== null) {
            const childType = child.type as FunctionComponent;
            const name = childType.displayName || childType.name;
            if (name === "LeafletMarker") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
            if (name === "LeafletCircle") {
                return <child.type lat={lat} lng={lng} {...child.props} />;
            }
        }
        return null;
    });
    return (
        <StyledMap width={width} height={height}>
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                scrollWheelZoom={scrollWheelZoom}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    accessToken={MapBoxAccessKey}
                />
                {RenderChild}
            </MapContainer>
        </StyledMap>
    );
};

LeafletMap.defaultProps = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
    scrollWheelZoom: false,
    width: "100%",
    height: "400px",
};

interface IMarkerProps {
    lat: number;
    lng: number;
}

export const LeafletMarker: FC<PropsWithChildren<IMarkerProps>> = ({ lat, lng, children }) => {
    return <MarkerComponent position={[lat, lng]}>{children}</MarkerComponent>;
};

type ILeafletPopupProps = {}

export const LeafletPopup: FC<PropsWithChildren<ILeafletPopupProps>> = ({ children }) => {
    return <Popup>{children}</Popup>;
};

export interface LayerOptions {
    pane?: string;
    attribution?: string;
}

export interface InteractiveLayerOptions extends LayerOptions {
    interactive?: boolean;
    bubblingMouseEvents?: boolean;
}

export type LineCapShape = "butt" | "round" | "square" | "inherit";

export type LineJoinShape = "miter" | "round" | "bevel" | "inherit";

export type FillRule = "nonzero" | "evenodd" | "inherit";

export interface PathOptions extends InteractiveLayerOptions {
    stroke?: boolean;
    color?: string;
    weight?: number;
    opacity?: number;
    lineCap?: LineCapShape;
    lineJoin?: LineJoinShape;
    dashArray?: string | number[];
    dashOffset?: string;
    fill?: boolean;
    fillColor?: string;
    fillOpacity?: number;
    fillRule?: FillRule;
}

interface ICircleProps extends IMarkerProps, PathOptions {
    radius?: number;
}

export const LeafletCircle: FC<ICircleProps> = ({
    lat,
    lng,
    radius,
    stroke,
    color,
    weight,
    opacity,
    lineCap,
    lineJoin,
    dashArray,
    dashOffset,
    fill,
    fillColor,
    fillOpacity,
    fillRule,
}) => {
    const fillBlueOptions = {
        stroke,
        color,
        weight,
        opacity,
        lineCap,
        lineJoin,
        dashArray,
        dashOffset,
        fill,
        fillColor,
        fillOpacity,
        fillRule,
    };
    return (
        <Circle
            center={[lat, lng]}
            radius={radius}
            pathOptions={fillBlueOptions}
        />
    );
};

LeafletCircle.defaultProps = {
    radius: 200,
    stroke: true,
    color: "red",
    weight: 2,
    opacity: 1,
    lineCap: "inherit",
    lineJoin: "inherit",
    fill: true,
    fillColor: "blue",
    fillOpacity: 0.8,
    fillRule: "inherit",
};
