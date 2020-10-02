import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Popover from '../Popover'
import { MdApps, MdLibraryBooks } from 'react-icons/md'
import { GrBook } from 'react-icons/gr'
import { mobileNavDropDownFactory } from './common'
import { FaPenFancy } from 'react-icons/fa'
import {
  GiStarFormation,
  GiStack,
  GiBookmarklet,
  GiAbstract086,
  GiCardboardBox,
} from 'react-icons/gi'
import ThemePicker from './ThemePicker'
const MobileNav = React.memo(props => {
  const {
    navLogo,
    snakeGrid,
    toc,
    searching,
    sorting,
    api,
    imageToAscii,
    nepaliDate,
    snakeGame,
  } = props
  return (
    <nav className="st-navbar">
      <Popover
        placement="bottom-start"
        offset={[0, -3]}
        elementAs={mobileNavDropDownFactory('/', 'Blogs', GiBookmarklet)}
      >
        <div className="lg-navbar__drop-down" key="1">
          <DropDownDisplayItem
            as={Link}
            to={'/blog/games/build-a-snake-game'}
            image={snakeGrid.childImageSharp.fixed}
            title="Build a Snake Game"
            info="Using javascript, HTML5 and canvas"
          />
        </div>
      </Popover>
      <Popover
        placement="bottom-start"
        offset={[0, -3]}
        elementAs={mobileNavDropDownFactory('/apps', 'Apps', GiCardboardBox)}
      >
        <div className="lg-navbar__drop-down" key="1">
          <DropDownDisplayItem
            to={'/app/wasm/image-to-ascii'}
            as={Link}
            image={imageToAscii.childImageSharp.fixed}
            title="Image to Ascii"
            info="Convert images to text characters on the browser."
          />
          <DropDownDisplayItem
            as={Link}
            to={'/app/sorting'}
            image={sorting.childImageSharp.fixed}
            title="Sorting Algorithms"
            info="Bubble sort, Merge sort heap sort and more"
          />
          <DropDownDisplayItem
            as={Link}
            image={searching.childImageSharp.fixed}
            title="Path finding Algorithms"
            info="Visualize path finding algorithms ins gird"
            to={'/app/graph-search'}
          />
          <DropDownDisplayItem
            to={'/app/drawable-graph'}
            as={Link}
            image={toc.childImageSharp.fixed}
            title="Searching Algorithms"
            info="A* search, BFS, DFS, Dijkstra"
          />
          <DropDownDisplayItem
            to={'/app/games/snake-game'}
            as={Link}
            image={snakeGame.childImageSharp.fixed}
            title="Snake Game"
            info="Play snake game online"
          />
          <DropDownDisplayItem
            to={'/app/nepali-date/converter'}
            as={Link}
            image={nepaliDate.childImageSharp.fixed}
            title="Nepali Date Playground"
            info="Covert Nepali date to english and vice versa"
          />
        </div>
      </Popover>
      <Popover
        placement="bottom-start"
        offset={[0, -3]}
        elementAs={mobileNavDropDownFactory(
          '/projects',
          'Projects',
          GiStarFormation
        )}
        iconsAs={MdApps}
      >
        <div className="lg-navbar__drop-down" key="1">
          <DropDownDisplayItem
            as={Link}
            to={'/api-test'}
            image={api.childImageSharp.fixed}
            title="API testing with api-test"
            info="JSON API automated testing program"
          />
        </div>
      </Popover>
      <ThemePicker offset={[0, -3]} mobile />
    </nav>
  )
})

function DropDownDisplayItem({ image, title, info, as = 'div', ...props }) {
  const As = as
  return (
    <As
      className="lg-navbar__drop-down__item lg-navbar__drop-down__display-item"
      {...props}
    >
      <div className="lg-navbar__drop-down__image">
        <Image fixed={image} alt="Website logo" className={'lg-navbar-img'} />
      </div>
      <div className="lg-navbar__drop-down__text">
        {title}
        <div className="lg-navbar__drop-down__dim">{info}</div>
      </div>
    </As>
  )
}

export default MobileNav
