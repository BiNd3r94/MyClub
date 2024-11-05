import React, {PropsWithChildren} from "react";

type LinkButtonProps = {
  link: string,

}
export const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {

  return (
      <a className="p-button mt-3" href={props.link}>{props.children}</a>
  )
}