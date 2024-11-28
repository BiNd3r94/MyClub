import React, {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

type LinkButtonProps = {
    link: string,

}
export const LinkButton = (props: PropsWithChildren<LinkButtonProps>) => {

    return (
        <Link className="p-button m-3 flex justify-content-center" to={props.link}>{props.children}</Link>
    )
}