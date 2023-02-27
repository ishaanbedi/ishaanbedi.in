// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: kWsMjK7xB47LtjfssqRijH
// Component: Q09_Cz_q24g9b
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantscUeVyOojJsaNe } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: CUeVyOojJsaNe/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ishaanbedi_in.module.css"; // plasmic-import: kWsMjK7xB47LtjfssqRijH/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Q09_Cz_q24g9b/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 82oVoziNjJ-F8/icon
import GithubSvgrepoComsvgIcon from "./icons/PlasmicIcon__GithubSvgrepoComsvg"; // plasmic-import: E95Tu5_LdJ/icon
import LinkedinRoundSvgrepoComsvgIcon from "./icons/PlasmicIcon__LinkedinRoundSvgrepoComsvg"; // plasmic-import: Bia34lzMMI/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscUeVyOojJsaNe()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__blBj7)}>
            <div className={classNames(projectcss.all, sty.freeBox__cYs6R)} />

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cwDxk)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__rVcxq)}>
                <div className={classNames(projectcss.all, sty.freeBox__fMv0Z)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lfVOl
                    )}
                  >
                    {"Ishaan Bedi"}
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kdpgo
                    )}
                  >
                    {"Developer /  WWDC 2022 Scholar / 20 y/o"}
                  </div>
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__zn1DX)}>
                <div className={classNames(projectcss.all, sty.freeBox__tVwRv)}>
                  <p.PlasmicLink
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__kkKwW
                    )}
                    component={Link}
                    href={"mailto:hi@ishaanbedi.in" as const}
                    platform={"nextjs"}
                    target={"_blank" as const}
                  >
                    {"hi@ishaanbedi.in"}
                  </p.PlasmicLink>
                </div>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__mfllK)}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ecml3)}
                  >
                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__ih52P
                      )}
                      component={Link}
                      href={"https://www.twitter.com/ishnbedi" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <IconIcon
                        className={classNames(projectcss.all, sty.svg__jmF8M)}
                        role={"img"}
                      />
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__e1YTp
                      )}
                      component={Link}
                      href={"https://github.com/ishaanbedi" as const}
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <GithubSvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg__lcd8A)}
                        role={"img"}
                      />
                    </p.PlasmicLink>

                    <p.PlasmicLink
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        sty.link__o3Uw
                      )}
                      component={Link}
                      href={
                        "https://www.linkedin.com/in/ishaanbedi13/" as const
                      }
                      platform={"nextjs"}
                      target={"_blank" as const}
                    >
                      <LinkedinRoundSvgrepoComsvgIcon
                        className={classNames(projectcss.all, sty.svg___5Xcv)}
                        role={"img"}
                      />
                    </p.PlasmicLink>
                  </p.Stack>
                </p.Stack>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.freeBox__xdTgw)} />
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
