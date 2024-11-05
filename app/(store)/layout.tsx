import React from "react";
import StoreNavbar from "./components/store-navbar";

const StoreLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<StoreNavbar />

			<main className="container py-6">{children}</main>
		</>
	);
};

export default StoreLayout;
