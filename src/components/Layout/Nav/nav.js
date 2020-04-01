import React from 'react'
import myClass from './nav.module.scss'
import AniLink from "gatsby-plugin-transition-link/AniLink";

function nav() {
    return (
        <nav>
            <ul>
            {/* <AniLink paintDrip duration={1} to="TestPage">
                Test Transition
            </AniLink> */}
                <li><a>Home</a></li>
                <li><a>Grooming</a></li>
                <li><a>Courses</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
    )
}

export default nav
