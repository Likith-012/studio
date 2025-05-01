// app/auth/login/layout.tsx
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Simple wrapper - no HTML/BODY tags
  return (
    <div className="auth-layout">
      {children}
    </div>
  )
}