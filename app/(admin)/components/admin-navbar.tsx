"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
	return (
		<header className="container py-4">
			<nav className="flex items-center justify-between">
				<Link href={"/"}>SoulePsycle</Link>

				<div>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</nav>
		</header>
	);
};

export default AdminNavbar;
