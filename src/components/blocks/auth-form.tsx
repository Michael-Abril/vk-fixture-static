import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

/**
 * A centred log-in or sign-up card. `onSubmit` receives the field values; the
 * form never navigates away (there is no backend until the app is deployed).
 *
 *   <AuthForm mode="signup" brand="Shopline" onSubmit={(values) => setUser(values.email)} />
 */
export function AuthForm({
  mode = "login",
  brand = "Acme",
  onSubmit,
  onSwitchMode,
}: {
  mode?: "login" | "signup"
  brand?: React.ReactNode
  onSubmit?: (values: { name?: string; email: string; password: string }) => void
  onSwitchMode?: () => void
}) {
  const signup = mode === "signup"
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSubmit?.({
      name: signup ? String(data.get("name") ?? "") : undefined,
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    })
  }
  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="font-heading text-2xl">{brand}</div>
          <CardTitle>{signup ? "Create your account" : "Welcome back"}</CardTitle>
          <CardDescription>{signup ? "Start in less than a minute." : "Log in to continue."}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit}>
            <FieldGroup>
              {signup ? (
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" name="name" autoComplete="name" required />
                </Field>
              ) : null}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" name="password" type="password" autoComplete={signup ? "new-password" : "current-password"} required />
                {signup ? <FieldDescription>At least 8 characters.</FieldDescription> : null}
              </Field>
              <Button type="submit" className="w-full">
                {signup ? "Create account" : "Log in"}
              </Button>
              <FieldDescription className="text-center">
                {signup ? "Already have an account? " : "New here? "}
                <button type="button" onClick={onSwitchMode} className="font-medium text-primary underline-offset-4 hover:underline">
                  {signup ? "Log in" : "Create an account"}
                </button>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
