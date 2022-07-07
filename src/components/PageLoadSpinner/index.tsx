import { Layer, Spinner } from "grommet";
import { FC } from "react";

const PageLoadSpinner: FC = () => <Layer full animation="none">
    <Spinner />
</Layer>

export default PageLoadSpinner;