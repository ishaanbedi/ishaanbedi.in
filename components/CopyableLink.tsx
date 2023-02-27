import * as React from "react";
import {
  PlasmicCopyableLink,
  DefaultCopyableLinkProps,
} from "./plasmic/ishaanbedi_in/PlasmicCopyableLink";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
export interface CopyableLinkProps extends DefaultCopyableLinkProps {}

function CopyableLink_(props: CopyableLinkProps, ref: HTMLElementRefOf<"div">) {
  return <PlasmicCopyableLink root={{ ref }} {...props} />;
}

const CopyableLink = React.forwardRef(CopyableLink_);
export default CopyableLink;
