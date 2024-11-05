import Home from "../views/Home";
import TeamDetail from "../views/team/TeamDetail";
import SectionDetail from "../views/section/SectionDetail";
import React from "react";
import EventDetail from "../views/events/EventDetail";
import Teams from "../views/team/Teams";
import ClubDetail from "../views/club/ClubDetail";
import {ClubForm} from "../views/club/ClubForm";
import SectionForm from "../views/section/SectionForm";
import Clubs from "../views/club/Clubs";

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
    element: <Teams teams={[]}/>
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

