"use client";

import clsx from "clsx";

import { logoutUserAction } from "@utils/actions/auth";

// import { useToggleSidebar } from "@contexts/SidebarProvider"

import Typography from "@components/ui/Typography";
import Button from "@components/ui/Button";

import Container from "@components/layouts/Container";
import {
  Grid,
  GridItem
} from "@components/layouts/Grid";

function TopNav() {
  // const { openSidebar } = useToggleSidebar();

  return (
    <nav
      className={clsx(
        "z-20",
        "fixed",
        "top-0",
        "right-0",
        "left-0",
        "flex",
        "items-center",
        "justify-center",
        "w-full",
        "h-16",
        "py-3 sm:py-4",
        "bg-surface-light",
        "border-b-2",
        "transition-all",
        "duration-300",
        "ease-in-out",
      )}
    >
      <Container>
        <Grid
          className={clsx(
            "grid-cols-2",
            "items-center",
          )}
        >
          <GridItem
            className={clsx(
              "col-span-1",
            )}
          >
            <a className="mr-4 flex items-center space-x-2 lg:mr-6 text-black" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-6 w-6">
                <rect width="256" height="256" fill="none" />
                <line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
                <line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
              </svg>

              <span className="font-serif text-lg font-medium inline-block text-black">Shadcn/UI</span>
            </a>
          </GridItem>

          <GridItem
            className={clsx(
              "col-span-1",
              "text-end",
            )}
          >
            <form action={logoutUserAction}>
              <Button type="submit" size="xs" color="black">
                Logout
              </Button>
            </form>

            {/* {
              <Button
                size="xs"
                variant="outlined"
                color="secondary"
                onClick={openSidebar}
              >
                dfs
              </Button>
            } */}
          </GridItem>
        </Grid>
      </Container>
    </nav >
  );
}

export default TopNav;
