// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GithubSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GithubSvgrepoComsvgIcon(props: GithubSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M12 2a10 10 0 00-3.16 19.5c.5.08.66-.23.66-.5v-1.69C6.73 19.91 6.14 18 6.14 18A2.69 2.69 0 005 16.5c-.91-.62.07-.6.07-.6a2.1 2.1 0 011.53 1 2.15 2.15 0 002.91.83 2.16 2.16 0 01.63-1.34C8 16.17 5.62 15.31 5.62 11.5a3.87 3.87 0 011-2.71 3.58 3.58 0 01.1-2.64s.84-.27 2.75 1a9.63 9.63 0 015 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 01.1 2.64 3.87 3.87 0 011 2.71c0 3.82-2.34 4.66-4.57 4.91a2.39 2.39 0 01.69 1.85V21c0 .27.16.59.67.5A10 10 0 0012 2z"
        }
      ></path>
    </svg>
  );
}

export default GithubSvgrepoComsvgIcon;
/* prettier-ignore-end */
