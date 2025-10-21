import AdminSidebar from '../../components/AdminSidebar'

export default function AdminLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="flex w-full h-screen bg-base-100 box-border">
          <AdminSidebar />
          <main className="flex-1 bg-base-100 p-6">{children}</main>
        </div>
      </body>
    </html>
  )
}
