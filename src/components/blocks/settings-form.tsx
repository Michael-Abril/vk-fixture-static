import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

/**
 * A settings page: a profile card and a notifications card with switches, each
 * with its own Save. Saving shows "Saved" beside the button; wire `onSave` to
 * the app's state.
 *
 *   <SettingsForm onSave={(section, values) => …} />
 */
export function SettingsForm({
  onSave,
}: {
  onSave?: (section: "profile" | "notifications", values: Record<string, string | boolean>) => void
}) {
  const [saved, setSaved] = React.useState<string | null>(null)
  const [alerts, setAlerts] = React.useState({ email: true, product: false, weekly: true })
  const save = (section: "profile" | "notifications", values: Record<string, string | boolean>) => {
    onSave?.(section, values)
    setSaved(section)
  }
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>How others see you.</CardDescription>
        </CardHeader>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            save("profile", Object.fromEntries([...new FormData(event.currentTarget)].map(([key, value]) => [key, String(value)])))
          }}
        >
          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="settings-name">Name</FieldLabel>
                <Input id="settings-name" name="name" defaultValue="Alex Morgan" />
              </Field>
              <Field>
                <FieldLabel htmlFor="settings-email">Email</FieldLabel>
                <Input id="settings-email" name="email" type="email" defaultValue="alex@example.com" />
              </Field>
              <Field>
                <FieldLabel htmlFor="settings-bio">Bio</FieldLabel>
                <Textarea id="settings-bio" name="bio" placeholder="A sentence about you" />
              </Field>
            </FieldGroup>
          </CardContent>
          <CardFooter className="mt-6 gap-3 border-t pt-6">
            <Button type="submit">Save profile</Button>
            {saved === "profile" ? <span className="text-sm text-muted-foreground">Saved</span> : null}
          </CardFooter>
        </form>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose what you hear about.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            {([
              ["email", "Account emails", "Sign-ins and security alerts."],
              ["product", "Product updates", "New features and improvements."],
              ["weekly", "Weekly summary", "A digest every Monday."],
            ] as const).map(([key, label, description]) => (
              <Field key={key} orientation="horizontal">
                <FieldContent>
                  <FieldLabel htmlFor={`settings-${key}`}>{label}</FieldLabel>
                  <FieldDescription>{description}</FieldDescription>
                </FieldContent>
                <Switch id={`settings-${key}`} checked={alerts[key]} onCheckedChange={(checked) => setAlerts({ ...alerts, [key]: checked })} />
              </Field>
            ))}
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-3 border-t pt-6">
          <Button onClick={() => save("notifications", alerts)}>Save notifications</Button>
          {saved === "notifications" ? <span className="text-sm text-muted-foreground">Saved</span> : null}
        </CardFooter>
      </Card>
    </div>
  )
}
