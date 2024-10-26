"use client";
import MaxWidth from "@/components/general/MaxWidth";
import Link from "next/link";
import HomeLogo from "@/components/general/HomeLogo";
import { Button } from "@/components/ui/button";
import { CiBullhorn } from "react-icons/ci";
import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { deleteCookie } from "cookies-next";
import { navlinks } from "@/data/navlinks";

const Navbar = ({ session }: { session: string | undefined }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (showMobileMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMobileMenu]);

  const mobileMenuHandler = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <header>
        <div className="bg-white">
          <MaxWidth className="flex items-center justify-between md:py-6 py-3">
            <Link href="/">
              <HomeLogo size="w-[10.5rem] h-[3.4rem] object-contain" />
            </Link>
            <div className="flex items-end md:gap-14 gap-4 ">
              <div>
                <CiBullhorn size={25} className="text-sky-900" />
              </div>
              <div
                className="hidden md:flex items-center gap-16 border-b pb-1 border-zinc-400 hover:border-zinc-950"
                role="button"
              >
                <span className="text-sky-900 text-xs font-light">English</span>
                <IoMdArrowDropdown className="mr-2" />
              </div>
              {session === "true" ? (
                // TODO: ADD SIGNOUT
                <Button
                  onClick={() => {
                    deleteCookie("connectedLog", {
                      path: "/",
                    });
                    router.refresh();
                  }}
                >
                  Log out
                </Button>
              ) : (
                <Button
                  className="bg-iam-orange-500"
                  onClick={() => router.push("/login")}
                >
                  Log in
                </Button>
              )}
            </div>
          </MaxWidth>
        </div>
        <nav className="bg-iam-blue-500 text-white">
          <MaxWidth className="md:pt-2 md:pb-[3px] py-2.5">
            <div className="md:flex hidden gap-10 text-sm">
              <Link
                href="/"
                className={cn(
                  "relative custom-after hover:after:h-[2px] font-medium",
                  pathname === "/" && "after:h-[2px]"
                )}
              >
                Welcome
              </Link>
              {session === "true" && (
                <>
                  {navlinks.map((item) => (
                    <Link
                      key={item.link}
                      href={item.link}
                      className={cn(
                        "relative custom-after hover:after:h-[2px] font-medium",
                        pathname === item.link && "after:h-[2px]"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
            </div>
            <button
              type="button"
              className="ml-4 md:hidden"
              onClick={mobileMenuHandler}
            >
              <IoIosMenu size={25} />
            </button>
          </MaxWidth>
        </nav>
      </header>

      {/*  Mobile Menu */}
      <Sheet open={showMobileMenu} onOpenChange={mobileMenuHandler}>
        <SheetContent
          side="left"
          className="w-[55dvw] bg-iam-blue-500 border-0"
        >
          <SheetHeader>
            <SheetTitle className="hidden">Mobile menu</SheetTitle>
          </SheetHeader>
          <SheetDescription className="hidden">
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="flex flex-col gap-8 text-white mt-10">
            <Link
              href="/"
              onClick={() => setShowMobileMenu(false)}
              className={cn(
                "relative custom-after hover:after:h-[2px] font-medium",
                pathname === "/" && "after:h-[2px]"
              )}
            >
              Welcome
            </Link>
            {session === "true" && (
              <>
                {navlinks.map((item) => (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setShowMobileMenu(false)}
                    className={cn(
                      "relative custom-after hover:after:h-[2px] font-medium",
                      pathname === item.link && "after:h-[2px]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </>
            )}
            <div
              className="flex items-center gap-16 border-b pb-1 border-black hover:border-zinc-950 w-3/4 text-black mt-10"
              role="button"
            >
              <span className=" text-xs font-light">English</span>
              <IoMdArrowDropdown className="mr-2" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;
