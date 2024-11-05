import React from 'react'
import AdminNavbar from './components/admin-navbar';

const AdminLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <>
    
        <AdminNavbar />

        <main>
            {children}
        </main>
    </>
  )
}

export default AdminLayout