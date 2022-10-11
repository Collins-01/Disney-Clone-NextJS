// tsrfce
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import React from "react";
import { DropDown, NavMenu, SignOut, UserImg } from "../Header/styled";

interface Props {
  session: Session;
}

function SignedInHeader({ session }: Props) {
  return (
    <>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="Home icon" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="Search icon" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="Watchlist icon" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="Originals icon" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        {session === null ? (
          <div />
        ) : (
          <UserImg
            src={`${session.user?.image}`}
            alt={`${session.user?.name}`}
          />
        )}
        <DropDown>
          <span onClick={() => signOut()}>SignOut</span>
        </DropDown>
      </SignOut>
    </>
    // <h1>{session.user?.email}</h1>
  );
}

export default SignedInHeader;
