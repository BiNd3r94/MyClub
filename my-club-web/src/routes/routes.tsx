import Home from "../views/Home";
import TeamDetail from "../components/team/TeamDetail";
import SectionDetail from "../views/section/SectionDetail";
import React from "react";
import EventDetail from "../views/events/EventDetail";
import ClubDetail from "../views/club/ClubDetail";
import {ClubForm} from "../views/club/ClubForm";
import SectionForm from "../views/section/SectionForm";
import Clubs from "../views/club/Clubs";
import {TeamsView} from "../views/team/TeamsView";

export const routes: Route[] = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/clubs/:clubId",
        element: <ClubDetail/>
    },
    {
        path: "/clubs/create/",
        element: <ClubForm/>
    },
    {
        path: "/clubs/",
        element: <Clubs/>
    },
    {
        path: "/teams",
        element: <TeamsView/>
    },
    {
        path: "/teams/:teamId",
        element: <TeamDetail/>,
    },
    {
        path: "/sections/:sectionId",
        element: <SectionDetail/>,
    },
    {
        path: "/clubs/:clubId/sections/create/",
        element: <SectionForm/>,
    },
    {
        path: "/events/:eventId",
        element: <EventDetail eventId={1} openOverview={window.location.reload}/>
    }
];

type Route = {
    path: string,
    element: JSX.Element
}

